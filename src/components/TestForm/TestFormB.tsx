//'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import cn from "@/helpers"
import { FormData } from './types';
import FormWrapperWithCaptcha from '../ModalForm/FormWrapperWithCaptcha';
import FormInput from '../NestedForm/FormInput';
import FormSubmit from '../NestedForm/FormSubmit';
import { Element } from './Element';
import { name, email, telegramOrPhone as phone } from "@/helpers/validation";
import makeSchemaA from './helpers/makeShemaA';
//import makeAnswer from './helpers/makeAnswer';
//import questions from '../../../public/data/test.json' assert { type: 'json' }
import useGetData from '@/hooks/useGetData';
import { getLS } from '@/helpers/lsStorage';
import PoliticsNotification from '../PoliticsNotification';

// const contactInputStyle = {
//   wraper: 'flex flex-col gap-y-2 w-full  ',
//   label: 'text-[0] border-b-2 border-black-15  transition-colors text-black-100',
//   input: 'outline-none bg-transparent text-base leading-[1.5] w-full pt-3 pb-2 ',
//   error: ' text-error-100 text-xs/[15px]'
// }
const contactInputStyle = {
  wraper: 'flex flex-col gap-y-1  w-full',
  label: 'text-lg/[27px] font-medium  flex flex-col  transition-colors',
  input: 'outline-0 bg-transparent text-base border border-black-30 hover:border-accent-100 focus:border-accent-100 rounded-[5px] placeholder-black-30 w-full px-[25px] py-[12px] resize-none t:min-w-[280px]',
  inputError: 'hover:border-error-100 focus:border-error-100',
  error: ' text-error-100 text-xs/[15px]'
}

export const TestFormB = () => {
  type Status = 'contact' | 'questions' | 'submit' | 'pending' | 'finish' | 'error' | 'notAllow'
  const [step, setStep] = useState(-1);
  const [status, setStatus] = useState<Status>('contact')
  const [question, setQuestion] = useState<FormData | null>(null);

  // const dataQuestion = JSON.parse(JSON.stringify(questions)) as FormData[]

  // const isLoading = false
  // const error = false

  const { data: dataQuestion, error, isLoading } = useGetData<FormData[]>(`quizzes`);

  const questionNum = dataQuestion ? dataQuestion.length - 1 : 0
  //const questionNum = 2
  const unData = !Array.isArray(dataQuestion) || questionNum < 1

  const nextQ = () => {
    if (step < questionNum && allowSend) setStep(prev => prev + 1)

  }
  // const prevQ = () => {
  //   if (step > -1) setStep(prev => prev - 1)
  // }
  const allowSend: boolean | undefined = getLS("politics")
  const [showPolitics, setShowPolitics] = useState(false)
  useEffect(() => {

    if (step <= questionNum && dataQuestion) setQuestion(dataQuestion[step])
    if (step > -1) setStatus('questions')
    if (step > questionNum - 1) setStatus('submit')

  }, [step])

  const validationSchema = status === 'contact'
    ? { name, phone, email }
    : makeSchemaA(question)

  const answerVariants =
  {
    type: question?.type || 'multiCheck',
    id: question?.id || 'notVariantId',
    items: question?.variants || [{ 'id': 'notVariant', 'value': 'notVariant' }]
  }


  if (isLoading) {
    return <p>Завантаження даних ...</p>
  }

  if (error || (unData && !isLoading)) {
    return (

      <div className='flex flex-col justify-center items-center mt-[72px] t:mt-[100px] d:mt-[150px]' >
        <h1 className="sectionTitle">Помилка завантаження даних</h1>
        <Link href="/" className={cn('greenLink  w-full t:max-w-[250px] mt-1 h-fit')}>На головну</Link>
      </div>
    )
  }

  if (status === 'pending') {
    return <p>Обробка даних ...</p>;
  }

  if (status === 'error') {
    return (
      <div className='flex flex-col justify-center items-center mt-[72px] t:mt-[100px] d:mt-[150px]' >
        <h1 className="sectionTitle">Помилка обробки даних</h1>
        <Link href="/" className={cn('greenLink  w-full t:max-w-[250px] mt-1 h-fit')}>На головну</Link>
      </div>
    )

  }

  if (status === 'finish')
    return (
      <div className='flex flex-col justify-center items-center mt-[72px] t:mt-[100px] d:mt-[150px]' >
        <h1 className="sectionTitle">Вітаємо тест завершено</h1>
        <Link href="/" className={cn('greenLink  w-full t:max-w-[250px] mt-1 h-fit')}>На головну</Link>
      </div>
    )
  console.log(allowSend);

  return (
    <>
      <h1 className="sectionTitle">Тест на визначення рівня англійської</h1>
      {status === 'contact'
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

      <FormWrapperWithCaptcha
        schema={validationSchema}
        captchaName='test'
        Questions={dataQuestion}
        onPending={() => setStatus('pending')}
        onSuccess={() => setStatus('finish')}
        onError={() => setStatus('error')}
        // onFinally={(formData) => console.log(formData)}
        notAllow={() => { setShowPolitics(true) }}
        className={cn('flex flex-col', status === 'contact'
          ? ' t:flex-row justify-between gap-x-6 items-end' : '')}
      >
        {
          status === 'contact'
            ? <div className="flex  flex-col gap-x-5 gap-y-5 d:gap-y-6 w-full t:max-w-[384px]">
              <FormInput type='text' name="name" label="Ім’я*" placeholder="Ім’я" styles={contactInputStyle} />
              <FormInput type='text' name="phone" label="Телефон або нік в Telegram*" placeholder="+380667778899 або User123" styles={contactInputStyle} />
              <FormInput type='text' name="email" label="Пошта*" placeholder="example@email.com" styles={contactInputStyle} />

            </div> : null
        }
        {status === 'questions' || status === 'submit'
          ? <div>
            <h3 className='mb-6'>{`${step + 1}. ${question?.title}`}</h3>
            <Element element={answerVariants} />
          </div> : null
        }

        <FormSubmit
          type={(status === 'submit' || !allowSend) ? 'submit' : 'button'}
          onClick={nextQ}
          className={cn('greenLink  w-full t:max-w-[250px] mt-12 mb-5 h-fit')}
          label={status === 'contact' ? 'Почати тест' : status === 'submit' ? 'Завершити' : 'Продовжити'}
          title={status === 'contact' ? 'Почати тест' : status === 'submit' ? 'Завершити' : 'Продовжити'}
        />
        <PoliticsNotification
          isOpen={showPolitics}
          onCloseMenu={() => { setShowPolitics(false) }} />
      </FormWrapperWithCaptcha>

      {status === 'questions' || status === 'submit'
        ?
        <div className='h-5 px-5 t:px-[50px] py-[5px] mt-12 w-full d:w-[692px] mx-auto rounded-full bg-grey-4'>
          <div
            style={{
              width: step < 0
                ? '10px' : step > questionNum
                  ? '100%'
                  : `${(step + 1) / (questionNum + 1) * 100}%`
            }}
            className={`h-full rounded-full  bg-accent-100 transition-['width'] duration-300`}>
          </div>
        </div> : null
      }
    </>
  );
};