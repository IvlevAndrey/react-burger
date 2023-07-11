import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import css from './order-list-button.module.css';

export function OrderListButton() {
    return (
        <a className={`${css.button} text text_type_main-default pt-4 pr-5 pb-4 pl-5`}>
            <ListIcon type='secondary' />
            Лента заказов
        </a>
    );
}