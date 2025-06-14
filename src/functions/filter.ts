import type { Filter, ItemsValueTypes } from "../types/structure";

/**
 * Genera una cadena de condición de filtro SQL basada en el objeto de filtro proporcionado.
 *
 * @param child - El objeto de filtro que contiene el nombre de la consulta, el operador, el valor y el tipo.
 * @returns Una cadena que representa la condición de filtro SQL, o `undefined` si faltan campos requeridos.
 */
export function filter(child: Filter<Record<string, any>>): string | undefined {
  if (!child.queryName || !child.operator) return undefined;
  const value = getValue(child.value, child.type);
  return `${child.queryName} ${child.operator} ${value}\n`;
}

/**
 * Formatea el valor del filtro según su tipo para su uso en una consulta SQL.
 *
 * @param value - El valor a formatear (string, number o boolean).
 * @param typeValue - El tipo del valor, utilizado para determinar el formato.
 * @returns El valor formateado como cadena, entre comillas si es necesario.
 */
function getValue(
  value: string | number | boolean,
  typeValue: ItemsValueTypes | undefined
): string {
  if (value === undefined || value === null) return "";
  switch (typeValue) {
    case "number":
    case "boolean":
      return `${value}`;
    case "date":
      if (typeof value === "string")
        return `'${value.replaceAll(/-|\//g, "")} 00:00:00.000'`;
    case "string":
    default:
      return `'${value}'`;
  }
}
