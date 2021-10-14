import { ItemsContextValue as Value, itemsInitialState as initialState } from '.';
import { Item } from '../models';

export type ItemsActions =
  | { type: 'add'; payload: { item: Item } }
  | { type: 'edit'; payload: { id: string; item: Item } }
  | { type: 'remove'; payload: { id: string } };

export const itemsReducer = (state: Value['state'] = initialState, action: ItemsActions) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
      };
    default:
      return state;
  }
};
