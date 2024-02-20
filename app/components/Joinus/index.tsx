import Link from "next/link";

const Join = () => {
	return (
		<div className="bg-joinus my-32 overflow-hidden max-sm:relative max-sm:-bottom-32">
			<div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
				<div className="text-center">
					<h3 className="text-blue text-lg font-normal tracking-widest">
						SHOSHILING
					</h3>
					<h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10">
						{" "}
						Dasturchilar bilan dasturlashni <br /> oson o'rganing.
					</h2>
					<p className="text-lightblack text-base font-normal">
						Dasturlashni o`rganib yuqori daromadli kasbga ega
						bo`lmoqchisiz 😎 <br /> Lekin uyqusiz tunlar va tinimsiz
						mehnatga tayyormisiz? 🤔
					</p>
				</div>

				<div className="mx-auto max-w-4xl pt-5">
					<div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-center  bg-transparent ">
						<div className="sm:mr-3">
							<Link
								target="_blank"
								href={"https://t.me/albisonbot"}
								className="joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue"
							>
								Tayyorman!
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Join;
