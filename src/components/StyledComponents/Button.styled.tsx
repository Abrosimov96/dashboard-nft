import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme.styled';

type ButtonPropsType = {
  secondary?: boolean;
  outlined?: boolean;
  width?: string;
  textAlign?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  color?: string;
};

export const Button = styled.button<ButtonPropsType>`
  font-family: ${(props) => props.fontFamily || 'Manrope'};
  font-size: ${(props) => props.fontSize || '14px'};
  font-weight: ${(props) => props.fontWeight || '500'};
  line-height: ${(props) => props.lineHeight || '1.5'};
  color: ${(props) => props.color || theme.colors.primaryButton};

  width: ${(props) => props.width || ''};
  text-align: ${(props) => props.textAlign || 'center'};

  ${(props) =>
    props.secondary &&
    css<ButtonPropsType>`
      color: ${theme.colors.primary};
      background-color: ${theme.colors.font};
      border-radius: 12px;
    `}
  ${(props) => props.outlined && css<ButtonPropsType>``}
`;
