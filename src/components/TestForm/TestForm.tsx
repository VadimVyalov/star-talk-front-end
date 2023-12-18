//'use client'
import React, { useCallback, useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { ElementType } from './types';
import { Check, Radio } from './elements';
import { test } from "@/helpers/validation";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import ContactForm from './elements/ContactForm';
import { toast } from "react-toastify";

import cn from "@/helpers"

type FormData = {
  id: string;
  title: string;
  variants: { id: string, value: string }[]
  ansver: string[];
};

import dataQuestion from '../../../public/data/test.json'
import { sendFeedBack } from '@/helpers/sendFeedBack';
import Link from 'next/link';

export const TestForm = () => {


  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState(false);

  const [step, setStep] = useState(-1);
  const [data, setData] = useState<FormData | null>(null);

  const questionNum = dataQuestion.length - 1

  const defaultSchema: { [key: string]: any } = {}
  const validateKey = data?.id || 'dataKey'

  defaultSchema[validateKey] = yup.string().required()

  const radioSchema = yup.object({ ...defaultSchema })

  const makeSchema = (data: FormData | null) => {

    if (!data) return yup.object().shape({ ...defaultSchema })

    const questions = data.id

    const variants = data.variants.reduce((acc: { [key: string]: any }, i) => {
      return { ...acc, [i.id]: yup.bool() }
    }, {})


    const Schema = yup.object().shape({
      [questions]: yup.object().shape({ ...variants })
        .test((questions) => Object.values(questions).some(i => i))
    })
    return Schema
  }


  let validationSchema

  const checkSchema = data ? makeSchema(data) : yup.object().shape({ ...defaultSchema })

  validationSchema = step < 0 ? test : checkSchema
  const { executeRecaptcha } = useGoogleReCaptcha();
  const formMetods = useForm({

    resolver: yupResolver(validationSchema),
    mode: "onTouched",

  });
  const nextQ = () => {

  }

  const prevQ = () => {
    if (step > -1)
      setStep(prev => prev - 1)
  }

  const makeAnswer = async (data: any) => {


    const checked = dataQuestion.map(item => {
      const checked_answer = item.variants.filter(v => data[item.id][v.id])
      const answer_variant = item.variants.map(a => a.value)
      const checked_answer_value = checked_answer.map(i => i.value)
      const answer = item.ansver as unknown as string[]

      return {
        'question': item.title,
        'ansver_varian': answer_variant,
        'answer': answer,
        'checked_answer_id': checked_answer.map(i => i.id),
        'checked_answer_value': checked_answer_value,
        'result': answer.filter(i => !checked_answer_value.includes(i))
          .concat(checked_answer_value.filter(i => !item.ansver.includes(i))).length === 0
      }
    })
    const total = checked.filter(i => i.result).length
    // console.log(`Вірних відповідей ${total} з ${dataQuestion.length} === `, checked)
    // console.log(checked.result);
    return `Тест завершено. Вірних відповідей ${total} з ${dataQuestion.length} `
  };


  const action: () => void = formMetods.handleSubmit(async (data) => {

    if ((step < questionNum)) {
      setStep(prev => prev + 1)
      return
    }

    const answer = await makeAnswer(data)
    const token = await handleReCaptchaVerify();
    if (token) {
      data.message = answer
      toast.promise(
        sendFeedBack(data, token),
        {
          pending: 'очікую відповідь сервера...',
          success: 'Дякуємо, запит успішно надіслано. Найближчим часом ми з Вами сконтактуємо',
          error: 'Щось пішло не так, спробуйте пізніше'
        },
        {
          autoClose: 3000,
        }
      ).finally(() => setState(true));
    } else { toast.error('Спрацював захист від ботів') }
  });


  useEffect(() => { setData(dataQuestion[step] as unknown as FormData) }, [step])

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      return;
    }
    const token = await executeRecaptcha("test");
    return token;
  }, [executeRecaptcha]);


  if (isLoading) {
    return <p>Зачекай...</p>;
  }

  if (!data && step > -1) {
    return <p>помилка завантаження даних</p>;
  }

  return (

    state ? <div className='flex flex-col justify-center items-center mt-[72px] t:mt-[100px] d:mt-[150px]' >
      <h1 className="sectionTitle">Вітаємо тест завершено</h1>
      <Link href="/" className={cn('greenLink py-3.5 w-full t:w-[279px] mt-1 shrink-0 h-fit')}>На головну</Link>

    </div> : <FormProvider {...formMetods}>
      <h1 className="sectionTitle">Тест на визначення рівня англійської</h1>
      {step < 0
        ? <div>
          <p>{'Привіт) Якщо ти вже перевіряєш рівень своєї англійської, це означає, що залишився один крок і можна починати вдосконалювати себе, вивчаючи мову=) '}</p>
          <ul className='flex flex-col gap-y-1.5 mt-4 mb-10'>
            <li> <p>0 - 7 - A1 </p></li>
            <li> <p>8 - 15 - A2 </p></li>
            <li> <p>16 - 23 - B1 </p></li>
            <li> <p>24 - 29 - B2 </p></li>
          </ul>
        </div>
        : null}

      <form action={action}

        className={cn('flex flex-col', step < 0 ? ' t:flex-row justify-between gap-x-6 items-end' : '')}>

        {
          step < 0
            ? <ContactForm />
            : <div>
              <h3 className='mb-6'>{`${step + 1}. ${data?.title}`}</h3>
              <Check type={ElementType.check} id={data?.id || 'notVariantId'} items={data?.variants || [{ id: 'notVariant', value: 'notVariant' }]} />
              {/* <Radio type={ElementType.radio} id={data?.id || 'notVariantId'} items={data?.variants || [{ id: 'notVariant', value: 'notVariant' }]} /> */}
            </div>
        }

        {/* <button type={step < questionNum ? 'button' : 'submit'} onClick={nextQ} disabled={!formMetods.formState.isValid}
          className={cn('greenLink py-3.5 w-full t:w-[279px] mt-12 shrink-0 h-fit')} >{step < 0 ? 'Почати тест' : 'Продовжити'} </button>
         */}

        {/* <button type='submit'
          className='greenLink py-3.5 w-full t:w-[279px] mt-12' >Перевірка</button> */}

        <button type={'submit'} disabled={!formMetods.formState.isValid}
          className={cn('greenLink py-3.5 w-full t:w-[279px] mt-12 shrink-0 h-fit')} >{step < 0 ? 'Почати тест' : 'Продовжити'} </button>

      </form>
      {step < 0
        ?
        null
        :
        <div className='h-5 px-5 t:px-[50px] py-[5px] mt-12 w-full d:w-[692px] mx-auto rounded-full bg-grey-4'>
          <div
            style={{ width: step > 0 ? `${(step) / questionNum * 100}%` : '10px' }}
            className={`h-full rounded-full  bg-accent-100 transition-['width'] duration-300`}>
          </div>
        </div>
      }


      <button type='button' onClick={prevQ} className='h-6 w-12 m-2 border border-accent-100 rounded'> prev </button>
      <button type='button' onClick={nextQ} className='h-6 w-12 m-2 border border-accent-100 rounded disabled:bg-red-600' > next</button>


    </FormProvider>

  );
};