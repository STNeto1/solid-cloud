import { createMemo, createSignal, For, VoidComponent } from "solid-js";
import { Button } from "~/components/Button";
import { DowntimeCard } from "~/components/DowntimeCard";
import { Input } from "~/components/Input";
import { formatTime, uptimeFn } from "~/lib/uptime";
import { parseTextInput } from "~/lib/utils";

const SEC_IN_DAY = 86400;
const SEC_IN_WEEK = 604800;
const SEC_IN_MONTH = 2629743;
const SEC_IN_QUARTER = 7889229;
const SEC_IN_YEAR = 31556926;

const COMMON_VALUES = [99.999, 99.99, 99.9, 99] as const;

export const UptimePage: VoidComponent = () => {
  const [uptime, setUptime] = createSignal<number>(99.99);

  const dailyUptime = createMemo(() =>
    formatTime(SEC_IN_DAY - uptimeFn(SEC_IN_DAY, uptime()))
  );
  const weeklyUptime = createMemo(() =>
    formatTime(SEC_IN_WEEK - uptimeFn(SEC_IN_WEEK, uptime()))
  );
  const monthlyUptime = createMemo(() =>
    formatTime(SEC_IN_MONTH - uptimeFn(SEC_IN_MONTH, uptime()))
  );
  const quarterlyUptime = createMemo(() =>
    formatTime(SEC_IN_QUARTER - uptimeFn(SEC_IN_QUARTER, uptime()))
  );
  const yearlyUptime = createMemo(() =>
    formatTime(SEC_IN_YEAR - uptimeFn(SEC_IN_YEAR, uptime()))
  );

  return (
    <section class="container max-w-5xl h-full flex items-center justify-center flex-col pt-8 lg:pt-0">
      <section class="w-full p-4 flex flex-col items-center gap-4">
        <h1 class="border-b pb-2 text-2xl lg:text-3xl font-semibold tracking-tight transition-colors">
          Uptime Calculator
        </h1>

        <h4 class="font-semibold tracking-tight">
          Calculate a service downtime based on its uptime percentage.
        </h4>

        <span class="border-b border-foreground opacity-50 w-full"></span>

        <div class="w-full flex flex-col gap-2">
          <p class="text-left text-sm font-medium leading-none">
            Common uptime percentages
          </p>

          <div class="flex flex-col lg:flex-row items-center gap-2">
            <For each={COMMON_VALUES}>
              {(value) => (
                <Button
                  size={"sm"}
                  variant={"outline"}
                  class={"w-full lg:w-auto"}
                  onClick={() => setUptime(value)}
                >
                  {value}%
                </Button>
              )}
            </For>
          </div>
        </div>
        <Input
          type="text"
          value={uptime()}
          onInput={(e) => setUptime(parseTextInput(e.currentTarget.value))}
          class={"h-14"}
        />

        <span class="border-b border-foreground opacity-50 w-full"></span>

        <section class="w-full grid gap-2 md:grid-cols-2">
          <DowntimeCard label="Daily" value={dailyUptime()} />
          <DowntimeCard label="Weekly" value={weeklyUptime()} />
          <DowntimeCard label="Monthly" value={monthlyUptime()} />
          <DowntimeCard label="Quarterly" value={quarterlyUptime()} />
          <DowntimeCard label="Yearly" value={yearlyUptime()} />
        </section>
      </section>
    </section>
  );
};
