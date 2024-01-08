//'use client'
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from "react-toastify";
import { yupResolver } from '@hookform/resolvers/yup'
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { FormData } from './types';
import cn from "@/helpers"
import { test } from "@/helpers/validation";
import { sendFeedBack } from '@/helpers/sendFeedBack';

import ContactForm from './elements/ContactForm';
import makeSchema from './helpers/makeShema';
import makeAnswer from './helpers/makeAnswer';
import { Element } from './Element';

import questions from '../../../public/data/test.json' assert { type: 'json' }


export const TestFormA = () => {



  const [state, setState] = useState(false);
  const [ready, setReady] = useState(false);
  const [step, setStep] = useState(-1);
  const [question, setQuestion] = useState<FormData | null>(null);


  const { executeRecaptcha } = useGoogleReCaptcha();

  const dataQuestion = JSON.parse(JSON.stringify(questions)) as FormData[]
  const isLoading = false
  const isError = false

  const questionNum = dataQuestion.length - 1

  let validationSchema = step < 0 ? test : makeSchema(question)

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      return;
    }
    const token = await executeRecaptcha("test");
    return token;
  }, [executeRecaptcha]);


  const formMetods = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onTouched",
  });


  const nextQ = () => {
    if (step < questionNum + 1) setStep(prev => prev + 1)
  }

  //-= for test =-
  // const prevQ = () => {
  //   if (step > -1)
  //     setStep(prev => prev - 1)
  // }


  const action: () => void = formMetods.handleSubmit(async (data) => {



    // const answer = await makeAnswer(data, dataQuestion)
    // console.log(data);

    const token = await handleReCaptchaVerify();
    if (token) {
      //  data.message = answer
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


  useEffect(() => {

    setQuestion(dataQuestion[step])
    if (step > questionNum) setReady(true)
    // console.log(question);

  }, [step, ready])


  if (isLoading) {
    return <p>Зачекай...</p>;
  }


  if ((!question && step > -1 && !state && !ready) || isError) {
    return <p>Помилка завантаження даних</p>;
  }

  if (ready && !state && !isError) {
    return <p>Обробка</p>;
  }


  const answerVariants =
  {
    type: question?.type || 'multiCheck',
    id: question?.id || 'notVariantId',
    items: question?.variants || [{ 'id': 'notVariant', 'value': 'notVariant' }]
  }


  return (

    (state)
      ? <div className='flex flex-col justify-center items-center mt-[72px] t:mt-[100px] d:mt-[150px]' >
        <h1 className="sectionTitle">Вітаємо тест завершено</h1>
        <Link href="/" className={cn('greenLink py-3.5 w-full t:w-[279px] mt-1 shrink-0 h-fit')}>На головну</Link>

      </div>
      : <>
        <h1 className="sectionTitle">Тест на визначення рівня англійської</h1>
        {(step < 0)
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

        <FormProvider {...formMetods}>

          <form
            // action={action}
            onSubmit={action}
            className={cn('flex flex-col', step < 0 ? ' t:flex-row justify-between gap-x-6 items-end' : '')}>

            {
              step < 0
                ? <ContactForm />
                : <div>
                  <h3 className='mb-6'>{`${step + 1}. ${question?.title}`}</h3>
                  <Element element={answerVariants} />
                </div>
            }

            <button type={(step < questionNum + 1) ? 'button' : 'submit'}
              disabled={!formMetods.formState.isValid}
              onClick={nextQ}
              className={cn('greenLink py-3.5 w-full t:w-[279px] mt-12 shrink-0 h-fit')} >
              {step < 0 ? 'Почати тест' : step < questionNum ? 'Продовжити' : 'Завершити'}
            </button>

          </form>

          {step < 0
            ?
            null
            :
            <div className='h-5 px-5 t:px-[50px] py-[5px] mt-12 w-full d:w-[692px] mx-auto rounded-full bg-grey-4'>
              <div
                style={{ width: step < 0 ? '10px' : `${(step + 1) / (questionNum + 1) * 100}%` }}
                className={`h-full rounded-full  bg-accent-100 transition-['width'] duration-300`}>
              </div>
            </div>
          }

          {/* -= for test =-
     
     <button type='button' onClick={prevQ} className='h-6 w-12 m-2 border border-accent-100 rounded'> prev </button>
     
      <button type='button' onClick={() => { setReady(true) }} className='h-6 w-12 m-2 border border-accent-100 rounded disabled:bg-red-600' > next</button>
*/}
        </FormProvider>
      </>







  );
};