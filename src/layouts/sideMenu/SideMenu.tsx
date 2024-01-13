import { useState } from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/Logo';
import { Menu } from './menu/Menu';

const menuItems = [
  {
    iconId: 'home',
    title: 'Dashboard',
  },
  {
    iconId: 'market',
    title: 'Market',
  },
  {
    iconId: 'message',
    title: 'Messages',
  },
  {
    iconId: 'wallet',
    title: 'My Wallets',
  },
  {
    iconId: 'activity',
    title: 'Activity',
  },
];

export const SideMenu = () => {
  const [activeTabMenu, setActiveTabMenu] = useState<string>('home');

  return (
    <StyledSideMenu>
      <Logo iconId="logo" title="DiveSea" />
      <Menu
        items={menuItems}
        activeTabMenu={activeTabMenu}
        changeActiveTabMenu={(tab: string) => setActiveTabMenu(tab)}
      />
    </StyledSideMenu>
  );
};

const StyledSideMenu = styled.header`
  display: flex;
  flex-direction: column;
  position: absolute;
  min-width: 250px;
  height: 100vh;
  top: 0;
  left: 0;
  padding: 40px 24px;
  background-color: #f9f9f9;
`;
