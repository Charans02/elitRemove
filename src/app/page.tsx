import Banner from "@/components/banner";
import {
  Hero,
  States,
  Comparison,
  Services,
  Testimonials,
  Story,
  WhyChoose,
  Experts,
  ServiceAreas,
  Contact,
  CTA,
  JunkRemovalQuote,
} from "@/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mt-[-101.23px] md:mt-[-71.84px] xl:mt-[-130px] xl:px-[60px]">
        <JunkRemovalQuote />
      </div>
      <Banner />
      <States />
      <Comparison />
      <Services />
      <Testimonials />
      <Story />
      <Banner />
      <WhyChoose />
      <Experts />
      <ServiceAreas />
      <Contact />
      <CTA />
    </>
  );
}
