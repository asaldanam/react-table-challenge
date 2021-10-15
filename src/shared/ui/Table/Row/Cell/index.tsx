import { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export interface CellProps extends InputHTMLAttributes<HTMLInputElement> {
  editMode?: boolean;
}

const Cell = ({ editMode, ...inputProps }: CellProps) => {
  return <Root>{editMode ? <input {...inputProps} /> : inputProps.value}</Root>;
};

export default Cell;

/** Styled components */

const Root = styled.td`
  ${({ theme }) => css``}
`;
