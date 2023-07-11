import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import css from './profile-button.module.css';

export function ProfileButton() {
    return (
        <a className={`${css.button} text text_type_main-default pt-4 pr-5 pb-4 pl-5`}>
            <ProfileIcon type="secondary" />
            Личный кабинет
        </a>
    );
}