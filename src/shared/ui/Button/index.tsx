import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import common from 'styles/common';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  children?: ReactNode;
}

/** Custom UI button */
const Button = (props: ButtonProps) => {
  const { children, variant = 'primary', ...attributes } = props;
  return (
    <Root variant={variant} {...attributes}>
      {children}
    </Root>
  );
};

export default Button;

/** Styled components */

const Root = styled.button<ButtonProps>`
  ${({ theme, variant }) => css`
    padding: 4px 6px;
    border-radius: 4px;
    ::first-letter {
      text-transform: capitalize;
    }
    ${variant === 'primary' &&
    css`
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    `}
    ${variant === 'secondary' &&
    css`
      background: ${theme.colors.greyLight};
      color: ${theme.colors.primary};
    `}
    ${variant === 'danger' &&
    css`
      background: ${theme.colors.danger};
      color: ${theme.colors.white};
    `}
    :hover {
      opacity: 0.8;
    }
    ${common.outline}
  `}
`;
