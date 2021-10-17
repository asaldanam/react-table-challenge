import { useItems } from 'modules/Items/context';
import { Item, ITEMS_TABLE_DEF } from 'modules/Items/models';
import Table from 'shared/ui/Table';
import { TableChangeEvent } from 'shared/ui/Table/types';

const ItemsTable = () => {
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
      case 'click':
        dispatch({ type: 'toggle-detail', payload: { id: event.payload.id } });
        break;
    }
  }

  return <Table def={ITEMS_TABLE_DEF} rows={Object.values(state.data)} onChange={handleEvents} />;
};

export default ItemsTable;
