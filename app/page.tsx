import Image from "next/image";
import instIcon from "../public/assets/inst.webp";
import tgIcon from "../public/assets/tg.jpeg";
import mailIcon from "../public/assets/mail.svg";
import telIcon from "../public/assets/tel.svg";

import "./index.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Антон Ф. - Видеооператор | Фотограф | Минск",
  description:
    "Страница Антона Филипповича, профессионального фотографа и видеографа из Минска, Беларусь. Специализируется на портретах, мероприятиях и коммерческом видеопроизводстве",
  keywords: [
    "фотография",
    "видеосъемка",
    "Минск",
    "Беларусь",
    "видеооператор мероприятий",
    "видеооператор свадьба",
    "портретный фотограф",
    "антон филиппович",
  ],
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center w-full h-full bg-white p-14">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-[32px] font-[700] text-center mb-5">
            Антон Филиппович
          </h1>
          <h2 className="text-[28px] font-[500] text-center">
            Видеооператор | Фотограф | Минск | Беларусь
          </h2>
        </div>
        <div className="flex flex-col items-center mb-10">
          <h3 className="text-[24px] font-[400] mb-5">Связаться со мной</h3>
          <div className="flex items-center gap-4">
            <a
              href="https://t.me/antonfilka"
              target="_blank"
              className="contact-button"
            >
              <Image src={tgIcon} alt="Telegram Icon" width={40} height={40} />
            </a>
            <a
              href="https://www.instagram.com/antonfilka_photo/"
              target="_blank"
              className="contact-button"
            >
              <Image
                src={instIcon}
                alt="Instagram Icon"
                width={40}
                height={40}
              />
            </a>
            <a
              href="mailto:antonfilippovich.job@gmail.com"
              target="_blank"
              className="contact-button"
            >
              <Image src={mailIcon} alt="Mail Icon" width={40} height={40} />
            </a>
            <a
              href="tel:+375296199430"
              target="_blank"
              className="contact-button"
            >
              <Image
                src={telIcon}
                alt="Telephone Icon"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>
        <div>
          <p className="text-center">
            Эта страница в разработке <br /> скоро тут будет много полезного{" "}
          </p>
        </div>
      </div>
    </>
  );
}
