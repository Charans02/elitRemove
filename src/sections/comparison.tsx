"use client";
import { useState, useEffect, useCallback } from "react";
import { Text } from "@/components/ui";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { COMPARISON_SETS } from "@/lib/constants";

const Comparison = () => {
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
    setSelectedIndex(emblaApi.selectedScrollSnap());
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
    <div className="bg-[url('/images/bg.png')] bg-cover bg-center">
      <div className="bg-black/60">
        <section>
          <div className="flex flex-col items-center justify-between px-[20px] md:px-[35px] lg:flex-row lg:items-end lg:px-[60px]">
            <div className="flex flex-col">
              <Text
                variant="h2"
                className="text-center text-white xl:text-left"
              >
                See How We Make Your Junk{" "}
                <span className="font-extrabold underline">Disappear!</span>
              </Text>
              <p className="mt-4 text-center font-[family-name:var(--font-sora-sans)] text-[25px] leading-[30px] font-semibold text-white/70 xl:text-left">
                <span className="font-extrabold">
                  No job is to big for the lions
                </span>
                {"  "}
                we eat your junk for breakfast.
              </p>
            </div>

            <div className="mt-4 flex justify-center md:mt-0 md:justify-end">
              <div className="flex space-x-3">
                <button
                  className="bg-red hover:bg-red/80 flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors"
                  onClick={scrollPrev}
                  aria-label="Previous comparison"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  className="bg-red hover:bg-red/80 flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors"
                  onClick={scrollNext}
                  aria-label="Next comparison"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="mt-8 md:mt-12">
            <div className="carousel-container relative">
              <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">
                  {COMPARISON_SETS.map((item) => (
                    <div
                      key={item.id}
                      className="embla__slide relative mx-5 flex-[0_0_100%] md:flex-[0_0_65%]"
                    >
                      <div className="before-after-container flex h-[600px] w-full flex-col overflow-hidden  md:h-[400px] md:flex-row lg:h-[500px]">
                        {/* Before Image */}
                        <div className="relative h-[48%] flex-1 overflow-hidden rounded-bl-[10px] rounded-tl-[10px] md:h-full">
                          <Image
                            src={item.before}
                            alt={`${item.title} Before`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-4 left-4 z-10 rounded-full bg-black px-3 py-1 text-sm text-white">
                            Before
                          </div>
                        </div>

                        {/* After Image */}
                        <div className="relative h-[48%] flex-1 overflow-hidden rounded-br-[10px] rounded-tr-[10px] md:h-full">
                          <Image
                            src={item.after}
                            alt={`${item.title} After`}
                            fill
                            className="object-cover"
                          />
                          <div className="bg-red absolute top-4 right-4 z-10 rounded-full px-3 py-1 text-sm text-white">
                            After
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="mt-6 flex justify-center space-x-2">
              {COMPARISON_SETS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (emblaApi) emblaApi.scrollTo(index);
                  }}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === selectedIndex ? "bg-red" : "bg-white/70"
                  }`}
                  aria-label={`Go to comparison set ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Comparison;
