import Image from "next/image";
import { CalendarRange, Truck, Globe } from "lucide-react";
import { Text } from "@/components/ui";

const Hero = () => {
  return (
    <div className="text-background bg-[url('/images/bg.png')] bg-cover bg-center">
      <div className="bg-black-gradient">
        <section className="flex flex-col md:flex-row gap-[146px] md:gap-[32.01px] xl:gap-0 xl:justify-between !pt-56 !pb-[30px] md:!pb-[100.95px]  ">
          <div className="flex max-w-[710px] flex-col gap-8">
            <Text variant="h1" className="">
              <span className="text-red font-extrabold">
                Philadelphia&apos;s
              </span>
              <br />
              #1 Top Rated Junk Removal Team
            </Text>
            <Text className="text-[21px] leading-[26px]">
              <span className="font-bold">
                Proudly serving Philadelphia for 5 years
              </span>
              <br />
              From clean outs to residential junk hauling.
              <br />
              We get it done right the first time.
            </Text>
            <div className="flex items-center gap-5 py-4">
              <div className="flex items-center gap-2.5">
                <CalendarRange size={24} />
                <Text className="text-[17px] leading-[24px] font-semibold">
                  10+ Years
                </Text>
              </div>
              <div className="bg-background h-9 w-px" />
              <div className="flex items-center gap-2.5">
                <Truck size={24} />
                <Text className="text-[17px] leading-[24px] font-semibold">
                  3 Trash Trucks
                </Text>
              </div>
              <div className="bg-background h-9 w-px" />
              <div className="flex items-center gap-2.5">
                <Globe size={24} />
                <Text className="text-[17px] leading-[24px] font-semibold">
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
            className="scale-x-[-1] -translate-y-24"
          />
        </section>
      </div>
    </div>
  );
};

export default Hero;
