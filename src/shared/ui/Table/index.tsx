import styled, { css } from 'styled-components';
import Row from './Row';
import { TableChangeEvent, TableDef, TableRow } from './types';

export type TableProps = {
  def: TableDef;
  rows: TableRow[];
  onChange: (action: TableChangeEvent) => void;
};

const actions = {
  id: {
    label: '',
  },
};

/** Table UI Component */
const Table = (props: TableProps) => {
  const { def, rows, onChange } = props;
  const columns = Object.entries({ ...def, ...actions });

  /** Allows create a new row */
  const RowCreator = () => (
    <Row
      def={def}
      onRemove={(payload) => onChange({ type: 'remove', payload })}
      onSave={(payload) => onChange({ type: 'save', payload })}
      editMode={true}
      data={{
        ...columns.reduce((allCols, [colName]) => ({ ...allCols, [colName]: '' }), {}),
      }}
    ></Row>
  );

  return (
    <Root>
      <thead>
        <tr>
          {columns.map(([colName, col]) => (
            <th key={colName}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <Row
            def={def}
            key={row.id}
            onRemove={(payload) => onChange({ type: 'remove', payload })}
            onSave={(payload) => onChange({ type: 'save', payload })}
            data={row}
          ></Row>
        ))}
        <RowCreator />
      </tbody>
    </Root>
  );
};

export default Table;

/** Styled components */

const Root = styled.table`
  ${({ theme }) => css``}
`;
