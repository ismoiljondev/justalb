import Image from "next/image";
import officeImage from "@/public/images/team/team.webp";
const index = () => {
  return (
    <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 m-32 overflow-hidden">
      <h2 className="text-4xl sm:text-65xl font-bold text-center">
        Kuchli dasturchilar jamoasidan sifatli <br /> ta'lim oling
      </h2>
      <h3 className="text-2xl font-medium text-center pt-10 opacity-50">
        O'zbekistonda yoshlarni ish bilan ta'minlash va 100 foiz grant asosida
        dasturchilarni tayyorlash bo'yicha birinchi dasturlash maktabi.
      </h3>
      <div className="grid grid-cols-1 my-16 overflow-hidden shadow-2xl rounded-3xl">
        <Image
          src={officeImage}
          alt="office-image"
          height={684}
          width={1296}
          className="brightness-75 rounded-3xl"
        />
      </div>
    </div>
  );
};

export default index;
