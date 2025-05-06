import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const buttonVariants = tv({
  base: "flex items-center gap-1.5 py-2 pl-5 pr-4 md:gap-2.5 md:py-3 md:pl-7 md:pr-6 w-fit rounded-full",
  variants: {
    variant: {
      primary: "btn-primary text-white",
      secondary: "btn-secondary text-blue active:text-dark-blue-1",
      tertiary: "btn-tertiary text-green-2 active:text-dark-green",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
}: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant }), className)}>
      {children}
    </button>
  );
};

export default Button;
