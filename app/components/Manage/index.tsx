"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import Image from "next/image";
import { Responsive } from "../Slider";
import right from "@/public/images/manage/right.svg";
const names = [
	{
		heading: "O’quv markazlar",
		price: 100,
		user: "Oylik",
		category: "monthly",
		features: [
			"9 oylik kurs",
			"Bitiruvchilarga sertifikat berish",
			"Faqat qimmat IT kurslarda mavjud",
			"-",
			"-",
		],
		link: "https://www.google.com/search?q=it+o%27quv+markazlari+uzbekistan&oq=it+o%27quv+markazlari+uz&gs_lcrp=EgZjaHJvbWUqBwgBECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIKCAUQIRgWGB0YHjIKCAYQIRgWGB0YHtIBCDY0NDNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
	},
	{
		heading: "Albison Academy",
		price: 0,
		user: "Oylik",
		category: "monthly",
		features: [
			"3 oylik kurs + amaliyot",
			"Bitiruvchilarga ish taklif qilish",
			"Jamoa uchun bepul ingliz tili kurslari ",
			"Bitirgandan keyin ham qo’llab- quvvatlash ",
			"Global IT kompaniyalarga tayyorlash ",
		],
		link: "https://t.me/albisonbot",
	},
	{
		heading: "Oliygohlar",
		price: 300,
		user: "Oylik",
		category: "monthly",
		features: [
			"4 yillik o’qish",
			"Bitiruvchilarga diplom berish",
			"Faqat chet el oliygohlarida mavjud",
			"-",
			"-",
		],
		link: "https://www.google.com/search?q=oliygohlar+uzbekistan&sca_esv=593118487&sxsrf=AM9HkKnwsZCNKau2lCYVXdoT1SRjAHg63A%3A1703264388243&ei=hMCFZci2DsfMwPAPvrqk8AY&udm=&ved=0ahUKEwjIiMemwqODAxVHJhAIHT4dCW4Q4dUDCBA&uact=5&oq=oliygohlar+uzbekistan&gs_lp=Egxnd3Mtd2l6LXNlcnAiFW9saXlnb2hsYXIgdXpiZWtpc3RhbjIIEAAYiQUYogQyCBAAGIAEGKIEMggQABiABBiiBEjgSVDBIljAQnAGeACQAQGYAc8BoAHdEqoBBjAuMTQuMbgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgYQABgHGB7CAgoQLhhDGIAEGIoFwgIHEC4YgAQYDcICBhAuGAcYHsICCBAAGAcYHhgKwgIHEAAYgAQYDcICCBAuGAcYHhgKwgIJEAAYgAQYDRgKwgIKEAAYCBgHGB4YCsICFRAuGAcYHhiXBRjcBBjeBBjgBNgBAcICCBAuGAgYHhgNwgIIEAAYCBgeGA3CAgoQABgIGB4YDRgKwgIXEC4YCBgeGA0YlwUY3AQY3gQY4ATYAQHiAwQYACBBiAYBkAYIugYGCAEQARgU&sclient=gws-wiz-serp",
	},
	{
		heading: "O’quv markazlar",
		price: 1000,
		user: "Yillik",
		category: "yearly",
		features: [
			"9 oylik kurs",
			"Bitiruvchilarga sertifikat berish",
			"Faqat qimmat IT kurslarda mavjud",
			"-",
			"-",
		],
		link: "https://www.google.com/search?q=it+o%27quv+markazlari+uzbekistan&oq=it+o%27quv+markazlari+uz&gs_lcrp=EgZjaHJvbWUqBwgBECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIKCAUQIRgWGB0YHjIKCAYQIRgWGB0YHtIBCDY0NDNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
	},
	{
		heading: "Albison Academy",
		price: 0,
		user: "Yillik",
		category: "yearly",
		features: [
			"3 oylik kurs + amaliyot",
			"Bitiruvchilarga ish taklif qilish",
			"Jamoa uchun bepul ingliz tili kurslari ",
			"Bitirgandan keyin ham qo’llab- quvvatlash ",
			"Global IT kompaniyalarga tayyorlash ",
		],
		link: "https://t.me/albisonbot",
	},
	{
		heading: "Oliygohlar",
		price: 3000,
		user: "Yillik",
		category: "yearly",
		features: [
			"4 yillik o’qish",
			"Bitiruvchilarga diplom berish",
			"Faqat chet el oliygohlarida mavjud",
			"-",
			"-",
		],
		link: "https://www.google.com/search?q=oliygohlar+uzbekistan&sca_esv=593118487&sxsrf=AM9HkKnwsZCNKau2lCYVXdoT1SRjAHg63A%3A1703264388243&ei=hMCFZci2DsfMwPAPvrqk8AY&udm=&ved=0ahUKEwjIiMemwqODAxVHJhAIHT4dCW4Q4dUDCBA&uact=5&oq=oliygohlar+uzbekistan&gs_lp=Egxnd3Mtd2l6LXNlcnAiFW9saXlnb2hsYXIgdXpiZWtpc3RhbjIIEAAYiQUYogQyCBAAGIAEGKIEMggQABiABBiiBEjgSVDBIljAQnAGeACQAQGYAc8BoAHdEqoBBjAuMTQuMbgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgYQABgHGB7CAgoQLhhDGIAEGIoFwgIHEC4YgAQYDcICBhAuGAcYHsICCBAAGAcYHhgKwgIHEAAYgAQYDcICCBAuGAcYHhgKwgIJEAAYgAQYDRgKwgIKEAAYCBgHGB4YCsICFRAuGAcYHhiXBRjcBBjeBBjgBNgBAcICCBAuGAgYHhgNwgIIEAAYCBgeGA3CAgoQABgIGB4YDRgKwgIXEC4YCBgeGA0YlwUY3AQY3gQY4ATYAQHiAwQYACBBiAYBkAYIugYGCAEQARgU&sclient=gws-wiz-serp",
	},
];

const Manage = () => {
	const [enabled, setEnabled] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState("monthly");

	const toggleEnabled = () => {
		setEnabled(!enabled);
		setSelectedCategory(enabled ? "monthly" : "yearly");
	};

	const filteredData = names.filter(
		(items) => items.category === selectedCategory
	);

	return (
		<div id="services-section">
			<div className="mx-auto max-w-7xl sm:py-20 lg:px-8 my-16">
				<h3 className="text-center text-4xl sm:text-65xl font-black">
					To'g'ri tanlov o'z <br /> qo'lingizda
				</h3>

				<div className="md:flex md:justify-around mt-20">
					<div className="flex gap-5 justify-center md:justify-start">
						<Image
							src={right}
							alt="right-icon"
							width={21}
							height={14}
						/>
						<h4 className="text-lg font-semibold">
							3 oy intensiv kurs{" "}
						</h4>
					</div>
					<div className="flex gap-5 justify-center md:justify-start">
						<Image
							src={right}
							alt="right-icon"
							width={21}
							height={14}
						/>
						<h4 className="text-lg font-semibold">
							Cheksiz imkoniyatlar{" "}
						</h4>
					</div>
					<div className="flex gap-5 justify-center md:justify-start">
						<Image
							src={right}
							alt="right-icon"
							width={21}
							height={14}
						/>
						<h4 className="text-lg font-semibold">
							Ishlab berish majburiyatisiz
						</h4>
					</div>
				</div>

				<div className="mt-6 relative">
					{/* <div className="dance-text mb-5">get 3 months free</div>
          <Image
            src="/images/manage/toggle.svg"
            alt="toggle-image"
            width={24}
            height={24}
            className="toggleImage"
          /> */}
					<div className="flex justify-center">
						<h3 className="text-sm font-medium mr-5">Oylik</h3>
						<Switch
							checked={enabled}
							onChange={toggleEnabled}
							className={`${
								enabled ? "bg-darkpurple" : "bg-darkpurple"
							} relative inline-flex h-6 w-11 items-center rounded-full`}
						>
							<span className="sr-only text-black">
								Enable notifications
							</span>
							<span
								className={`${
									enabled ? "translate-x-6" : "translate-x-1"
								} inline-block h-4 w-4 transform rounded-full bg-white transition`}
							/>
						</Switch>
						<h3 className="text-sm font-medium ml-5">Yillik</h3>
					</div>
				</div>
			</div>
			<div className="m-auto">
				<Responsive slide={filteredData} />
			</div>
		</div>
	);
};

export default Manage;
