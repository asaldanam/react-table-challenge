import { css } from 'styled-components';
import theme from './theme';

const common = {
  outline: css`
    outline: none;
    box-shadow: 0px 0px 0px 0px transparent;
    transition: box-shadow 0.2s linear;
    :focus {
      box-shadow: 0px 0px 0px 3px ${theme.colors.primary}99;
    }
  `,
};

export default common;
