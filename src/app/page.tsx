import About from "@/components/About";
import Advantages from "@/components/Advantages";
import { ArrowUp } from "@/components/ArrowUp/ArrowUp";
import Calculator from "@/components/Calculator";
import Hero from "@/components/Hero";
import PricesA from "@/components/PricesA/PricesA";




export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <Advantages />
      <PricesA />
      <Calculator />
      <About />
      <ArrowUp className="fixed bottom-12 right-6 z-10" />

    </div>
  );
}
