import styled from 'styled-components';
import { theme } from '../styles/Theme.styled';
import { Icon } from './Icon';
import { Link } from './StyledComponents/Link.styled';
import { MenuItemPropsType } from './StyledComponents/types/MenuItemPropsType';

export const Logo = ({ iconId, title }: MenuItemPropsType) => {
  return (
    <StyledLogo>
      <Link fontSize="22px" fontWeight="600" href="#">
        <Icon iconId={iconId} />
        {title}
      </Link>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  padding-left: 9px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${theme.colors.border};
  margin-bottom: 40px;
  ${Link} {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
