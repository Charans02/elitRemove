import Image from "next/image";
import { CalendarRange, Truck, Globe } from "lucide-react";
import { Text } from "@/components/ui";

const Hero = () => {
  return (
    <div className="text-background bg-[url('/images/bg.png')] bg-cover bg-center pt-[58px] lg:pt-[72px] 2xl:pt-[100px]">
      <div className="bg-black-gradient">
        <section className="flex flex-col gap-5 !pt-[20px] !pb-[100px] md:flex-row md:gap-[32.01px] md:!pt-[30px]  xl:justify-between xl:gap-0 2xl:!pt-[60px] xl:!pb-20 lg:!pb-10 md:!pb-10">
          <div className="flex h-fit max-w-[710px] flex-col items-center gap-4 md:items-start lg:items-start lg:gap-6 xl:items-start">
            <Text
              variant="h1"
              className="text-center md:text-left lg:text-left xl:text-left"
            >
              <span className="text-red font-extrabold">
                Philadelphia&apos;s
              </span>
              <br />
              #1 Top Rated Junk Removal Team
            </Text>
            <Text className="text-center text-[14px] leading-[23px] md:text-left md:text-[16px] lg:text-left lg:text-[21px] lg:leading-[26px] xl:text-left">
              <span className="font-bold">
                Proudly serving Philadelphia for 5 years
              </span>
              <br />
              From clean outs to residential junk hauling.
              <br />
              We get it done right the first time.
            </Text>
            <div className="flex items-center gap-2.5 py-2 lg:gap-5 lg:py-3">
              <div className="flex items-center gap-2.5">
                <CalendarRange className="size-3.5 lg:size-4 xl:size-6" />
                <Text className="text-[9px] leading-[13px] font-semibold md:text-[11px] md:leading-[15px] lg:text-[17px] lg:leading-[24px]">
                  10+ Years
                </Text>
              </div>
              <div className="bg-background h-5 w-px lg:h-9" />
              <div className="flex items-center gap-2.5">
                <Truck className="size-3.5 lg:size-4 xl:size-6" />
                <Text className="text-[9px] leading-[13px] font-semibold md:text-[11px] md:leading-[15px] lg:text-[17px] lg:leading-[24px]">
                  3 Trash Trucks
                </Text>
              </div>
              <div className="bg-background h-5 w-px lg:h-9" />
              <div className="flex items-center gap-2.5">
                <Globe className="size-3.5 lg:size-4 xl:size-6" />
                <Text className="text-[9px] leading-[13px] font-semibold md:text-[11px] md:leading-[15px] lg:text-[17px] lg:leading-[24px]">
                  Serving 6+ Counties
                </Text>
              </div>
            </div>
            <div className="customers-container flex w-fit items-center gap-3 rounded-full py-2 pr-6 pl-3 lg:gap-6">
              <Image
                src="/images/customers.png"
                alt=""
                width={127}
                height={59}
                className="h-[35px] w-[73px] lg:h-[59px] lg:w-[127px]"
              />
              <div>
                <Text className="text-[18px] leading-[22px] font-semibold xl:text-[32px] xl:leading-[32px]">
                  10K+
                </Text>
                <Text className="text-[8px] leading-[11px] font-extrabold xl:text-[15px] xl:leading-[20px]">
                  Happy Customers
                </Text>
              </div>
            </div>
          </div>
          <Image
            src="/images/truck_no_bg.png"
            alt="Trash Lion truck"
            width={553}
            height={737}
            quality={100}
            className="mx-auto w-full max-w-[280px] translate-y-4 scale-x-[-1] object-contain md:max-w-[340px] md:translate-y-0 lg:max-w-[400px] lg:translate-y-0 xl:max-w-[500px]"
            priority
          />
        </section>
      </div>
    </div>
  );
};

export default Hero;
