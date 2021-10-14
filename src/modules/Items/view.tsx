import Table from 'shared/ui/Table';
import styled, { css } from 'styled-components';
import ItemsProvider from './context/provider';

/** Items view */
function View() {
  return (
    <Root>
      <Table
        onChange={(event) => {
          console.log(event);
        }}
        def={{
          name: {
            label: 'Name',
          },
          description: {
            label: 'Description',
          },
          price: {
            label: 'Price',
          },
        }}
        rows={[]}
      ></Table>
    </Root>
  );
}

/** Styled components */

const Root = styled.div`
  ${({ theme }) => css``}
`;

export default function ItemsWrapper() {
  return (
    <ItemsProvider>
      <View />
    </ItemsProvider>
  );
}
