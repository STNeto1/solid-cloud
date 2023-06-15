import { createMemo, createSignal, VoidComponent } from "solid-js";
import { Divider } from "~/components/Divider";
import { Input } from "~/components/Input";
import { Label } from "~/components/Label";
import { formatCurrency, parseTextInput } from "~/lib/utils";

export const HourlyPage: VoidComponent = () => {
  const [hourlyRate, setHourlyRate] = createSignal<string | null>(null);

  const dailyRate = createMemo(() => {
    if (hourlyRate() === null) return 0;
    return parseTextInput(hourlyRate()) * 24;
  });

  const weeklyRate = createMemo(() => {
    if (dailyRate() === null) return 0;
    return dailyRate() * 7;
  });

  const monthlyRate = createMemo(() => {
    if (dailyRate() === null) return 0;
    return dailyRate() * 31;
  });

  return (
    <section class="w-full h-full flex flex-col items-center justify-center gap-4">
      <h1 class="border-b pb-2 text-2xl lg:text-3xl font-semibold tracking-tight transition-colors">
        Hourly Prices
      </h1>

      <h4 class="font-semibold tracking-tight">
        Calculate a service price based on an hourly rate.
      </h4>

      <Divider />

      <div class="form-control w-full max-w-md">
        <Label>
          <span class="leading-5">What is the hourly rate?</span>
        </Label>
        <Input
          type="text"
          value={hourlyRate()}
          onInput={(e) => {
            setHourlyRate(e.currentTarget.value);
          }}
        />
      </div>

      <div class="flex flex-col gap-2 text-base w-full pt-4 max-w-lg text-clip overflow-hidden">
        <div class="flex items-center justify-between w-full">
          <p>Daily value</p>
          <p class="max-w-xs">{formatCurrency(dailyRate())}</p>
        </div>

        <div class="flex items-center justify-between">
          <p>Weekly value</p>
          <p class="max-w-xs">{formatCurrency(weeklyRate())}</p>
        </div>

        <div class="flex items-center justify-between">
          <p>Monthly value</p>
          <p class="max-w-xs">{formatCurrency(monthlyRate())}</p>
        </div>
      </div>
    </section>
  );
};
