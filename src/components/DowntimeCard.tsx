import { VoidComponent } from "solid-js";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/Card";

type Props = {
  label: string;
  value: string;
};

export const DowntimeCard: VoidComponent<Props> = (props) => {
  return (
    <Card>
      <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle class="text-sm font-medium">{props.label}</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="text-base">{props.value}</div>
      </CardContent>
    </Card>
  );
};
