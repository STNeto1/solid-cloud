import { FaSolidTrash } from "solid-icons/fa";
import {
  createMemo,
  createSignal,
  createUniqueId,
  For,
  VoidComponent,
} from "solid-js";
import { createStore } from "solid-js/store";
import { Button } from "~/components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/Card";
import { Divider } from "~/components/Divider";
import { Input } from "~/components/Input";
import { Label } from "~/components/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/Select";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "~/components/Table";
import { pgTypes } from "~/lib/storage";

const scales = [
  {
    description: "Bytes",
    offset: 1,
  },
  {
    description: "Kilobytes",
    offset: 1024,
  },
  {
    description: "Megabytes",
    offset: 1024 * 1024,
  },
  {
    description: "Gigabytes",
    offset: 1024 * 1024 * 1024,
  },
  {
    description: "Terabytes",
    offset: 1024 * 1024 * 1024 * 1024,
  },
] as const;

type Scale = (typeof scales)[number];

type Entry = {
  id: string;
  description: string;
  type: string;
  bytes: number;
};

export const StoragePage: VoidComponent = () => {
  const [writesPerMinute, setWritesPerMinute] = createSignal(0);
  const [scale, setScale] = createSignal<Scale>(scales[0]);

  const [entries, setEntries] = createSignal<Entry[]>([]);

  const [addColumn, setAddColumn] = createSignal({
    description: "",
    tid: pgTypes[0].id,
  });

  const stats = createMemo(() => {
    const totalBytes = entries().reduce((acc, entry) => acc + entry.bytes, 0);
    const totalBytesPerMinute = totalBytes * writesPerMinute();
    const totalBytesPerHour = totalBytesPerMinute * 60;
    const totalBytesPerDay = totalBytesPerHour * 24;
    const totalBytesPerMonth = totalBytesPerDay * 30;
    const totalBytesPerYear = totalBytesPerMonth * 12;

    const offset = scale().offset;

    return [
      {
        description: "Per day",
        value: (totalBytesPerDay / offset).toFixed(1),
      },
      {
        description: "Per month",
        value: (totalBytesPerMonth / offset).toFixed(1),
      },
      {
        description: "Per year",
        value: (totalBytesPerYear / offset).toFixed(1),
      },
    ];
  });

  const handleAdd = () => {
    const _type = pgTypes.find((type) => type.id === addColumn().tid);
    if (!_type) {
      return;
    }

    setEntries([
      ...entries(),
      {
        id: createUniqueId(),
        description: addColumn().description,
        type: _type.description,
        bytes: _type.bytes,
      },
    ]);
    setAddColumn({ description: "", tid: pgTypes[0].id });
  };

  const handleDelete = (id: string) => {
    setEntries(entries().filter((entry) => entry.id !== id));
  };

  return (
    <section class="w-full h-full flex flex-col items-center justify-center gap-4">
      <h1 class="border-b pb-2 text-2xl lg:text-3xl font-semibold tracking-tight transition-colors">
        Storage Calculator
      </h1>

      <h4 class="font-semibold tracking-tight">
        Calculate the storage necessary for a given table
      </h4>

      <Divider />

      <div class="flex flex-col w-full">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="border-b border-gray-200 sm:rounded-lg flex flex-col pt-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAdd();
                }}
                class="flex items-end justify-between gap-2"
              >
                <div class="w-full">
                  <Label for="description">Description</Label>
                  <div class="mt-1">
                    <Input
                      type="text"
                      name="description"
                      id="description"
                      required
                      value={addColumn().description}
                      onChange={(e) =>
                        setAddColumn((prev) => ({
                          ...prev,
                          description: e.currentTarget.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div class="w-96">
                  <Label for="description">Type</Label>
                  <div class="mt-1">
                    <Select
                      value={addColumn().tid}
                      onChange={(e: string) => {
                        setAddColumn((prev) => ({
                          ...prev,
                          tid: e,
                        }));
                      }}
                      options={pgTypes.map((type) => type.id)}
                      placeholder="Select a type"
                      itemComponent={(props) => (
                        <SelectItem item={props.item}>
                          {
                            pgTypes.find((t) => t.id === props.item.rawValue)
                              ?.description
                          }
                        </SelectItem>
                      )}
                    >
                      <SelectTrigger aria-label="Select a type">
                        <SelectValue<string>>
                          {(state) =>
                            pgTypes.find((t) => t.id === state.selectedOption())
                              ?.description
                          }
                        </SelectValue>
                      </SelectTrigger>

                      <SelectContent />
                    </Select>
                  </div>
                </div>

                <Button type="submit">Add</Button>
              </form>

              <div class="pt-10 flex flex-col gap-8">
                <Table>
                  <TableHeader class="w-full">
                    <TableRow class="w-full">
                      <TableCell class="w-1/4">Name</TableCell>
                      <TableCell class="w-1/2">Type</TableCell>
                      <TableCell class="w-1/5">Bytes</TableCell>
                      <TableCell class="w-[5%]">
                        <span class="sr-only">Options</span>
                      </TableCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <For each={entries()}>
                      {(elem) => (
                        <TableRow>
                          <TableCell>{elem.description}</TableCell>
                          <TableCell>{elem.type}</TableCell>
                          <TableCell>{elem.bytes}</TableCell>
                          <TableCell>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDelete(elem.id)}
                              class="text-white"
                            >
                              <FaSolidTrash class="text-muted-foreground" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      )}
                    </For>
                  </TableBody>
                </Table>

                <div class="mt-5">
                  <div class="flex items-center justify-between gap-4">
                    <div class="w-full">
                      <Label for="writes">Writes per minute</Label>
                      <div class="mt-1">
                        <Input
                          type="number"
                          name="writes"
                          id="writes"
                          required
                          min={0}
                          value={writesPerMinute()}
                          onInput={(e) =>
                            parseInt(e.currentTarget.value) &&
                            setWritesPerMinute(parseInt(e.currentTarget.value))
                          }
                        />
                      </div>
                    </div>

                    <div class="w-full">
                      <Label for="scale">Scale</Label>
                      <div class="mt-1">
                        <Select
                          value={scale().description}
                          onChange={(val: string) => {
                            const newScale = scales.find(
                              (s) => s.description === val
                            );
                            if (!newScale) {
                              return;
                            }

                            setScale(newScale);
                          }}
                          options={scales.map((scale) => scale.description)}
                          placeholder="Select a scale"
                          itemComponent={(props) => (
                            <SelectItem item={props.item}>
                              {props.item.rawValue}
                            </SelectItem>
                          )}
                        >
                          <SelectTrigger aria-label="Select a scale">
                            <SelectValue<string>>
                              {(state) => state.selectedOption()}
                            </SelectValue>
                          </SelectTrigger>

                          <SelectContent />
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div class="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <For each={stats()}>
                      {(stat) => (
                        <Card>
                          <CardHeader>
                            <CardTitle>{stat.description}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>
                              {stat.value} {scale().description}
                            </p>
                          </CardContent>
                        </Card>
                      )}
                    </For>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
