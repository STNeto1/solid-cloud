import { Component, JSX } from "solid-js";
import { cn } from "~/lib/utils";

type TOuter<T> = JSX.HTMLAttributes<T>;

export const Table: Component<TOuter<HTMLTableElement>> = (props) => (
  <div class="w-full overflow-auto">
    <table
      {...props}
      class={cn("w-full caption-bottom text-sm", props.class, props.classList)}
    />
  </div>
);

export const TableHeader: Component<TOuter<HTMLTableSectionElement>> = (
  props
) => (
  <thead
    {...props}
    class={cn("[&_tr]:border-b", props.class, props.classList)}
  />
);

export const TableBody: Component<TOuter<HTMLTableSectionElement>> = (
  props
) => (
  <tbody
    {...props}
    class={cn("[&_tr:last-child]:border-0", props.class, props.classList)}
  />
);

export const TableFooter: Component<TOuter<HTMLTableSectionElement>> = (
  props
) => (
  <tfoot
    {...props}
    class={cn(
      "bg-primary font-medium text-primary-foreground",
      props.class,
      props.classList
    )}
  />
);

export const TableRow: Component<TOuter<HTMLTableRowElement>> = (props) => (
  <tr
    {...props}
    class={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      props.class,
      props.classList
    )}
  />
);

export const TableHead: Component<TOuter<HTMLTableCellElement>> = (props) => (
  <th
    {...props}
    class={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      props.class,
      props.classList
    )}
  />
);

export const TableCell: Component<TOuter<HTMLTableCellElement>> = (props) => (
  <td
    {...props}
    class={cn(
      "p-4 align-middle [&:has([role=checkbox])]:pr-0",
      props.class,
      props.classList
    )}
  />
);

export const TableCaption: Component<TOuter<HTMLElement>> = (props) => (
  <caption
    {...props}
    class={cn(
      "mt-4 text-sm text-muted-foreground",
      props.class,
      props.classList
    )}
  />
);
