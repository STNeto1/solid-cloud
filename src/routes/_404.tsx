import { VoidComponent } from "solid-js";
import { Link } from "~/components/Link";

export const _404Page: VoidComponent = () => {
  return (
    <section class="w-full h-full flex flex-col items-center justify-center gap-4">
      <div class="text-center">
        <p class="text-base font-semibold text-foreground">404</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p class="mt-6 text-base leading-7 text-foreground">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
      </div>
    </section>
  );
};
