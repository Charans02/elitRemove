import Image from "next/image";
import { PhoneCall } from "lucide-react";

import { CONTACT_INFO } from "@/lib/constants";

const CTA = () => {
  return (
    <div className="bg-white">
      <section className="px-20 py-10">
        <div className="bg-orange-400 relative flex w-full flex-col items-center gap-5 rounded-3xl px-10 py-10 text-white sm:gap-8 lg:px-20 xl:gap-10 xl:px-[100px] xl:py-20">
          <Image
            src="/images/cta-pattern.png"
            alt=""
            fill
            className="object-cover object-center"
          />
          <p className="text-center font-[family-name:var(--font-sora-sans)] text-[20px] leading-[36px] tracking-tighter sm:text-[36px] sm:leading-[45px] xl:text-[56px] xl:leading-[74px]">
            Free Estimates | Fast Turnaround | East Texas Proud{" "}
          </p>
          <p className="text-center font-[family-name:var(--font-sora-sans)] text-[13px] leading-[20px] tracking-tight sm:text-[18px] sm:leading-[23px] xl:text-[27px] xl:leading-[38px]">
            Call or Text Now: 
          </p>
          <div className="flex flex-col-reverse items-center justify-center gap-1 md:flex-row md:gap-16">
            <div className="flex items-center gap-4 xl:gap-5">
              <PhoneCall
                fill="white"
                stroke="none"
                className="size-5 sm:size-7 lg:size-8"
              />
              <p className="font-[family-name:var(--font-sora-sans)] text-[13px] leading-[30px] sm:text-[20px] sm:leading-[50px] xl:leading-[63px]">
                {CONTACT_INFO[1].value}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
