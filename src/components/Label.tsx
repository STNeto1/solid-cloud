import { cva, type VariantProps } from "class-variance-authority";

import { Component, JSX } from "solid-js";
import { cn } from "~/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

type Props = JSX.LabelHTMLAttributes<HTMLLabelElement> &
  VariantProps<typeof labelVariants>;

export const Label: Component<Props> = (props) => {
  return (
    <label
      {...props}
      class={cn(labelVariants(), props.class, props.classList)}
    />
  );
};
