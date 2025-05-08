import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { Text } from "@/components/ui";
import { JUNK_REMOVAL_IMAGES } from "@/lib/constants";

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
        <div className="relative mx-auto min-h-[493px] w-full overflow-hidden rounded-2xl bg-white shadow">
          <Image
            src="/images/company_logo.jpg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="flex w-full flex-col items-center gap-8">
          <p className="text-center font-[family-name:var(--font-sora-sans)] text-[28px] leading-[44px] font-normal uppercase ">
            <span className="text-red font-extrabold">Trash lions, </span>
            promise to Philadelphia
          </p>
          <p className="text-center font-[family-name:var(--font-lato-sans)] text-[18px] leading-[34px] font-normal ">
            <span className="font-bold text-[#d80027]">
              Keeping Your Home And Philadelphia A Cleaner Place.
            </span>
            <br />
            <span>
              We are always here when you need unwanted junk gone. We aim to
              make the process easy for you and to treat you like a part of the
              trash lion family every step of the way.
            </span>
            <div className="flex flex-row gap-2 py-5 items-center justify-center mx-auto">
              {JUNK_REMOVAL_IMAGES.map((item) => (
                <Image
                  key={item.id}
                  src={item.img_url}
                  alt={item.img_name}
                  width={120}
                  height={120}
                  className=""
                />
              ))}
            </div>
            <span>
              With 10+ Years of experience and 3 trash trucks we always can get
              the job right the first time. From boats to rvs, to any junk you
              need removed from your home or business we are here for you,
            </span>
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
