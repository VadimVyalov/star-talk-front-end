import Image from "next/image";
import Link from "next/link";
import cn from "@/helpers"
import { BsArrowRightShort } from "react-icons/bs";

const hero_img = '/assets/image/hero.jpg'

const Hero = () => {
    return (
        <section id='hero' className="mb-[72px] t:mb-[100px] d:mb-[120px]">
            <div className="container  ">
                <div className="flex flex-col-reverse gap-y-10 t:grid t:grid-cols-2 t:gap-x-6">
                    <div className="flex flex-col  items-center text-center justify-center">
                        <h1 className="font-roboto text-[27px] d:text-[84px] font-semibold leading-[1.3] mb-4 d:mb-10">Мовна школа “Star Talk”</h1>
                        <p className=" d:text-[20px] font-medium  d:mb-3">Англійська - це впевненість в собі і нові можливості</p>
                        <p className=" d:text-[20px] font-semibold t:font-bold d:font-extrabold mb-5 d:mb-10 "> БУДЬ ПОПЕРЕДУ!</p>
                        <Link href="/" className={cn("greenLink flex text-lg items-center gap-x-2",
                            " w-full t:w-fit px-[26px] py-[18px] justify-center")}>
                            <span>Визначте свій рівень</span>
                            <BsArrowRightShort size={28} />
                        </Link>
                    </div>
                    <Image className="rounded-3xl"
                        priority={true}
                        src={hero_img}
                        alt="hero image"
                        sizes="(max-width: 590px) 100vw, 50vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        width={587}
                        height={445} />

                </div>
            </div>
        </section>
    )
}

export default Hero;