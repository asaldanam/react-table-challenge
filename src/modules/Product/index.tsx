import styled, { css } from 'styled-components';

export interface ProductProps {}

const Product = ({}: ProductProps) => {
  return <Root>Product Component</Root>;
};

export default Product;

/** Styled components */

const Root = styled.div`
  ${({ theme }) => css``}
`;
