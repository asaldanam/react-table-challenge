import styled, { css } from 'styled-components';
import ItemsProvider from './context/provider';

/** Items view */
function ItemsView() {
  return <Root>Items Component</Root>;
}

/** Items wrapper with provider */
export default function ItemsWrapper() {
  return (
    <ItemsProvider>
      <ItemsView />
    </ItemsProvider>
  );
}

/** Styled components */

const Root = styled.div`
  ${({ theme }) => css``}
`;
