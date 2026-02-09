import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-[#0EA5E9] text-white hover:bg-[#0284C7] active:scale-95 shadow-sm",
        secondary: "border-2 border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10 active:scale-95",
        ghost: "text-[#0EA5E9] hover:bg-[#F1F5F9] active:scale-95",
        success: "bg-[#10B981] text-white hover:bg-[#059669] shadow-sm",
        error: "bg-[#EF4444] text-white hover:bg-[#DC2626] shadow-sm",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
