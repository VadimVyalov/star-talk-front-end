import Image from "next/image";
const about_img = '/assets/image/about.jpg'
const principles_list = [
  {
    id: 'pl-01',
    text: 'Коучинговий індивідуальний підхід, глибоке занурення в особистість'
  }, {
    id: 'pl-02',
    text: 'Визначення психотипу людини'
  }, {
    id: 'pl-03',
    text: 'Визначення цілей, аналіз попереднього досвіду навчання'
  }, {
    id: 'pl-04',
    text: 'Створення індивідуального плану навчання'
  }, {
    id: 'pl-05',
    text: 'Підбір темпу, методик навчання, манери пояснення матеріалу'
  }, {
    id: 'pl-06',
    text: '  Встановлення зв’язку, позитивного емоційного стану'
  }, {
    id: 'pl-07',
    text: 'Робота на результат, на досягнення цілей студента'
  },
]
const About = () => {
  return (
    <section id="about" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container">
        <h2 className="sectionTitle">Про нас</h2>
        <div className="grid grid-cols-1 d:grid-cols-[minmax(345px,500px)_auto_minmax(445px,650px)] d:gap-x-auto w-full">
          <div className="d:max-w-[500px] d:min-h-[500px] relative h-[90vw] d:h-auto t:min-h-[600px]  ">
            <Image className="rounded-3xl"
              src={about_img}
              alt="about image"
              sizes="(max-width: 590px) 100vw, 42vw"
              fill
              style={{
                //   width: 'auto',
                //height: '100%',
                objectFit: 'cover'
              }}
            // width={587}
            // height={445}
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
              {principles_list.map(item => {
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