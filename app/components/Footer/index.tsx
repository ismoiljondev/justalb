import Image from "next/image";
import Link from "next/link";
import "./foot.css";
import youtube from "@/public/images/footer/youtube.svg";
import telegram from "@/public/images/footer/telegram.svg";
import instagram from "@/public/images/footer/instagram.svg";
import linkedin from "@/public/images/footer/linkedin.svg";
import phone from "@/public/images/footer/phone.svg";
const footer = () => {
  return (
    <div className="bg-black -mt-40" id="first-section">
      <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11983.653695846024!2d69.24607430717799!3d41.332495926230926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b6cbd7e49a1%3A0xf23c3817c486d743!2sAmity%20University%20Tashkent!5e0!3m2!1sru!2s!4v1703454570270!5m2!1sru!2s"
            width="600"
            height="450"
            loading="lazy"
            className="w-full rounded-xl"
          ></iframe>
        </div>

        <div className="flex justify-center gap-2 pt-20 pb-20">
          <Link
            className="footer-icons csicon"
            href="https://youtube.com"
            target="_blank"
          >
            <Image src={youtube} alt="instagram" width={35} height={35} />
          </Link>
          <Link
            className="footer-icons csicon"
            href="https://t.me/albisonuz"
            target="_blank"
          >
            <Image src={telegram} alt="twitter" width={35} height={35} />
          </Link>
          <Link
            className="footer-icons csicon"
            href="https://instagram.com/albisonuz"
            target="_blank"
          >
            <Image src={instagram} alt="instagram" width={35} height={35} />
          </Link>
          <Link
            className="footer-icons csicon"
            href="https://www.linkedin.com/company/albisonuz"
            target="_blank"
          >
            <Image src={linkedin} alt="instagram" width={35} height={35} />
          </Link>
          <a className="footer-icons csicon" href="tel:+998901122757">
            <Image src={phone} alt="phone" width={35} height={35} />
          </a>
        </div>

        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
            <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
              <div>
                <h3 className="text-center md:text-start text-offwhite text-lg">
                  *Ma`lumotlar ochiq resurslarga asoslangan
                </h3>
              </div>
              <div className="flex justify-center md:justify-end">
                <Link href="/">
                  <h3 className="text-offwhite pr-6">Albison Academy®️ 2023</h3>
                </Link>
                <Link href="/honor">
                  <h3 className="text-offwhite pl-6 border-solid border-l border-footer">
                    Sharaf Kodeksii
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
