import Image from "next/image";
import { Text } from "@/components/ui";
import { SERVICES } from "@/lib/constants";
import { ServiceType } from "@/lib/types";

const Services = () => {
  return (
    <div className="bg-[#f3f3f3]">
      <section className="flex flex-col items-center px-[80px] py-[60px]">
        <Text
          variant="h2"
          className="max-w-[768px] text-center xl:max-w-[1146px]"
        >
          We <span className="text-red">remove any unwanted junk</span> you have
          laying around and need gone!
        </Text>
        <div className="mt-16 flex flex-col justify-between gap-8 xl:flex-row">
          {SERVICES.map((s, idx) => (
            <ServiceCard key={idx} s={s} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;

const ServiceCard = ({ s }: { s: ServiceType }) => {
  return (
    <div className="flex w-full max-w-[768px] flex-1 flex-col items-center rounded-2xl bg-white px-6 py-8 shadow">
      <div className="relative h-[156px] w-full overflow-hidden rounded-sm md:h-[260px]">
        <Image
          src={s.image}
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>
      <p className="mt-6 text-center text-[20px] leading-[25px] font-semibold md:text-[25px] md:leading-[32px]">
        {s.title}
      </p>
      <Text className="mt-4 text-center text-[#525252]">{s.description}</Text>
    </div>
  );
};
