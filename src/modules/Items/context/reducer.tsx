import { uuid } from '../utils';
import { ItemsContextValue as Value, itemsInitialState as initialState } from '.';
import { Item } from '../models';

export type ItemsActions =
  | { type: 'toggle-detail'; payload: { id: string | null } }
  | { type: 'create'; payload: { item: Omit<Item, 'id'> } }
  | { type: 'update'; payload: { item: Item } }
  | { type: 'remove'; payload: { id: string } };

export const itemsReducer = (
  state: Value['state'] = initialState,
  action: ItemsActions,
): Value['state'] => {
  switch (action.type) {
    case 'create':
      const id = uuid();
      return {
        ...state,
        data: {
          ...state.data,
          [id]: { id, ...action.payload.item },
        },
      };
    case 'update':
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.item.id]: action.payload.item,
        },
      };
    case 'remove':
      const { [action.payload.id]: removed, ...rest } = state.data;
      return {
        ...state,
        data: rest,
        detailId: state.detailId === removed.id ? null : state.detailId,
      };
    case 'toggle-detail':
      return {
        ...state,
        detailId: action.payload.id,
      };
    default:
      return state;
  }
};
