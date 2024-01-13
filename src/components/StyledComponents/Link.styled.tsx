import styled from 'styled-components';
import { theme } from '../../styles/Theme.styled';

type LinkPropsType = {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  color?: string;
};

export const Link = styled.a<LinkPropsType>`
  font-family: ${(props) => props.fontFamily || 'Poppins'};
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.fontWeight || '400'};
  line-height: ${(props) => props.lineHeight || '1.3'};
  color: ${(props) => props.color || theme.colors.font};
`;
