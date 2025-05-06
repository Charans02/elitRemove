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
} from "@/sections";

export default function Home() {
  return (
    <>
      <Hero />
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
