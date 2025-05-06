import Image from "next/image";
import { CalendarRange, Truck, Globe } from "lucide-react";
import { Text } from "@/components/ui";

const Hero = () => {
  return (
    <div className="text-background bg-[url('/images/bg.png')] bg-cover bg-center">
      <div className="bg-black-gradient">
        <section className="flex flex-col gap-[146px] !pt-20 !pb-[30px] md:flex-row md:gap-[32.01px] md:!pb-[100.95px] lg:!pt-56 xl:justify-between xl:gap-0">
          <div className="flex max-w-[710px] flex-col items-center gap-4 lg:gap-8 xl:items-start">
            <Text variant="h1" className="text-center xl:text-left">
              <span className="text-red font-extrabold">
                Philadelphia&apos;s
              </span>
              <br />
              #1 Top Rated Junk Removal Team
            </Text>
            <Text className="text-center text-[14px] leading-[23px] lg:text-[16px] xl:text-left xl:text-[21px] xl:leading-[26px]">
              <span className="font-bold">
                Proudly serving Philadelphia for 5 years
              </span>
              <br />
              From clean outs to residential junk hauling.
              <br />
              We get it done right the first time.
            </Text>
            <div className="flex items-center gap-2.5 py-4 lg:gap-5">
              <div className="flex items-center gap-2.5">
                <CalendarRange className="size-3.5 lg:size-4 xl:size-6" />
                <Text className="text-[9px] leading-[13px] font-semibold lg:text-[11px] lg:leading-[15px] xl:text-[17px] xl:leading-[24px]">
                  10+ Years
                </Text>
              </div>
              <div className="bg-background h-5 w-px lg:h-9" />
              <div className="flex items-center gap-2.5">
                <Truck className="size-3.5 lg:size-4 xl:size-6" />
                <Text className="text-[9px] leading-[13px] font-semibold lg:text-[11px] lg:leading-[15px] xl:text-[17px] xl:leading-[24px]">
                  3 Trash Trucks
                </Text>
              </div>
              <div className="bg-background h-5 w-px lg:h-9" />
              <div className="flex items-center gap-2.5">
                <Globe className="size-3.5 lg:size-4 xl:size-6" />
                <Text className="text-[9px] leading-[13px] font-semibold lg:text-[11px] lg:leading-[15px] xl:text-[17px] xl:leading-[24px]">
                  Serving 6+ Counties
                </Text>
              </div>
            </div>
            <div className="customers-container flex w-fit items-center gap-6 rounded-full py-2 pr-6 pl-3">
              <Image
                src="/images/customers.png"
                alt=""
                width={127}
                height={59}
              />
              <div>
                <Text className="text-[32px] leading-[38px] font-semibold">
                  10K+
                </Text>
                <Text className="text-[16px] leading-[20px] font-extrabold">
                  Happy Customers
                </Text>
              </div>
            </div>
          </div>
          <Image
            src="/images/truck_no_bg.png"
            alt=""
            width={553}
            height={737}
            quality={100}
            className="-translate-y-24 scale-x-[-1]"
          />
        </section>
      </div>
    </div>
  );
};

export default Hero;
