export type TableDef = {
  [col: string]: {
    label: string;
  };
};

export type TableRow = {
  id: string;
  [col: string]: string;
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
