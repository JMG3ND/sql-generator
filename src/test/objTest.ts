import type { Group } from "../types/structure.js";
import { generateFilter } from "../functions/generateFilter";

export const objText: Group<Record<string, any>> = {
  typeFilter: "Group",
  typeGroup: "AND",
  group: [
    {
      typeFilter: "Filter",
      queryName: "IdentOrder",
      type: "number",
      operator: "=",
      value: 0,
    },
    {
      typeFilter: "Filter",
      queryName: "Rebox",
      type: "boolean",
      operator: "=",
      value: 0,
    },
    {
      typeFilter: "Filter",
      queryName: "Void",
      type: "boolean",
      operator: "=",
      value: 0,
    },
    {
      typeFilter: "Filter",
      queryName: "StorageName",
      type: "string",
      operator: "IS NOT NULL",
    },
    {
      typeFilter: "Filter",
      queryName: "StorageName",
      type: "string",
      operator: "LIKE",
      value: "#%",
    },
    {
      typeFilter: "Filter",
      queryName: "StorageName",
      type: "string",
      operator: "!=",
      value: "#DESC",
    },
    {
      typeFilter: "Group",
      typeGroup: "OR",
      group: [
        {
          typeFilter: "Filter",
          queryName: "StationName",
          type: "string",
          operator: "=",
          value: "CONGELADO",
        },
        {
          typeFilter: "Filter",
          queryName: "StationName",
          type: "string",
          operator: "=",
          value: "BODEGA2",
        },
      ],
    },
    {
      typeFilter: "Filter",
      queryName: "StorageName",
      type: "date",
      operator: ">",
      value: "2025-06/01",
    },
  ],
};

const response = generateFilter(objText);

console.log("TEST 1");
console.log(response);
