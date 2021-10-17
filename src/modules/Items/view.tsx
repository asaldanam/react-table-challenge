import styled, { css } from 'styled-components';
import ItemsDetail from './components/Detail';
import ItemsTable from './components/Table';
import ItemsProvider from './context/provider';

/** Items view */
const View = () => {
  return (
    <Root>
      <ItemsTable />
      <ItemsDetail />
    </Root>
  );
};

/** Styled components */

const Root = styled.div`
  ${({ theme }) => css`
    max-width: 960px;
    margin: 0 auto;

    display: flex;
    & > *:nth-child(1) {
      flex: 1 1;
    }
  `}
`;

const ItemsWrapper = () => (
  <ItemsProvider>
    <View />
  </ItemsProvider>
);

export default ItemsWrapper;
