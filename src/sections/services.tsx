import Image from "next/image";
import { Text } from "@/components/ui";
import { SERVICES } from "@/lib/constants";
import { ServiceType } from "@/lib/types";

const Services = () => {
  return (
    <div className="bg-[#f3f3f3]">
      <section
        id="services"
        className="flex flex-col items-center px-[80px] py-[60px]"
      >
        <Text
          variant="h2"
          className="max-w-[768px] text-center xl:max-w-[1146px]"
        >
          We <span className="text-orange-500">remove any unwanted junk</span> you have
          laying around and need gone!
        </Text>
        <div className="mt-8 flex flex-col justify-between gap-8 lg:mt-16 xl:flex-row">
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
  // Function to format the title with colored parts
  const formatTitle = (title: string) => {
    if (title === "General Junk Removal") {
      return (
        <>
          <span className="text-orange-600">General</span>
          <span> Junk Removal</span>
        </>
      );
    } else if (title === "Property Cleanouts") {
      return (
        <>
          <span className="text-orange-600">Property</span>
          <span> Cleanouts</span>
        </>
      );
    } else if (title === "Stump & Yard Debris Removal") {
      return (
        <>
          <span className="text-orange-600">Stump & Yard</span>
          <span> Debris Removal</span>
        </>
      );
    } else if (title === "Construction & Renovation Debris") {
      return (
        <>
          <span className="text-orange-600">Construction & Renovation</span>
          <span> Debris</span>
        </>
      );
    }
    // Fallback for any other titles
    return (
      <>
        <span className="text-red text-[26px] md:text-[30px]">
          {title.charAt(0).toLocaleUpperCase()}
        </span>
        <span>{title.slice(1).toLocaleUpperCase()}</span>
      </>
    );
  };

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
        {formatTitle(s.title)}
      </p>
      <Text className="mt-4 text-center text-[#525252]">{s.description}</Text>
    </div>
  );
};
