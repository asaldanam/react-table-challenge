import { PropsWithChildren, useMemo, useReducer } from 'react';
import {
  ItemsContext as Context,
  itemsInitialState as initialState,
  ItemsContextValue as Value,
} from '.';
import { itemsReducer as reducer } from './reducer';

/** Provides children componentes with Items context */
export default function ItemsProvider({ children }: PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Memoizing value to prevent innecesary re-renders from callback fns
  // https://dmitripavlutin.com/react-context-and-usecontext/#4-updating-the-context
  const value: Value = useMemo(() => ({ dispatch, state }), [state]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
