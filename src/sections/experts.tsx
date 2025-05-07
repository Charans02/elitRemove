"use client";
import Image from "next/image";
import { Text } from "@/components/ui";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EXPERT_IMAGES = [
  "/images/image.png",
  "/images/image_1.jpg",
  "/images/image_2.jpg",
  "/images/image_3.jpg",
  "/images/image_4.jpg",
  "/images/image_5.jpg",
  // "/images/image_6.png",
  // "/images/image_7.png",
  // "/images/image_8.png",
  // "/images/image_9.png",
];

const Experts = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    containScroll: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="text-background bg-[url('/images/bg.png')] bg-cover bg-center opacity-90">
      <div className="bg-black/60">
        <section className="px-[80px] py-[60px]">
          <div className="flex flex-col items-center justify-between gap-9 xl:flex-row">
            <div className="flex flex-col items-center gap-9 xl:flex-row">
              <Image src="/images/logo.png" alt="" width={134} height={122} />
              <Text
                variant="h2"
                className="max-w-[517px] text-center xl:text-left"
              >
                See Our Junk Removal
                <span className="text-red"> Experts </span>
                At Work!
              </Text>
            </div>
            <p className="max-w-[478px] text-center font-[family-name:var(--font-sora-sans)] text-[19px] leading-[30px] xl:text-left">
              What&apos;s stopping your dreams from becoming a reality. Trash
              Lion will get your area looking right.
            </p>
          </div>
          <div className="mt-16 space-y-8">
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <div className="relative aspect-video w-full max-w-[768px] overflow-hidden rounded-lg">
                <Image
                  src="/images/image.png"
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="relative aspect-video w-full max-w-[768px] overflow-hidden rounded-lg">
                <Image
                  src="/images/image.png"
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="carousel-container relative">
              <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">
                  {EXPERT_IMAGES.map((image, index) => (
                    <div
                      key={index}
                      className="embla__slide relative mx-4 aspect-video min-h-[200px] w-full max-w-[768px] flex-[0_0_100%] overflow-hidden rounded-lg lg:flex-[0_0_33.3333%]"
                    >
                      <Image
                        src={image}
                        alt={"Expert at work " + (index + 1)}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Carousel navigation */}
            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                onClick={scrollPrev}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-2xl text-white lg:h-[45px] lg:w-[45px]"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {EXPERT_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => emblaApi && emblaApi.scrollTo(idx)}
                    className={`h-[4px] w-[4px] rounded-full border border-white lg:h-[8px] lg:w-[8px] ${selectedIndex === idx ? "bg-black" : "bg-white"}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={scrollNext}
                className="text flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-2xl lg:h-[45px] lg:w-[45px]"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experts;
