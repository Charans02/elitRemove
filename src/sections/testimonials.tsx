"use client";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Text } from "@/components/ui";
import { TESTIMONIALS } from "@/lib/constants";
import { TestimonialType } from "@/lib/types";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    containScroll: false,
    dragFree: true,
    
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
    const newIndex = emblaApi.selectedScrollSnap();
    setSelectedIndex(newIndex);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="bg-black/50 bg-[url(/images/review_bg.png)] bg-cover bg-center text-white">
      <section className="flex flex-col items-center lg:items-start">
        <div className="flex w-full flex-col items-center justify-center xl:flex-row xl:items-end xl:justify-between">
          <div className="space-y-6 text-center lg:text-left">
            <Text variant="h2">
              Read what our
              <br />
              <span className="text-red"> customers are saying</span>
            </Text>
            <Text variant="body1" className="text-[14px] md:text-[16px]">
              Philadelphia has been trusting Trash Lion for 10+ years and our
              work quality speaks for itself see what customers are saying!
            </Text>
          </div>
          <div className="mt-0 flex justify-center md:justify-end lg:mt-6">
            <div className="flex space-x-3">
              <button
                className="bg-red hover:bg-red/80 flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors"
                onClick={scrollPrev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="bg-red hover:bg-red/80 flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors"
                onClick={scrollNext}
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 w-full">
          <div className="carousel-container relative">
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex">
                {TESTIMONIALS.map((t, idx) => (
                  <div
                    key={idx}
                    className="embla__slide relative mx-0 flex-[0_0_100%] md:flex-[0_0_55%]"
                  >
                    <div
                      className={`origin-center transform transition-all duration-500 ease-in-out ${
                        selectedIndex === idx ? "scale-100" : "scale-90"
                      }`}
                    >
                      <TestimonialCard t={t} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(index);
                }}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === selectedIndex ? "bg-red" : "bg-white/70"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

const TestimonialCard = ({ t }: { t: TestimonialType }) => {
  return (
    <div className="relative min-w-[211px] md:min-w-[523px] lg:min-w-[625px]">
      <div className="absolute inset-0 rounded-2xl bg-[#333333] opacity-10"></div>
      <div className="relative flex w-full flex-col items-center overflow-hidden rounded-2xl bg-[#222222]/10 p-6 backdrop-blur-md px-[14px] py-[11px] md:px-[24px] md:py-[21px] lg:px-[30px] lg:py-[24px] gap-4">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"></div>

        <div className="flex w-full md:flex-row items-center justify-between flex-col p-3 md:p-5 lg:p-6">
          <div className="flex md:flex-row flex-col items-center gap-4 ">
            <div className="relative flex h-[45px] w-[45px] items-center justify-center overflow-hidden rounded-full bg-[#2B6023] text-4xl font-bold text-white md:h-[72px] md:w-[72px]">
              {t.avatar ? (
                <Image
                  src={t.avatar}
                  alt={`${t.name}'s testimonial`}
                  fill
                  className="object-cover"
                />
              ) : (
                <span>{t.name.charAt(0)}</span>
              )}
            </div>
            <p className="text-red font-[family-name:var(--font-lato-sans)] text-[16px] leading-[28px] font-semibold md:text-[21px] lg:text-[26px]">
              {t.name}
            </p>
          </div>
          <div className="flex gap-2" >
            {Array(t.rating)
              .fill(null)
              .map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className="lg:h-[20px] lg:w-[20px]"
                  fill="#ffbe40"
                  stroke="none"
                />
              ))}
            {Array(5 - t.rating)
              .fill(null)
              .map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className="lg:h-[20px] lg:w-[20px]"
                  fill="#f3f3f3"
                  stroke="none"
                />
              ))}
          </div>
        </div>
        <Text className="text-center text-[12px] text-white md:text-[16px] lg:text-[20px]">
          {t.content}
        </Text>
      </div>
    </div>
  );
};
