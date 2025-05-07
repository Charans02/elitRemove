"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AlignJustify, MessageCircle, Phone, PhoneCall, X } from "lucide-react";

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleClick = () => {
    setIsMenuOpened(!isMenuOpened);
    document.documentElement.style.overflow = !isMenuOpened ? "hidden" : "auto";
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/10 text-white backdrop-blur-2xl">
      {!isMenuOpened ? (
        <div className="mx-auto flex max-w-[1512px] flex-row-reverse items-center justify-between px-[20px] py-3 md:flex-row md:px-[35px] lg:flex-row lg:py-1 2xl:grid 2xl:grid-cols-3 2xl:items-center 2xl:px-[60px] lg:h-[92px] xl:h-fit gap-1.5">
          <div className="hidden gap-12 xl:flex 2xl:justify-self-start ">
            <Link href="#">
              <p className="hover:text-red font-[family-name:var(--font-sora-sans)] text-[25px] leading-[100%] font-normal transition-all hover:underline">
                Home
              </p>
            </Link>
            <Link href="#">
              <p className="hover:text-red font-[family-name:var(--font-sora-sans)] text-[25px] leading-[100%] font-normal transition-all hover:underline">
                About Us
              </p>
            </Link>
            <Link href="#">
              <p className="hover:text-red font-[family-name:var(--font-sora-sans)] text-[25px] leading-[100%] font-normal transition-all hover:underline">
                Our Services
              </p>
            </Link>
          </div>

          <button
            className="hover:text-red block cursor-pointer transition-colors xl:hidden"
            onClick={handleClick}
          >
            <AlignJustify className="size-5 lg:size-8" />
          </button>

          <Link
            href="/"
            className="flex items-center 2xl:hidden"
          >
            <Image
              src="/images/logo.png"
              alt="Trash Lion Logo"
              width={134}
              height={122}
              className="block h-[34px] w-[38px] md:hidden xl:h-[122px] xl:w-[134px]"
            />
            <p className="font-[family-name:var(--font-sora-sans)] text-[13px] leading-[100%] font-semibold md:text-[20px] xl:text-[35px]">
              Trash&nbsp;
            </p>
            <Image
              src="/images/logo.png"
              alt="Trash Lion Logo"
              width={134}
              height={122}
              className="hidden h-[34px] w-[38px] md:block md:h-[69px] md:w-[77px] xl:h-[122px] xl:w-[134px]"
            />
            <p className="font-[family-name:var(--font-sora-sans)] text-[13px] leading-[100%] font-semibold md:text-[20px] xl:text-[35px]">
              Lion
            </p>
          </Link>

          <div className="hidden 2xl:flex 2xl:justify-self-center">
            <Link href="/" className="flex items-center">
              <p className="font-[family-name:var(--font-sora-sans)] text-[35px] leading-[100%] font-semibold">
                Trash
              </p>
              <Image
                src="/images/logo.png"
                alt="Trash Lion Logo"
                width={134}
                height={122}
                className="h-[122px] w-[134px]"
              />
              <p className="font-[family-name:var(--font-sora-sans)] text-[35px] leading-[100%] font-semibold">
                Lion
              </p>
            </Link>
          </div>

          <div className="hidden items-center gap-4 md:flex 2xl:justify-self-end">
            <div className="hidden items-center 2xl:gap-2.5 xl:flex">
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
              <p className="font-[family-name:var(--font-sora-sans)] text-[16px] leading-[100%] font-semibold hidden lg:block">
                Contact Us
              </p>
            </button>
          </div>
        </div>
      ) : (
        <div className="relative flex h-screen items-center justify-center bg-black">
          <div className="flex flex-col items-center gap-12">
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
            className="hover:text-red absolute top-6 right-6 block cursor-pointer transition-colors"
            onClick={handleClick}
          >
            <X className="size-5 lg:size-8" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
