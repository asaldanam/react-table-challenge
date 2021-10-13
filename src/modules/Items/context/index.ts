import { createContext } from 'react';
import { Item } from '../models';

export interface ItemContextValue {
  state: {
    data: { [id: string]: Item };
  };
  actions: {
    create: (payload: Item) => void;
    update: (id: string, payload: Item) => void;
    remove: (id: string) => void;
  };
}

export const itemsInitialState: ItemContextValue['state'] = {
  data: {},
};

export const ItemContext = createContext({
  state: itemsInitialState,
  actions: {
    create() {},
    update() {},
    remove() {},
  },
} as ItemContextValue);
