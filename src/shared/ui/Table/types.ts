export type TableDef = {
  [col: string]: {
    label: string;
    type: 'string' | 'number';
  };
};

export type TableRow = {
  id: string;
  [col: string]: string | number;
};

export type TableActions = {
  save: {
    payload: TableRow;
  };
  remove: {
    payload: Pick<TableRow, 'id'>;
  };
};

export type TableChangeEvent = {
  type: keyof TableActions;
  payload: TableActions[keyof TableActions]['payload'];
};
