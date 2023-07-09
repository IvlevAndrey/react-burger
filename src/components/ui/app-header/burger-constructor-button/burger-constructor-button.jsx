import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import css from './burger-constructor-button.module.css';

export function BurgerConstructorButton() {
  return (
    <a className={`${css.button} text text_type_main-default pt-4 pr-5 pb-4 pl-5`}>
      <BurgerIcon type='primary' />
      Конструктор
    </a>
  );
}
