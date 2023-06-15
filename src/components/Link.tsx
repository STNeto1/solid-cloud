import { Component } from "solid-js";
import { A, type AnchorProps, useLocation } from "@solidjs/router";
import { cn } from "~/lib/utils";

export const Link: Component<AnchorProps> = (props) => {
  const location = useLocation();

  return (
    <A
      {...props}
      class={cn(
        "transition-colors hover:text-foreground/80 text-lg",
        {
          "text-foreground font-semibold": location.pathname === props.href,
          "text-foreground/60": location.pathname !== props.href,
        },
        props.class,
        props.classList
      )}
    />
  );
};
