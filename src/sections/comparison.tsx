import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { Text } from "@/components/ui";

const Comparison = () => {
  return (
    <div className="bg-[url('/images/bg.png')] bg-cover bg-center">
      <div className="bg-black/60">
        <section className="">
          <Text variant="h2" className="text-center text-white xl:text-left">
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
          <div className="mt-12 flex w-full justify-center">
            <ReactCompareSlider
              className="h-full max-h-[578px] w-full max-w-[1070px] rounded-4xl"
              itemOne={
                <ReactCompareSliderImage
                  alt="Before"
                  src="/images/before.jpg"
                />
              }
              itemTwo={
                <ReactCompareSliderImage alt="After" src="/images/after.jpg" />
              }
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Comparison;
