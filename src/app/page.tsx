import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";

// import dynamic from 'next/dynamic'
// const Advantages = dynamic(() => import('@/components/Advantages'))
// const PricesA = dynamic(() => import('@/components/PricesA/PricesA'))
// const Calculator = dynamic(() => import('@/components/Calculator'))

import Advantages from "@/components/Sections/Advantages";
import PricesA from "@/components/Sections/PricesA";
import Calculator from "@/components/Sections/Calculator";
import Discount from "@/components/Sections/Discount";
import Gift from "@/components/Sections/Gift";
import Teachers from "@/components/Sections/Teachers";
import Articles from "@/components/Sections/Articles";
import Questions from "@/components/Sections/Questions";
import Reviews from "@/components/Sections/Reviews";
import { ArrowUp } from "@/components/ArrowUp/ArrowUp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Feedback from "@/components/Sections/Feedback";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { Toaster } from 'react-hot-toast';

export default function Home() {

  return (
    <div className="relative overflow-hidden">


      <Hero />
      <Advantages />
      <PricesA />
      <Calculator />
      <About />
      <Discount />
      <Gift />
      <Teachers />
      <Articles limit={2} />
      <Questions />
      <Reviews />
      <Feedback />
      <ArrowUp className="fixed bottom-40 t:bottom-12 right-6 z-10" />
      <ToastContainer />
      {/* <Toaster /> */}
    </div >
  );
}
