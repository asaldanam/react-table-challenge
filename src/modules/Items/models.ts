import { ColDef } from 'shared/ui/Table/types';

export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
}

export type ItemsTableDef = { [col in keyof Omit<Item, 'id'>]: ColDef };

export const ITEMS_TABLE_DEF: ItemsTableDef = {
  name: {
    label: 'Name',
    searchable: true,
    required: true,
    clickeable: true,
  },
  description: {
    label: 'Description',
    required: true,
  },
  price: {
    label: 'Price',
    type: 'number',
    required: true,
  },
};
