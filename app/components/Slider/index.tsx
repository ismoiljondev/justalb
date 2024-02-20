import Slider, { Settings } from "react-slick";
import "./slider.css";
import Link from "next/link";

export const Responsive = ({ slide }: any) => {
  const settings: Settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* @ts-ignore */}
      <Slider {...settings} className="custom-slider">
        {slide?.map((sl: any, index: any) => (
          <div
            className="text-center border-2 border-blue  p-5 hover:bg-navyblue rounded-3xl  transition group overflow-scroll"
            key={index}
          >
            <h4 className="group-hover:text-white text-2xl font-bold mb-3 ">
              {sl.heading}
            </h4>
            <h2 className="text-5xl sm:text-65xl font-extrabold mb-3 group-hover:text-white">
              ${sl.price}*
            </h2>
            <p className="text-sm font-medium text-darkgrey mb-6">{sl.user}</p>
            <Link
              target="_blank"
              href={sl?.link}
              className="text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6"
            >
              Tanlov sizdan
            </Link>
            <div className="overflow-scroll">
              {sl?.features?.map((feature: string, index: any) => (
                <h3
                  key={index}
                  className="text-sm font-medium text-darkgrey mb-3 mt-6"
                >
                  {feature}
                </h3>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
