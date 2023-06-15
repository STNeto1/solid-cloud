import type { Component } from "solid-js";
import { Link } from "~/components/Link";

const App: Component = () => {
  return (
    <section class="container max-w-6xl py-4">
      <nav class="flex items-center gap-2">
        <Link href="/">Home</Link>
        <Link href="/hourly">Hourly</Link>
        <Link href="/uptime">Uptime</Link>
        <Link href="/storage">Storage</Link>
      </nav>
    </section>
  );
};

export default App;
