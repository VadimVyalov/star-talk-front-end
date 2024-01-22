
"use client"
import React from "react"
import { TestForm } from "@/components/TestForm";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function Test() {
  return (
    <section id="test" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container">

        <GoogleReCaptchaProvider
          reCaptchaKey={`${process.env.NEXT_PUBLIC_CAPCHA_CLIENT}`}
          scriptProps={{
            id: 'test_GoogleReCaptchaProvider'
          }}
        >
          <TestForm />
        </GoogleReCaptchaProvider>

      </div>
      <ToastContainer />
    </section>
  )
}