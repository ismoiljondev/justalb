"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import faqData from "./faq.json";

const FAQ = () => {
	return (
		<div
			id="faq-section"
			className="mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg overflow-hidden max-sm:relative max-sm:-bottom-20"
		>
			<h3 className="text-xl font-normal text-white text-center mb-6">
				KBS
			</h3>
			<h2 className="text-4xl lg:text-6xl font-semibold text-center text-white">
				Ko'p beriladigan <br /> savollar
			</h2>
			<div className="w-full px-4 pt-16">
				{faqData?.map((faq, index) => (
					<div
						key={index}
						className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5"
					>
						<Disclosure>
							{({ open }) => (
								<>
									<Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
										<span>{faq.question}</span>
										<ChevronUpIcon
											className={`${
												open
													? "rotate-180 transform"
													: ""
											} h-5 w-5 text-purple-500`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
										{faq.answer}
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQ;
