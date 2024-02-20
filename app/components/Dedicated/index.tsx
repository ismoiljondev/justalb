import Image from "next/image";
import man from "@/public/images/team/ceo.png";
import comma from "@/public/images/dedicated/comma.svg";
const Dedicated = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 my-16">
          {/* COLUMN-1 */}
          <div>
            <Image
              src={man}
              alt="man-icon"
              width={416}
              height={530}
              className="mx-auto md:mx-0 rounded-3xl"
            />
          </div>

          {/* COLUMN-2 */}
          <div className="relative">
            <Image
              src={comma}
              alt="comma-image"
              width={200}
              height={106}
              className="absolute comma-pos hidden lg:block"
            />
            <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">
              IT hamjamiyat yorug' kelajagimiz poydevori
            </h2>
            <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">
              Kuchli jamoamiz bo'lmaganida bunaqa qisqa vaqt ichida yirik
              yutuqlarga erisha olmagan bo'lardik. Har bir bitiruvchimiz o'z
              bilim va tajribalari bilan har doim beminnat ulashishga tayyorlar.
            </p>
            <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-start">
              {" "}
              Nurislom Razzoqov, CEO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dedicated;
