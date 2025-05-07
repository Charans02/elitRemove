import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { Text } from "@/components/ui";

const Story = () => {
  return (
    <section className="flex flex-col items-center px-[80px] py-[60px]">
      <Text variant="h2">
        <span className="text-red">Our</span> Story!
      </Text>
      <Text className="mt-8 max-w-[702px] text-center text-[#525252]">
        For 10 + years Trash Lion has been dedicated to keeping Philadelphia a
        cleaner place for both you and those around you
      </Text>
      <div className="mt-8 flex w-full max-w-[768px] flex-col items-center gap-8 md:gap-20 xl:max-w-full xl:flex-row xl:gap-30">
        <div className="relative min-h-[493px] w-full max-w-[564px] overflow-hidden rounded-2xl bg-white shadow">
          <Image
            src="/images/company_logo.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="flex w-full flex-col items-center gap-8 xl:items-start">
          <p className="text-center font-[family-name:var(--font-sora-sans)] text-[28px] leading-[44px] font-normal uppercase xl:text-left">
            <span className="text-red font-extrabold">Trash lions, </span>
            promise to Philadelphia
          </p>
          <p className="text-center font-[family-name:var(--font-lato-sans)] text-[18px] leading-[34px] font-normal xl:text-left">
            <span className="font-bold text-[#d80027]">
              Keeping Your Home And Philadelphia A Cleaner Place.
            </span>
            <br />
            We are always here when you need unwanted junk gone. We aim to make
            the process easy for you and to treat you like a part of the trash
            lion family every step of the way.
            <br />
            <br />
            With 10+ Years of experience and 3 trash trucks we always can get
            the job right the first time. From boats to rvs, to any junk you
            need removed from your home or business we are here for you,
          </p>
          <button className="group bg-red hover:text-red flex h-[54px] w-full max-w-[348px] cursor-pointer items-center justify-center gap-2.5 rounded-full px-8 py-4 text-white transition-colors hover:bg-[#f3f3f3]">
            <div className="relative">
              <MessageCircle size={24} />
              <Phone
                size={10}
                className="group-hover:fill-red absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-white"
              />
            </div>
            <p className="font-[family-name:var(--font-sora-sans)] text-[16px] leading-[100%] font-semibold uppercase">
              Get my junk gone
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Story;
