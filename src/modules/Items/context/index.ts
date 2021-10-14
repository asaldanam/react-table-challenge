import { createContext, Dispatch, useContext } from 'react';
import { Item } from '../models';
import { ItemsActions as Actions } from './reducer';

export interface ItemsContextValue {
  state: {
    data: { [id: string]: Item };
  };
  dispatch: Dispatch<Actions>;
}

export const itemsInitialState: ItemsContextValue['state'] = {
  data: {},
};

export const ItemsContext = createContext({
  state: itemsInitialState,
} as ItemsContextValue);

/** Items state and actions */
export function useItems() {
  const context = useContext(ItemsContext);
  return context;
}
