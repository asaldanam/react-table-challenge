import { HTMLInputTypeAttribute } from 'react';

export type ColDef = {
  label: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  /** Allow to search by */
  searchable?: boolean;
  /** Allow to click cell */
  clickeable?: boolean;
};

export type TableDef = {
  [col: string]: ColDef;
};

export type TableRow = {
  id: string;
  [col: string]: any;
};

export type TableActions = {
  create: {
    payload: Omit<TableRow, 'id'>;
  };
  update: {
    payload: TableRow;
  };
  remove: {
    payload: Pick<TableRow, 'id'>;
  };
  click: {
    payload: { id: string; value: any };
  };
};

export type TableChangeEvent = {
  type: keyof TableActions;
  payload: TableActions[keyof TableActions]['payload'];
};
