"use client";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import { Text } from "@/components/ui";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const comparisonSets = [
  {
    id: 1,
    before: "/images/before.jpg",
    after: "/images/after.jpg",
    title: "Backyard Cleanup",
  },
  {
    id: 2,
    before: "/images/before.jpg",
    after: "/images/after.jpg",
    title: "Garage Cleanup",
  },
  {
    id: 3,
    before: "/images/before.jpg",
    after: "/images/after.jpg",
    title: "Home Cleanout",
  },
];

const Comparison = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    containScroll: false,
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lineWidth, setLineWidth] = useState("4px");

  // Handle responsive line width
  useEffect(() => {
    const handleResize = () => {
      setLineWidth(window.innerWidth >= 1024 ? "12px" : "4px");
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
                  {comparisonSets.map((item) => (
                    <div
                      key={item.id}
                      className="embla__slide relative mx-5 flex-[0_0_65%]"
                    >
                      <div className="before-after-container relative h-[300px] w-full overflow-hidden rounded-[20px] md:h-[400px] lg:h-[500px]">
                        <ReactCompareSlider
                          className="h-full w-full"
                          position={50}
                          handle={
                            <ReactCompareSliderHandle
                              buttonStyle={{
                                backgroundColor: "red",
                              }}
                              linesStyle={{
                                width: lineWidth,
                                background: "red",
                              }}
                            />
                          }
                          itemOne={
                            <div className="relative h-full w-full">
                              <ReactCompareSliderImage
                                alt="Before"
                                src={item.before}
                                style={{ height: "100%", objectFit: "cover" }}
                              />
                              <div className="absolute top-4 left-4 rounded-full bg-black px-3 py-1 text-sm text-white">
                                Before
                              </div>
                            </div>
                          }
                          itemTwo={
                            <div className="relative h-full w-full">
                              <ReactCompareSliderImage
                                alt="After"
                                src={item.after}
                                style={{ height: "100%", objectFit: "cover" }}
                              />
                              <div className="bg-red absolute top-4 right-4 rounded-full px-3 py-1 text-sm text-white">
                                After
                              </div>
                            </div>
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="mt-6 flex justify-center space-x-2">
              {comparisonSets.map((_, index) => (
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
