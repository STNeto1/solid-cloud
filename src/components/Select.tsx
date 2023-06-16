import { Select as KSelect } from "@kobalte/core";
import { AiOutlineCheck } from "solid-icons/ai";
import { FaSolidChevronDown } from "solid-icons/fa";
import { Component } from "solid-js";
import { cn } from "~/lib/utils";

export const Select = KSelect.Root;

export const SelectValue = KSelect.Value;

export const SelectTrigger: Component<KSelect.SelectTriggerProps> = (props) => (
  <KSelect.Trigger
    {...props}
    class={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      props.class,
      props.classList
    )}
  >
    {props.children}
    <KSelect.Icon>
      <FaSolidChevronDown class="h-4 w-4 opacity-50" />
    </KSelect.Icon>
  </KSelect.Trigger>
);

export const SelectContent: Component<KSelect.SelectContentProps> = (props) => (
  <KSelect.Portal>
    <KSelect.Content
      class={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",
        props.class,
        props.classList
      )}
      {...props}
    >
      <KSelect.Listbox />
    </KSelect.Content>
  </KSelect.Portal>
);

export const SelectLabel: Component<KSelect.SelectLabelProps> = (props) => (
  <KSelect.Label
    class={cn(
      "py-1.5 pl-8 pr-2 text-sm font-semibold",
      props.class,
      props.classList
    )}
    {...props}
  />
);

export const SelectItem: Component<KSelect.SelectItemProps> = (props) => (
  <KSelect.Item
    class={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground",
      props.class,
      props.classList
    )}
    {...props}
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <KSelect.ItemIndicator>
        <AiOutlineCheck class="h-4 w-4" />
      </KSelect.ItemIndicator>
    </span>

    <KSelect.ItemLabel>{props.children}</KSelect.ItemLabel>
  </KSelect.Item>
);

// export const SelectSeparator: Component<unknown> = (props) => (
//   <KSelect.Separator
//     ref={ref}
//     class={cn("-mx-1 my-1 h-px bg-muted", className)}
//     {...props}
//   />
// )
