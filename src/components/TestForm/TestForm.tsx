'use client'
import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { Check, Radio } from './elements';
import { test } from "@/helpers/validation";
import dataQuestion from '../../../public/data/test.json'
import ContactForm from './elements/ContactForm';
import { ElementType } from './types';

type FormData = {
  id: string;
  title: string;
  variants: { id: string, value: string }[]
  ansver: string;
};


export const TestForm = () => {


  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState(false);

  const [step, setStep] = useState(-1);
  const [data, setData] = useState<FormData | null>(null);

  const questionNum = dataQuestion.length - 1

  const nextQ = async () => {
    if ((step < questionNum)) {
      setStep(prev => prev + 1)
    }
  }

  const prevQ = () => {
    if (step > -1)
      setStep(prev => prev - 1)
  }

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

  // if (data) {
  //   console.log(makeSchema(data))
  //   console.log(checkSchemaO);

  // }


  let validationSchema: yup.AnyObject

  const checkSchema = data ? makeSchema(data) : yup.object().shape({ ...defaultSchema })

  validationSchema = step < 0 ? test : makeSchema(data)

  const formMetods = useForm({
    resolver: yupResolver(checkSchema),
    mode: "onTouched",

  });

  useEffect(() => {
    setData(dataQuestion[step])
  }, [step]
  )


  const onSubmit = (data: any) => console.log('submit ', data);

  if (isLoading) {
    return <p>Зачекай...</p>;
  }

  if (!data && step > -1) {
    return <p>помилка завантаження даних</p>;
  }

  return (
    <FormProvider {...formMetods}>
      <form onSubmit={formMetods.handleSubmit(onSubmit)}>

        {step < 0
          ?
          <div>
            <ContactForm />
          </div>
          :
          <div>
            <h1>{`${step + 1}. ${data?.title}`}</h1>

            <Check type={ElementType.check} id={data?.id || 'notVariantId'} items={data?.variants || [{ id: 'notVariant', value: 'notVariant' }]} />
            {/* <Radio type={ElementType.radio} id={data?.id || 'notVariantId'} items={data?.variants || [{ id: 'notVariant', value: 'notVariant' }]} /> */}

          </div>
        }

        <button type={step < questionNum ? 'button' : 'submit'} onClick={nextQ} disabled={!formMetods.formState.isValid}
          className='greenLink py-3.5 w-full t:w-[279px] mt-12' >{step < 0 ? 'Почати тест' : 'Продовжити'} </button>
        <button type='submit'
          className='greenLink py-3.5 w-full t:w-[279px] mt-12' >Перевірка</button>

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