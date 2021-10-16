import Table from 'shared/ui/Table';
import { TableChangeEvent } from 'shared/ui/Table/types';
import styled, { css } from 'styled-components';
import { useItems } from './context';
import ItemsProvider from './context/provider';
import { Item, ITEMS_TABLE_DEF } from './models';

/** Items view */
const View = () => {
  const { state, dispatch } = useItems();

  function handleEvents(event: TableChangeEvent) {
    switch (event.type) {
      case 'create':
        dispatch({ type: 'create', payload: { item: event.payload as Item } });
        break;
      case 'update':
        dispatch({ type: 'update', payload: { item: event.payload as Item } });
        break;
      case 'remove':
        dispatch({ type: 'remove', payload: { id: event.payload.id } });
        break;
      case 'cellClick':
        console.log(event);
        break;
    }
  }

  return (
    <Root>
      <Table def={ITEMS_TABLE_DEF} rows={Object.values(state.data)} onChange={handleEvents} />
    </Root>
  );
};

/** Styled components */

const Root = styled.div`
  ${({ theme }) => css`
    max-width: 960px;
    margin: 0 auto;
  `}
`;

const ItemsWrapper = () => {
  return (
    <ItemsProvider>
      <View />
    </ItemsProvider>
  );
};

export default ItemsWrapper;
