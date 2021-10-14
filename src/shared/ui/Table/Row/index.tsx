import { useState } from 'react';
import { uuid } from 'shared/utils';
import styled, { css } from 'styled-components';
import { TableActions, TableRow } from '../types';

export type RowProps = {
  data: Partial<TableRow>;
  editMode?: boolean;
  onSave: (payload: TableActions['save']['payload']) => void;
  onRemove: (payload: TableActions['remove']['payload']) => void;
};

/** Row UI Component */
const Row = (props: RowProps) => {
  const { data, onSave, onRemove } = props;
  const [editMode, setEditMode] = useState(props.editMode);
  const [form, setForm] = useState<Partial<TableRow>>(data);
  const cells = Object.entries(data);

  const toggleEdit = () => setEditMode(!editMode);
  const update = (field: keyof TableRow, value: string) => setForm({ ...form, [field]: value });
  const clear = () => setForm(cells.reduce((cells, [cell]) => ({ ...cells, [cell]: '' }), {}));
  const save = () => onSave({ id: data.id || uuid(), ...form });
  const remove = () => onRemove({ id: uuid() });

  const createMode = !data.id;

  const Actions = () => (
    <td>
      {createMode && <button onClick={clear}>clear</button>}
      {!createMode && <button onClick={toggleEdit}>{editMode ? 'cancel' : 'edit'}</button>}
      {editMode && <button onClick={save}>{createMode ? 'add new' : 'save'}</button>}
      {!editMode && !createMode && <button onClick={remove}>remove</button>}
    </td>
  );

  console.log({ form });

  return (
    <Root>
      {cells
        .filter(([colName]) => colName !== 'id')
        .map(([colName, value]) => (
          <td key={colName}>
            {editMode ? (
              <input value={form[colName]} onChange={(e) => update(colName, e.target.value)} />
            ) : (
              value
            )}
          </td>
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
