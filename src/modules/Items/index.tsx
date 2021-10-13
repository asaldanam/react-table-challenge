import styled, { css } from 'styled-components';

export interface ItemsProps {}

const Items = (props: ItemsProps) => {
  return <Root>Items Component</Root>;
};

export default Items;

/** Styled components */

const Root = styled.div`
  ${({ theme }) => css``}
`;
