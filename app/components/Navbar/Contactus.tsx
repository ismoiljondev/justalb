"use client";
// import { useState } from "react";

const Contactusform = () => {
  // let [isOpen, setIsOpen] = useState(false);

  // const [inputValues, setInputValues] = useState({
  //   input1: "",
  //   input2: "",
  //   input3: "",
  // });

  // const handleChange = (e: { target: { name: string; value: string } }) => {
  //   const { name, value } = e.target;
  //   setInputValues((prevState) => ({ ...prevState, [name]: value }));
  // };

  // const handleClick = () => {
  //   alert(
  //     `Name: ${inputValues.input1}, Email-address: ${inputValues.input2}, Message: ${inputValues.input3}`
  //   );
  //   setIsOpen(false);
  // };

  // FORM SUBMIT
  // const handleSubmit = (event: { preventDefault: () => void }) => {
  //   event.preventDefault();
  //   // handle form submission
  // };

  // const isDisabled = Object.values(inputValues).some((value) => value === "");

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  // const openModal = () => {
  //   setIsOpen(true);
  // };

  return (
    <>
      <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
        <div className="hidden lg:block">
          <a
            href={"tel:+998901122757"}
            type="button"
            className=" text-xl  bg-transparent py-3 px-6 lg:px-3  hover:bg-navyblue hover:text-white "
          >
            +998 90 112 27 57
          </a>
        </div>
      </div>
    </>
  );
};

export default Contactusform;
