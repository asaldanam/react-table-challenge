import { useMemo, useReducer } from 'react';
import {
  ItemContext as Context,
  itemsInitialState as initialState,
  ItemContextValue as Value,
} from '.';
import { itemsReducer as reducer } from './reducer';

type Actions = Value['actions'];

const ItemsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Refactorizar a dispatch

  const create: Actions['create'] = (payload) => {
    console.log(payload);
  };

  const update: Actions['update'] = (id, payload) => {
    console.log(payload);
  };

  const remove: Actions['remove'] = (id) => {
    console.log(id);
  };

  // Memoizes value to state to prevent unecesary re-renders from callbacks
  // https://dmitripavlutin.com/react-context-and-usecontext/#4-updating-the-context

  const actions = { create, update, remove };
  const value: Value = useMemo(() => ({ actions, state }), [state]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ItemsProvider;
