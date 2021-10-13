import { ItemContextValue as Value, itemsInitialState as initialState } from '.';

type Actions = { type: 'request' };

export const itemsReducer = (state: Value['state'] = initialState, action: Actions) => {
  switch (action.type) {
    default:
      return state;
  }
};
