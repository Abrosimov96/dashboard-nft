import styled from 'styled-components';
import { Icon } from '../../../components/Icon';
import { Button } from '../../../components/StyledComponents/Button.styled';
import { MenuItemPropsType } from '../../../components/StyledComponents/types/MenuItemPropsType';

export type MenuPropsType = {
  items: Array<MenuItemPropsType>;
  activeTabMenu: string;
  changeActiveTabMenu: (tab: string) => void;
};

export const MenuList = (props: MenuPropsType) => {
  return (
    <StyledMenuList>
      {props.items.map((item) => (
        <MenuListItem key={item.iconId}>
          <Button
            width="100%"
            textAlign="start"
            secondary={item.iconId === props.activeTabMenu}
            onClick={() => {
              props.changeActiveTabMenu(item.iconId);
            }}>
            <Icon
              iconId={item.iconId}
              width="20"
              height="20"
              viewBox="0 0 20 20"
            />
            {item.title}
          </Button>
        </MenuListItem>
      ))}
    </StyledMenuList>
  );
};

const StyledMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MenuListItem = styled.li`
  ${Button} {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    span {
      align-self: flex-end;
    }
  }
`;
