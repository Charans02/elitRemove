import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const textVariants = tv({
  base: "",
  variants: {
    variant: {
      h1: "font-[family-name:var(--font-sora-sans)] text-[34px] leading-[43px] xl:text-[65px] xl:leading-[78px] font-bold",
      h2: "font-[family-name:var(--font-sora-sans)] text-[34px] leading-[43px] xl:text-[45px] xl:leading-[60px] font-semibold",
      h3: "font-[family-name:var(--font-sora-sans)] text-[54px] leading-[60px] font-semibold",
      h4: "font-[family-name:var(--font-sora-sans)] text-[38px] leading-[48px] font-semibold",
      h5: "text-[20px] lg:text-[30px] leading-[100%] font-normal",
      h6: "font-[family-name:var(--font-sora-sans)] text-[20px] leading-[28px] font-semibold",
      body1:
        "font-[family-name:var(--font-sora-sans)] text-[16px] leading-[24px] font-normal",
      body2:
        "font-[family-name:var(--font-sora-sans)] text-[18px] leading-[26px] font-normal text-[#525252]",
      button:
        "font-[family-name:var(--font-sora-sans)] text-[18px] leading-[28px] font-semibold",
      caption: "text-[12px] lg:text-[14px] leading-[100%] font-normal",
    },
  },
  defaultVariants: {
    variant: "body1",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  className?: string;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  variant = "body1",
  className,
  children,
}) => {
  const Tag = variant.startsWith("h")
    ? (variant as keyof React.JSX.IntrinsicElements)
    : "p";

  return (
    <Tag className={cn(textVariants({ variant }), className)}>{children}</Tag>
  );
};

export default Text;
