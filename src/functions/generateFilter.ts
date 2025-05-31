import { Group } from "../types/structure";
import { filter } from "./filter";

export const generateFilter = (
  objWhere: Group<Record<string, any>>
): string => {
  const response = objWhere.group
    ?.map((query) => {
      if (query.typeFilter === "Filter") return filter(query);
      if (query.typeFilter === "Group")
        return query.group ? generateFilter(query) : undefined;
    })
    .filter((v) => v)
    .join(` ${objWhere.typeGroup} `);
  return (response && `( ${response} )`) || "";
};
