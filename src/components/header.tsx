"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AlignJustify, MessageCircle, Phone, PhoneCall } from "lucide-react";

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/10 text-white backdrop-blur-2xl">
      {!isMenuOpened ? (
        <div className="mx-auto flex max-w-[1512px] flex-row-reverse items-center justify-between px-[20px] py-1 md:px-[40px] lg:flex-row 2xl:px-[60px]">
          <div className="hidden gap-12 2xl:flex">
            <Link href="#">
              <p className="hover:text-red font-[family-name:var(--font-sora-sans)] text-[25px] leading-[100%] font-normal transition-all">
                Home
              </p>
            </Link>
            <Link href="#">
              <p className="hover:text-red font-[family-name:var(--font-sora-sans)] text-[25px] leading-[100%] font-normal transition-all">
                About Us
              </p>
            </Link>
            <Link href="#">
              <p className="hover:text-red font-[family-name:var(--font-sora-sans)] text-[25px] leading-[100%] font-normal transition-all">
                Our Services
              </p>
            </Link>
          </div>
          <button
            className="block cursor-pointer 2xl:hidden"
            onClick={() => setIsMenuOpened(true)}
          >
            <AlignJustify size={32} />
          </button>
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt=""
              width={134}
              height={122}
              className="block lg:hidden"
            />
            <p className="font-[family-name:var(--font-sora-sans)] text-[35px] leading-[100%] font-semibold">
              Trash
            </p>
            <Image
              src="/images/logo.png"
              alt=""
              width={134}
              height={122}
              className="hidden lg:block"
            />
            <p className="font-[family-name:var(--font-sora-sans)] text-[35px] leading-[100%] font-semibold">
              Lion
            </p>
          </div>
          <div className="hidden items-center gap-8 lg:flex">
            <div className="hidden items-center gap-2.5 2xl:flex">
              <PhoneCall size={30} fill="red" stroke="none" />
              <p className="font-[family-name:var(--font-sora-sans)] text-[23px] leading-[100%] font-bold">
                267 - 356 - 1542
              </p>
            </div>
            <button className="group bg-red hover:text-red flex cursor-pointer items-center gap-2.5 rounded-full px-9 py-3 transition-colors hover:bg-white">
              <div className="relative">
                <MessageCircle size={24} />
                <Phone
                  size={10}
                  className="group-hover:fill-red absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-white"
                />
              </div>
              <p className="font-[family-name:var(--font-sora-sans)] text-[16px] leading-[100%] font-semibold">
                Contact Us
              </p>
            </button>
          </div>
        </div>
      ) : (
        <div className="h-screen overflow-hidden"></div>
      )}
    </nav>
  );
};

export default Header;
