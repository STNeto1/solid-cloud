import type { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import { Link } from "~/components/Link";
import { HourlyPage } from "~/routes/Hourly";
import { UptimePage } from "~/routes/Uptime";
import { HomePage } from "~/routes/Home";
import { _404Page } from "~/routes/_404";
import { StoragePage } from "~/routes/Storage";

const App: Component = () => {
  return (
    <section class="container max-w-6xl py-4">
      <nav class="flex items-center gap-2 justify-center pb-10">
        <Link href="/">Home</Link>
        <Link href="/hourly">Hourly</Link>
        <Link href="/uptime">Uptime</Link>
        <Link href="/storage">Storage</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hourly" element={<HourlyPage />} />
        <Route path="/uptime" element={<UptimePage />} />
        <Route path="/storage" element={<StoragePage />} />

        <Route path="*" element={<_404Page />} />
      </Routes>
    </section>
  );
};

export default App;
