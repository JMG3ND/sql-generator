"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = filter;
/**
 * Genera una cadena de condición de filtro SQL basada en el objeto de filtro proporcionado.
 *
 * @param child - El objeto de filtro que contiene el nombre de la consulta, el operador, el valor y el tipo.
 * @returns Una cadena que representa la condición de filtro SQL, o `undefined` si faltan campos requeridos.
 */
function filter(child) {
    if (!child.queryName || !child.operator)
        return undefined;
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
function getValue(value, typeValue) {
    if (value === undefined || value === null)
        return "";
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
//# sourceMappingURL=filter.js.map