import type { Filter } from "../types/structure";
/**
 * Genera una cadena de condición de filtro SQL basada en el objeto de filtro proporcionado.
 *
 * @param child - El objeto de filtro que contiene el nombre de la consulta, el operador, el valor y el tipo.
 * @returns Una cadena que representa la condición de filtro SQL, o `undefined` si faltan campos requeridos.
 */
export declare function filter(child: Filter<Record<string, any>>): string | undefined;
