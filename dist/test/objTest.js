"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objText = void 0;
const generateFilter_1 = require("../functions/generateFilter");
exports.objText = {
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
    ],
};
const response = (0, generateFilter_1.generateFilter)(exports.objText);
console.log(response);
//# sourceMappingURL=objTest.js.map