import styled from 'styled-components';

import { MenuList, MenuPropsType } from './MenuList';

export const Menu = (props: MenuPropsType) => {
  return (
    <StyledMenu>
      <MenuList
        items={props.items}
        activeTabMenu={props.activeTabMenu}
        changeActiveTabMenu={props.changeActiveTabMenu}
      />
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
