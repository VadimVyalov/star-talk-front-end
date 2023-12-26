import Image from "next/image";
import Link from "next/link";
import cn from "@/helpers"
import Icon from "../../Icon";
const hero_img = '/assets/image/hero.jpg'

const HeroA = () => {
    return (
        <section id='hero' className="mb-[72px] t:mb-[100px] d:mb-[120px]">
            <div className="container  ">
                <div className="grid grid-cols-1 gap-y-10 t:grid-cols-[minmax(250px,570px)_auto_minmax(220px,590px)] t:gap-x-3">
                    <div className="flex flex-col  items-center text-center justify-center
                                    row-start-2 t:row-start-1 ">
                        <h1 className="font-roboto text-hero_m t:text-hero_d font-semibold leading-[1.25] mb-4 d:mb-10 flex flex-wrap justify-center gap-x-2">
                            <span className="">Мовна школа</span>
                            <span className="whitespace-nowrap"> “Star Talk”</span>
                        </h1>
                        <p className=" d:text-[20px] font-medium  d:mb-3">Англійська - це впевненість в собі і нові можливості</p>
                        <p className=" d:text-[20px] font-semibold t:font-bold d:font-extrabold mb-5 mt-5 d:mb-10 "> БУДЬ ПОПЕРЕДУ!</p>
                        <Link href="/test" className={cn("greenLink flex text-lg items-center gap-x-2",
                            " w-full  t:max-w-[300px]  py-[18px] justify-center")}>
                            <span>Визначте свій рівень</span>
                            <Icon name="/assets/icons/small.svg" id="arrow-right" />
                        </Link>
                    </div>
                    <div className="h-[70vw] t:h-full relative  t:col-start-3"
                    // className="h-[70vw] t:h-[40vh] d:h-[55vh] relative t:col-start-3"
                    >
                        <Image className="rounded-3xl "
                            priority={true}
                            src={hero_img}
                            alt="hero image"
                            sizes="(max-width: 590px) 100vw, 42vw"
                            fill
                            style={{ objectFit: 'cover', height: '100%' }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroA;