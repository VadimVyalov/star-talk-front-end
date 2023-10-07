import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Prices from "@/components/Prices";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <About />
      <Advantages />
      <Prices/>
	  {/* <ButtonArrowUp className="fixed bottom-[50px] right-[3%] z-30" /> */}
			
    </div>
  );
}
