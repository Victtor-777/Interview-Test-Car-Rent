import { cn } from "@/lib/utils";
import NextLink from "next/link";
import { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof NextLink>;

export function Link({ className, children, ...props }: LinkProps) {
  return (
    <NextLink
      className={cn(
        "flex items-center gap-2 text-muted-foreground font-medium text-sm hover:text-blue-600 transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
}
