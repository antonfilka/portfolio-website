import Image from "next/image";
import tgIcon from "../public/assets/tg.jpeg";
import mailIcon from "../public/assets/mail.svg";

import "./index.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anton F. - Web Developer",
  description: "Personal website of Anton Filippovich - Web Developer",
  keywords: [
    "website",
    "react",
    "javascript",
    "belarus",
    "Anton Filippovich",
    "programming",
    "mobile app",
    "e-shop",
  ],
  openGraph: {
    type: "website",
    title: "Anton F. - Web Developer",
    description: "Personal website of Anton Filippovich - Web Developer",
    url: "https://antonfilka.by",
    images: "https://antonfilka.by/assets/profileImg.jpeg",
  },
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center w-full h-full bg-white p-14">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-[32px] font-[700] text-center mb-5">
            Hello, I&apos;m Anton Filippovich
          </h1>
          <h2 className="text-[28px] font-[500] text-center">Web Developer</h2>
        </div>
        <div className="flex flex-col items-center mb-10">
          <h3 className="text-[24px] font-[400] mb-5">Connect with me</h3>
          <div className="flex items-center gap-4">
            <a
              href="https://t.me/antonfilka"
              target="_blank"
              className="contact-button"
            >
              <Image src={tgIcon} alt="Telegram Icon" width={40} height={40} />
            </a>
            {/* <a
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
            </a> */}
            <a
              href="mailto:antonfilippovich.job@gmail.com"
              target="_blank"
              className="contact-button"
            >
              <Image src={mailIcon} alt="Mail Icon" width={40} height={40} />
            </a>
            {/* <a
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
            </a> */}
          </div>
        </div>
        <div>
          <p className="text-center">This page is in development 🚧</p>
        </div>
      </div>
    </>
  );
}
