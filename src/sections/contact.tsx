"use client";

import dynamic from "next/dynamic";
import { useMemo, useState, useEffect } from "react";
import { LatLngTuple } from "leaflet";
import { CircleChevronRight } from "lucide-react";
import { Text } from "@/components/ui";

const Contact = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  // Handle window resize on client side only
  useEffect(() => {
    const checkScreenSize = () => {
      if (typeof window !== "undefined") {
        setIsMediumScreen(window.innerWidth > 400 && window.innerWidth < 900);
      }
    };

    // Check on initial render
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Clean up event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map"), {
        ssr: false,
      }),
    [],
  );

  const locations = [
    { name: "Philadelphia", latitude: 39.9526, longitude: -75.1652 },
  ];

  const markers: LatLngTuple[] = locations.map((location) => [
    location.latitude,
    location.longitude,
  ]);

  return (
    <div className="bg-[#f3f3f3]">
      <section className="flex flex-col items-center gap-8 xl:flex-row xl:gap-40">
        <div className="z-1 w-full flex-1">
          <Text variant="h2" className="text-center xl:text-left">
            Want to Hire The Best In {isMediumScreen && <br />} Philadelphia
            <br />
            <span className="text-red hidden sm:block"> Call Trash Lion</span>
          </Text>
          {/* <Image
            src="/images/map.png"
            alt=""
            width={601}
            height={349}
            className="border-red mt-8 w-full rounded-md border shadow sm:rounded-lg xl:rounded-xl"
          /> */}
          <div className="border-red mx-auto mt-8 h-[500px] overflow-hidden rounded-md border shadow sm:rounded-lg xl:rounded-xl">
            <Map posix={[39.9526, -75.1652]} markers={markers} />
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow">
          <p className="text-red mb-8 text-center font-[family-name:var(--font-sora-sans)] text-[40px] leading-[40px] font-semibold xl:text-left">
            Reach out to Trash Lion!
          </p>
          <div className="w-full space-y-2">
            <Text className="!text-left uppercase">Full Name</Text>
            <input
              className="focus:outline-red w-full rounded-2xl border-[2px] border-[#989898] p-4 font-[family-name:var(--font-lato-sans)]"
              placeholder="Harry Maggio"
            />
          </div>
          <div className="w-full space-y-2">
            <Text className="!text-left uppercase">Email</Text>
            <input
              className="focus:outline-red w-full rounded-2xl border-[2px] border-[#989898] p-4 font-[family-name:var(--font-lato-sans)]"
              placeholder="Misael_Lehner85@gmail.com"
            />
          </div>
          <div className="w-full space-y-2">
            <Text className="!text-left uppercase">Phone</Text>
            <input
              className="focus:outline-red w-full rounded-2xl border-[2px] border-[#989898] p-4 font-[family-name:var(--font-lato-sans)]"
              placeholder="738-655-4789"
            />
          </div>
          <div className="w-full space-y-2">
            <Text className="!text-left uppercase">Message</Text>
            <textarea
              className="focus:outline-red h-[150px] w-full rounded-2xl border-[2px] border-[#989898] p-4 font-[family-name:var(--font-lato-sans)]"
              placeholder="Phasellus pellentesque, quam sed tempus tempus, dui magna semper urna, placerat tristique diam augue ut nunc."
            />
          </div>
          <button className="bg-red mt-8 flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl px-6 py-5 text-white">
            <CircleChevronRight size={20} />
            <Text variant="button">Get Started</Text>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
