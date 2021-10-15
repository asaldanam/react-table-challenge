import { useState } from 'react';
import { uuid } from 'shared/utils';
import styled, { css } from 'styled-components';
import { TableActions, TableDef, TableRow } from '../types';
import Cell from './Cell';

export type RowProps = {
  data: Partial<TableRow>;
  def: TableDef;
  editMode?: boolean;
  onSave: (payload: TableActions['save']['payload']) => void;
  onRemove: (payload: TableActions['remove']['payload']) => void;
};

/** Row UI Component */
const Row = (props: RowProps) => {
  const { data, onSave, onRemove } = props;
  const [editMode, setEditMode] = useState(props.editMode);
  const [form, setForm] = useState<Partial<TableRow>>(data);

  const cells = Object.entries(data).filter(([colName]) => colName !== 'id');
  const createMode = !data.id;

  const toggleEdit = () => setEditMode(!editMode);
  const update = (field: keyof TableRow, value: string) => setForm({ ...form, [field]: value });
  const clear = () => setForm(cells.reduce((cells, [cell]) => ({ ...cells, [cell]: '' }), {}));
  const remove = () => onRemove({ id: uuid() });
  const save = () => {
    onSave({ ...form, id: data.id || uuid() });
    if (createMode) clear();
  };

  const Actions = () => (
    <td>
      {createMode && <button onClick={clear}>clear</button>}
      {!createMode && <button onClick={toggleEdit}>{editMode ? 'cancel' : 'edit'}</button>}
      {editMode && <button onClick={save}>{createMode ? 'add new' : 'save'}</button>}
      {!editMode && !createMode && <button onClick={remove}>remove</button>}
    </td>
  );

  return (
    <Root>
      {cells.map(([colName]) => (
        <Cell
          editMode={editMode}
          key={colName}
          value={form[colName]}
          onChange={(e) => update(colName, e.target.value)}
        />
      ))}
      <Actions />
    </Root>
  );
};

export default Row;

/** Styled components */

const Root = styled.tr`
  ${({ theme }) => css``}
`;
