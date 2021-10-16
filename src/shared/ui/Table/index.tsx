import styled, { css } from 'styled-components';
import Icons from '../Icons';
import Row from './Row';
import { TableChangeEvent, TableDef, TableRow } from './types';
import useTableSearch from './useTableSearch';

export type TableProps = {
  def: TableDef;
  rows: TableRow[];
  onChange: (action: TableChangeEvent) => void;
};

const actionsCol = { id: { label: '' } };

/** Table UI Component */
const Table = (props: TableProps) => {
  const { def, rows, onChange } = props;
  const columns = Object.entries({ ...def, ...actionsCol });
  const { search, placeholder, filteredRows, actions: searchActions } = useTableSearch(rows, def);
  const { clearSearch, handleSearch } = searchActions;

  const NewRowForm = () => {
    return (
      <Row
        def={def}
        data={{ id: '' }}
        editMode={true}
        onCreate={(payload) => onChange({ type: 'create', payload })}
        onUpdate={(payload) => onChange({ type: 'update', payload })}
        onRemove={(payload) => onChange({ type: 'remove', payload })}
      ></Row>
    );
  };

  return (
    <Root>
      <Search>
        <input placeholder={placeholder} value={search} onChange={handleSearch} />
        {search && (
          <button onClick={clearSearch} aria-label="clear">
            <Icons.Close />
          </button>
        )}
      </Search>
      <TableContainer>
        <TableElement>
          <thead>
            <tr>
              {columns.map(([colName, col]) => (
                <th key={colName}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <NewRowForm />

            {/* Table rows */}
            {filteredRows.map((row) => (
              <Row
                key={row.id}
                def={def}
                data={row}
                onCreate={(payload) => onChange({ type: 'create', payload })}
                onRemove={(payload) => onChange({ type: 'remove', payload })}
                onUpdate={(payload) => onChange({ type: 'update', payload })}
                onCellClick={(payload) => onChange({ type: 'cellClick', payload })}
              ></Row>
            ))}
          </tbody>
        </TableElement>
      </TableContainer>
    </Root>
  );
};

export default Table;

/** Styled components */

const Root = styled.div`
  ${({ theme }) => css``}
`;

const TableContainer = styled.div`
  ${({ theme }) => css`
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 3%), 0 25px 50px 0 rgb(0 0 0 / 5%);
    background: ${theme.colors.white};
    min-height: 295px;
  `}
`;

const TableElement = styled.table`
  ${({ theme }) => css`
    width: 100%;
    padding: 0;
    border-collapse: collapse;

    th {
      font-size: 14px;
      text-align: left;
    }

    td,
    th {
      border: none;
      padding: 0;
      border-collapse: collapse;
      overflow: hidden;
      :last-child {
        white-space: nowrap;
      }
    }

    th {
      padding: 12px 12px 2px;
      :first-child,
      :last-child {
        padding-left: 16px;
        padding-right: 16px;
      }
    }

    td {
      padding: 8px;
      border-bottom: 1px solid ${theme.colors.greySoft};
      :first-child,
      :last-child {
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  `}
`;

const Search = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    position: relative;
    display: flex;
    input {
      flex: 1 1;
      font-size: 18px;
      font-weight: lighter;
      padding: 12px 32px 4px 0;
      margin-bottom: 12px;
      border-bottom: 1px solid ${theme.colors.greySoft};
      ::placeholder {
        color: ${theme.colors.greyMedium};
      }
    }
    button {
      color: ${theme.colors.greyMedium};
      position: absolute;
      right: 0;
      top: 12px;
      :hover {
        color: ${theme.colors.greyDark};
      }
    }
  `}
`;
