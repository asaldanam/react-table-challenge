import Button from 'shared/ui/Button';
import styled, { css } from 'styled-components';
import { TableActions, TableDef, TableRow } from '../types';
import Cell from './Cell';
import useRow from './useRow';

export type RowProps = {
  data: TableRow;
  def: TableDef;
  editMode?: boolean;
  onCreate: (payload: TableActions['create']['payload']) => void;
  onUpdate: (payload: TableActions['update']['payload']) => void;
  onRemove: (payload: TableActions['remove']['payload']) => void;
  onCellClick?: (payload: TableActions['cellClick']['payload']) => void;
};

/** Row UI Component */
const Row = (props: RowProps) => {
  const { onCellClick } = props;
  const { id, cells, form, createMode, editMode, actions } = useRow(props);
  const { add, clear, remove, toggleEdit, update, save } = actions;

  const Actions = () => (
    <ActionsCell>
      {createMode ? (
        <>
          <Button variant="secondary" onClick={clear}>
            clear
          </Button>
          <Button onClick={add}>add new</Button>
        </>
      ) : (
        <>
          {editMode && (
            <>
              <Button variant="secondary" onClick={toggleEdit}>
                cancel
              </Button>
              <Button onClick={save}>save</Button>
            </>
          )}
          {!editMode && (
            <>
              <Button variant="primary" onClick={toggleEdit}>
                edit
              </Button>
              <Button variant="danger" onClick={remove}>
                remove
              </Button>
            </>
          )}
        </>
      )}
    </ActionsCell>
  );

  return (
    <Root>
      {cells.map(([colName]) => {
        const col = props.def[colName];
        const value = form[colName];
        return (
          <Cell
            readOnly={!editMode}
            disabled={!editMode}
            key={colName}
            onClick={col.clickeable && onCellClick ? () => onCellClick({ id, value }) : null}
            type={col.type || 'text'}
            value={value}
            onChange={(e) => update(colName, e.target.value)}
          />
        );
      })}
      <Actions />
    </Root>
  );
};

export default Row;

/** Styled components */

const Root = styled.tr`
  ${({ theme }) => css``}
`;

const ActionsCell = styled.td`
  ${({ theme }) => css`
    text-align: right;
    & > *:not(:last-child) {
      margin-right: 4px;
    }
  `}
`;
