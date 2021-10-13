import Product from 'modules/Product';
import styled, { css } from 'styled-components';

export interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <Root>
      <Product />
    </Root>
  );
};

export default Home;

/** Styled components */

const Root = styled.div`
  ${({ theme }) => css``}
`;
