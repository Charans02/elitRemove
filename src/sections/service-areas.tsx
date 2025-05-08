import Image from "next/image";
import { MapPinCheckInside } from "lucide-react";

import { Text } from "@/components/ui";
import { SERVICE_AREAS } from "@/lib/constants";

const ServiceAreas = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-between bg-[url('/images/world_map.png')] bg-cover bg-center xl:flex-row">
        <div className="flex flex-col items-center xl:items-start">
          <div className="bg-red/10 w-fit rounded-full px-8 py-4">
            <p className="text-red font-[family-name:var(--font-lato-sans)] text-[18px] leading-[18px] font-semibold uppercase">
              Service Areas
            </p>
          </div>
          <Text
            variant="h2"
            className="mt-8 max-w-[512px] text-center xl:text-left"
          >
            <span className="text-red">Trusted</span> Junk Removal Experts
            Serving These Areas!
          </Text>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {SERVICE_AREAS.map((area, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <MapPinCheckInside size={28} stroke="white" fill="red" />
                <Text
                  variant="body2"
                  className="text-foreground max-w-full text-[16px] md:text-[20px] md:max-w-[360px] xl:max-w-[212px]"
                >
                  {area}, PA
                </Text>
              </div>
            ))}
          </div>
        </div>
        <Image
          src="/images/truck_no_bg.png"
          alt=""
          width={553}
          height={737}
          className="scale-x-[1] h-fit"
        />
      </div>
    </section>
  );
};

export default ServiceAreas;
