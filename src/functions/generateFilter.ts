import { Group } from "../types/.d";
import { filter } from "./filter";

/**
 * Genera una cadena de filtro SQL a partir de un objeto de tipo `Group`.
 *
 * Esta función recorre recursivamente la estructura de grupos y filtros,
 * construyendo una expresión lógica (por ejemplo, combinando condiciones con AND/OR)
 * según el tipo de grupo (`typeGroup`). Utiliza la función `filter` para procesar
 * los filtros individuales y se llama a sí misma para procesar subgrupos anidados.
 *
 * @param objWhere - Objeto de tipo `Group` que representa la estructura de filtros y grupos.
 * Para crear este objeto se recomienda utilizar el tipo de dato Group y pasarle un objeto que extienda el tipo Record<string, any>
 * @returns Una cadena que representa la condición SQL generada, o una cadena vacía si no hay filtros.
 */
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
