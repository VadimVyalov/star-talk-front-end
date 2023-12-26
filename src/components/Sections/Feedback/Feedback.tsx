"use client"

import cn from "@/helpers"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import FeedbackForm from "./FedbackForm";

const Feedback = () => {




  return (
    <section id="feedback" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container">

        <div className="d:grid  d:gap-x-6 d:grid-cols-2">
          <h2 className={cn("t:flex t:flex-col  t:items-center justify-center sectionTitle", " d:col-start-1  d:row-start-1 ")}>
            <span className="">З’явилися запитання?</span> <span className="whitespace-nowrap">Напишіть нам!</span>
          </h2>
          <GoogleReCaptchaProvider
            reCaptchaKey={`${process.env.NEXT_PUBLIC_CAPCHA_CLIENT}`}
            scriptProps={{
              async: false,
              defer: false,
              appendTo: "head",
              nonce: undefined,

            }}
          >
            <FeedbackForm />
          </GoogleReCaptchaProvider>


        </div>


      </div >
    </section >
  );
};

export default Feedback;