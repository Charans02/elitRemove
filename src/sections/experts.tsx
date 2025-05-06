import Image from "next/image";
import { Text } from "@/components/ui";

const Experts = () => {
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
              What’s stopping your dreams from becoming a reality. Trash Lion
              will get your area looking right.
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
              <div className="relative aspect-video w-full max-w-[768px] overflow-hidden rounded-lg">
                <Image
                  src="/images/image.png"
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experts;
