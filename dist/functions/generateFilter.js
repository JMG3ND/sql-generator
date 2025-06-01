"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFilter = void 0;
const filter_1 = require("./filter");
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
const generateFilter = (objWhere) => {
    var _a;
    const response = (_a = objWhere.group) === null || _a === void 0 ? void 0 : _a.map((query) => {
        if (query.typeFilter === "Filter")
            return (0, filter_1.filter)(query);
        if (query.typeFilter === "Group")
            return query.group ? (0, exports.generateFilter)(query) : undefined;
    }).filter((v) => v).join(` ${objWhere.typeGroup} `);
    return (response && `( ${response} )`) || "";
};
exports.generateFilter = generateFilter;
//# sourceMappingURL=generateFilter.js.map