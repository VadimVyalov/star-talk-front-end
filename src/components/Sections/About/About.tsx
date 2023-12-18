import Image from "next/image";
const about_img = '/assets/image/about.jpg'
import principles_list from '../../../../public/data/principles.json'

const About = () => {
  return (
    <section id="about" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container">
        <h2 className="sectionTitle">Про нас</h2>
        <div className="grid grid-cols-1 d:grid-cols-[minmax(345px,500px)_auto_minmax(445px,650px)] d:gap-x-auto w-full">
          <div className="relative h-[70vw] d:max-w-[500px] d:min-h-[500px] d:h-auto   ">
            <Image className="rounded-3xl"
              src={about_img}
              alt="about image"
              sizes="(max-width: 590px) 100vw, 42vw"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="d:col-start-3 d:pl-5 mt-6 t:mt-8 d:mt-0">
            <h3 className="font-roboto text-2xl leading-[1.5] font-medium mb-5">Хто ми? Наша місія</h3>
            <p className="ml-6 mb-6">
              Ми - команда закоханих в свою справу людей, мета яких - розговорити
              якомога більше українців
            </p>


            <h3 className="font-roboto text-2xl leading-[1.5] font-medium mb-5 ">Принципи роботи школи</h3>
            <ul className="flex flex-col gap-y-4">
              {principles_list?.map(item => {
                return (
                  <li key={item.id} className="flex before:content-star before:mr-2 ml-6 ">
                    {item.text}
                  </li>
                )
              })

              }

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;