import Image from "next/image";
import { Star } from "lucide-react";
import { Text } from "@/components/ui";
import { TESTIMONIALS } from "@/lib/constants";
import { TestimonialType } from "@/lib/types";

const Testimonials = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url(/images/bg.png)] bg-cover bg-center opacity-10" />
      <section className="flex flex-col items-center">
        <div className="mx-auto max-w-[746px] space-y-6 text-center">
          <Text variant="h2">
            Read what our
            <span className="text-red"> customers are saying</span>
          </Text>
          <Text className="text-[#525252]">
            Philadelphia has been trusting Trash Lion for 10+ years and our work
            quality speaks for itself see what customers are saying!
          </Text>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-10 xl:flex-row">
          {TESTIMONIALS.map((t, idx) => (
            <TestimonialCard key={idx} t={t} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

const TestimonialCard = ({ t }: { t: TestimonialType }) => {
  return (
    <div className="flex w-full max-w-[768px] flex-col items-center gap-6 rounded-2xl bg-white p-6 shadow">
      <div className="relative size-[72px] overflow-hidden rounded-full">
        <Image src={t.avatar} alt={t.name} fill />
      </div>
      <p className="text-red font-[family-name:var(--font-lato-sans)] text-[21px] leading-[28px] font-semibold">
        {t.name}
      </p>
      <Text className="text-center">{t.content}</Text>
      <div className="flex gap-2">
        {Array(t.rating)
          .fill(null)
          .map((_, index) => (
            <Star key={index} size={16} fill="#ffbe40" stroke="none" />
          ))}
        {Array(5 - t.rating)
          .fill(null)
          .map((_, index) => (
            <Star key={index} size={16} fill="#f3f3f3" stroke="none" />
          ))}
      </div>
    </div>
  );
};
