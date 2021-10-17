import styled, { css } from 'styled-components';

const Panel = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    min-height: 50px;
    padding: 0 16px;
    border-bottom: 1px solid ${theme.colors.greySoft};
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      width: 20px;
      height: 20px;
      svg {
        height: 100%;
        width: 100%;
      }
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 16px;
    p {
      margin: 0 0 4px;
    }
  `}
`;

export default Panel;
