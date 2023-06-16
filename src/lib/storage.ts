import { createUniqueId } from "solid-js";

export const pgTypes = [
  {
    id: createUniqueId(),
    description: "smallint",
    bytes: 2,
  },
  {
    id: createUniqueId(),
    description: "integer",
    bytes: 4,
  },
  {
    id: createUniqueId(),
    description: "bigint",
    bytes: 8,
  },
  {
    id: createUniqueId(),
    description: "real",
    bytes: 4,
  },
  {
    id: createUniqueId(),
    description: "double precision",
    bytes: 8,
  },
  {
    id: createUniqueId(),
    description: "smallserial",
    bytes: 2,
  },
  {
    id: createUniqueId(),
    description: "serial",
    bytes: 4,
  },
  {
    id: createUniqueId(),
    description: "bigserial",
    bytes: 8,
  },
  {
    id: createUniqueId(),
    description: "money",
    bytes: 8,
  },
  {
    id: createUniqueId(),
    description: "char",
    bytes: 1,
  },
  {
    id: createUniqueId(),
    description: "varchar",
    bytes: 64,
  },
  {
    id: createUniqueId(),
    description: "text",
    bytes: 128,
  },
  {
    id: createUniqueId(),
    description: "bytea",
    bytes: 4,
  },
  {
    id: createUniqueId(),
    description: "timestamp [without time zone]",
    bytes: 8,
  },
  {
    id: createUniqueId(),
    description: "timestamp [with time zone]",
    bytes: 8,
  },
  {
    id: createUniqueId(),
    description: "date",
    bytes: 4,
  },
  {
    id: createUniqueId(),
    description: "time [without time zone]",
    bytes: 8,
  },
  {
    id: createUniqueId(),
    description: "times [with time zone]",
    bytes: 12,
  },
  {
    id: createUniqueId(),
    description: "interval",
    bytes: 16,
  },
  {
    id: createUniqueId(),
    description: "boolean",
    bytes: 1,
  },
  {
    id: createUniqueId(),
    description: "point",
    bytes: 16,
  },
  {
    id: createUniqueId(),
    description: "line",
    bytes: 32,
  },
  {
    id: createUniqueId(),
    description: "lseg",
    bytes: 32,
  },
  {
    id: createUniqueId(),
    description: "box",
    bytes: 32,
  },
  {
    id: createUniqueId(),
    description: "path",
    bytes: 16,
  },
  {
    id: createUniqueId(),
    description: "polygon",
    bytes: 40,
  },
  {
    id: createUniqueId(),
    description: "circle",
    bytes: 24,
  },
  {
    id: createUniqueId(),
    description: "cidr",
    bytes: 19,
  },
  {
    id: createUniqueId(),
    description: "inet",
    bytes: 19,
  },
  {
    id: createUniqueId(),
    description: "macaddr",
    bytes: 6,
  },
  {
    id: createUniqueId(),
    description: "macaddr8",
    bytes: 8,
  },
  {
    id: createUniqueId(),
    description: "bit",
    bytes: 1,
  },
  {
    id: createUniqueId(),
    description: "bit varying",
    bytes: 1,
  },
  {
    id: createUniqueId(),
    description: "uuid",
    bytes: 128,
  },
] as const;
