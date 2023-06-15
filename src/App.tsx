import type { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import { Link } from "~/components/Link";
import { HourlyPage } from "~/routes/Hourly";

const App: Component = () => {
  return (
    <section class="container max-w-6xl py-4">
      <nav class="flex items-center gap-2">
        <Link href="/">Home</Link>
        <Link href="/hourly">Hourly</Link>
        <Link href="/uptime">Uptime</Link>
        <Link href="/storage">Storage</Link>
      </nav>

      <Routes>
        <Route path="/hourly" element={<HourlyPage />} />
      </Routes>
    </section>
  );
};

export default App;
