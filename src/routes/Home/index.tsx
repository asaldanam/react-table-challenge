import Items from 'modules/Items';
import styled, { css } from 'styled-components';

export interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <Root>
      <Items />
    </Root>
  );
};

export default Home;

/** Styled components */

const Root = styled.div`
  ${({ theme }) => css``}
`;
