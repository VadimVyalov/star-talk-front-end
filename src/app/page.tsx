
import Hero from "@/components/Hero";
import About from "@/components/About";

// import dynamic from 'next/dynamic'
// const Advantages = dynamic(() => import('@/components/Advantages'))
// const PricesA = dynamic(() => import('@/components/PricesA/PricesA'))
// const Calculator = dynamic(() => import('@/components/Calculator'))

import Advantages from "@/components/Advantages";
import PricesA from "@/components/PricesA";
import Calculator from "@/components/Calculator";
import Discount from "@/components/Discount";
import Gift from "@/components/Gift";
import Teachers from "@/components/Teachers";
import Questions from "@/components/Questions";
import { ArrowUp } from "@/components/ArrowUp/ArrowUp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
      <Questions />
      <ArrowUp className="fixed bottom-12 right-6 z-10" />

    </div>
  );
}
