import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import dots from "@/public/images/aboutus/dots.svg";
interface datatype {
  heading: string;
  imgSrc: string;
  paragraph: string;
  link: string;
  go: string;
}

const Aboutdata: datatype[] = [
  {
    heading: "Biz haqimizda",
    imgSrc: "/images/aboutus/imgOne.svg",
    paragraph:
      "Biz o’quv markazi emas, balki IT-ni o’rganishdan ishga kirguningizgacha ta’lim beradigan dunyodagi yagona ta’lim maskani. Bunday imkoniyatlarga grant asosida ega bo’lish uchun shartlarimiz bilan tanishib chiqing",
    link: "Batafsil",
    go: "https://www.youtube.com/watch?v=6Yy4WC0zUKE&t=2s&ab_channel=AlbisonAcademy",
  },
  {
    heading: "Qizlar uchun",
    imgSrc: "/images/aboutus/imgTwo.svg",
    paragraph:
      "IT Girls kursi IELTS 7+ bo’lgan qizlar uchun  maxsus kurs bo’lib, barcha bitiruvchilar hozirda IT kompaniyalarda ishlab kelmoqda. Bu kursga qabul faqat yilda bir marta bo'lib, xotin-qizlar kuni munosabati bilan tashkil etiladi ",
    link: "Batafsil",
    go: "https://www.spot.uz/oz/2023/03/10/it-girls/",
  },
  {
    heading: "Ishga kirish",
    imgSrc: "/images/aboutus/imgThree.svg",
    paragraph:
      "Xayriya kurslari eng qisqa vaqt ichida kadrlarni tayyorlab, ishga joylashtirish uchun ishlab chiqilgan. Kursdan keyin siz xohlagan ishga joylashish yoki Albison jamoası bilan birgalikda o’sishda davom etishingiz mumkin",
    link: "Batafsil",
    go: "https://www.youtube.com/@albisonuz/shorts",
  },
];

const Aboutus = () => {
  return (
    <div id="aboutus-section" className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative">
        <Image
          src={dots}
          width={100}
          height={100}
          alt="dots-image"
          className="absolute bottom-1 -left-20"
        />
        <h3 className="text-center text-blue text-lg tracking-widest">
          Biz haqimizda
        </h3>
        <h4 className="text-center text-4xl lg:text-65xl font-bold">
          Aslida kimmiz?
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-30">
          {Aboutdata.map((item, i) => (
            <div
              key={i}
              className="hover:bg-navyblue bg-white rounded-3xl mt-16 pt-5 pl-8 pb-15 pr-6 shadow-xl group"
            >
              <h4 className="text-4xl font-semibold  text-black mb-5 group-hover:text-white">
                {item.heading}
              </h4>
              <Image
                src={item.imgSrc}
                alt={item.imgSrc}
                width={100}
                height={100}
                className="mb-2"
              />
              <h4 className="text-lg font-normal text-black group-hover:text-offwhite mb-2">
                {item.paragraph}
              </h4>
              <Link
                target="_blank"
                href={item.go}
                className="text-lg font-semibold group-hover:text-white text-blue hover-underline"
              >
                {item.link}
                <ChevronRightIcon width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
