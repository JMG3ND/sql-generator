import type { Filter, ItemsValueTypes } from "../types/structure";

export function filter(child: Filter<Record<string, any>>): string | undefined {
  if (!child.queryName || !child.operator) return undefined;
  const value = getValue(child.value, child.type);
  return `${child.queryName} ${child.operator} ${value}\n`;
}

function getValue(
  value: string | number | boolean,
  typeValue: ItemsValueTypes | undefined
): string {
  if (value == undefined && value == null) return "";
  switch (typeValue) {
    case "number":
    case "boolean":
      return `${value}`;
    case "string":
    case "date":
    default:
      return `'${value}'`;
  }
}
