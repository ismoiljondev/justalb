"use client";
import Weworkslider from "./Weworkslider";

export const Teachers = () => {
  return (
    <div className="bg-wework py-32 overflow-hidden">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 ">
        <div className="text-center">
          <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">
            Bizning dasturchilar jamoasi
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">
            Bizning dasturchilar jamoasi
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">
            Bizning dasturchilar jamoasi
          </h3>
        </div>
      </div>
      <Weworkslider />
    </div>
  );
};
