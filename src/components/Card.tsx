import { Component, JSX } from "solid-js";
import { cn } from "~/lib/utils";

type CardDiv = Component<JSX.HTMLAttributes<HTMLDivElement>>;
type CardParagraph = Component<JSX.HTMLAttributes<HTMLParagraphElement>>;

export const Card: CardDiv = (props) => (
  <div
    {...props}
    class={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      props.class,
      props.classList
    )}
  />
);

export const CardHeader: CardDiv = (props) => (
  <div
    {...props}
    class={cn("flex flex-col space-y-1.5 p-6", props.class, props.classList)}
  />
);

export const CardTitle: CardParagraph = (props) => (
  <h3
    {...props}
    class={cn(
      "text-lg font-semibold leading-none tracking-tight",
      props.class,
      props.classList
    )}
  />
);

export const CardDescription: CardParagraph = (props) => (
  <p
    {...props}
    class={cn("text-sm text-muted-foreground", props.class, props.classList)}
  />
);

export const CardContent: CardDiv = (props) => (
  <div {...props} class={cn("p-6 pt-0", props.class, props.classList)} />
);

export const CardFooter: CardDiv = (props) => (
  <div
    {...props}
    class={cn(" flex items-center p-6 pt-0", props.class, props.classList)}
  />
);
