import { A } from "@solidjs/router";
import { VoidComponent } from "solid-js";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/Card";

export const HomePage: VoidComponent = () => {
  return (
    <section class="w-full h-full flex flex-col items-center justify-center gap-4">
      <A href="/hourly" class="w-full">
        <Card class="w-full">
          <CardHeader>
            <CardTitle>Hourly Pricing</CardTitle>
            <CardDescription>
              Calculate a service price based on an hourly rate.
            </CardDescription>
          </CardHeader>
        </Card>
      </A>

      <A href="/uptime" class="w-full">
        <Card class="w-full">
          <CardHeader>
            <CardTitle>Uptime Calculator</CardTitle>
            <CardDescription>
              Calculate the downtime of a service based on its uptime.
            </CardDescription>
          </CardHeader>
        </Card>
      </A>

      <A href="/#" class="w-full opacity-50">
        <Card class="w-full">
          <CardHeader>
            <CardTitle>Storage Calculator</CardTitle>
            <CardDescription>
              Calculate the storage size of a database.
            </CardDescription>
          </CardHeader>
        </Card>
      </A>
    </section>
  );
};
