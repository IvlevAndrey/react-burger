
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerConstructorButton } from './burger-constructor-button/burger-constructor-button';
import { OrderListButton } from './order-list-button/order-list-button';
import { ProfileButton } from './profile-button/profile-button';

import css from './app-header.module.css';

export function AppHeader() {
  return (
    <header className={`${css.header} pt-4 pb-4`}>
      <nav className={css.menu}>
        <BurgerConstructorButton />
        <OrderListButton />
        <span className={css.logo}>
          <Logo />
        </span>
        <ProfileButton />
      </nav>
    </header>
  )
}