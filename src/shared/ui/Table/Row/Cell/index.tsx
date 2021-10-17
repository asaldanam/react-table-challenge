import { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import common from 'styles/common';

export interface CellProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onClick'> {
  onClick: (() => void) | null;
}

const Cell = ({ onClick, ...inputProps }: CellProps) => {
  const { value, readOnly } = inputProps;
  const input = !readOnly && <input role="textbox" {...inputProps} />;
  const button = onClick && <button onClick={onClick}>{value}</button>;

  return <Root>{input || button || <div>{value}</div>}</Root>;
};

export default Cell;

/** Styled components */

const Root = styled.td`
  ${({ theme }) => css`
    text-align: left;
    height: 20px;

    input,
    div,
    button {
      padding: 6px;
      min-height: 28px;
      border-radius: 4px;
      font-size: 14px;
    }

    input {
      ${common.outline}
    }

    button {
      color: ${theme.colors.primary};
      text-decoration: underline;
      width: 100%;
      text-align: left;
    }

    div {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 200px;
    }
  `}
`;
