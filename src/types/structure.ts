export type Filter<T extends Record<string, any>> = {
  [K in keyof T]:
    | {
        typeFilter: "Filter";
        type: "number";
        queryName: K;
        operator: NumberOperator;
        value: T[K];
      }
    | {
        typeFilter: "Filter";
        type: "string" | "date";
        queryName: K;
        operator: StringOperator | DateOperators;
        value: T[K];
      }
    | {
        typeFilter: "Filter";
        type: "boolean";
        queryName: K;
        operator: BooleanOperators;
        value: 0 | 1;
      }
    | {
        typeFilter: "Filter";
        type: undefined | "string" | "number" | "date";
        queryName: K | undefined;
        operator: undefined | NullCheckingOperators;
        value?: undefined;
      };
}[keyof T];

export type Group<T extends Record<string, any>> = {
  typeFilter: "Group";
  typeGroup: TypeGroup | undefined;
  group?: Array<ChildGroup<T>>;
};

export type ChildGroup<T extends Record<string, any>> = Group<T> | Filter<T>;

export type TypeGroup = "AND" | "OR";

export type Operators =
  | "="
  | "!="
  | ">"
  | "<"
  | ">="
  | "<="
  | "LIKE"
  | "NOT LIKE"
  | "IN"
  | "NOT IN"
  | "IS NULL"
  | "IS NOT NULL";

export type StringOperator = Operators;
export type NumberOperator = Exclude<Operators, "LIKE" | "NOT LIKE">;
export type DateOperators = Operators;
export type BooleanOperators = Exclude<
  Operators,
  ">" | "<" | ">=" | "<=" | "LIKE" | "NOT LIKE" | "IN" | "NOT IN"
>;

export type ItemsValueTypes = "number" | "string" | "date" | "boolean";
export type Runtime<T extends Record<string, any>> = {
  key: keyof T;
  type: ItemsValueTypes;
}[];

// Tipos auxiliares para los operadores
type NullCheckingOperators = "IS NULL" | "IS NOT NULL";
