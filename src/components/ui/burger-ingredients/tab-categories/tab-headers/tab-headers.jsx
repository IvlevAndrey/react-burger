import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';

import css from './tab-headers.module.css'
import { IngredientTypes } from '../../../../../utils/consts';
import { PropTypes } from 'prop-types';

TabHeaders.propTypes = {
    bunRef: PropTypes.object,
    mainRef: PropTypes.object,
    sauceRef: PropTypes.object,
}

export function TabHeaders({ bunRef, mainRef, sauceRef }) {
    const [current, setCurrent] = useState(IngredientTypes.Bun);

    function onClickTab(value, ref) {
        setCurrent(value);
        if (ref)
            ref.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <nav className={css.header}>
            <Tab value="bun" active={current === IngredientTypes.Bun} onClick={value => onClickTab(value, bunRef)}>
                Булочки
            </Tab>
            <Tab value="sauce" active={current === IngredientTypes.Sauce} onClick={value => onClickTab(value, sauceRef)}>
                Соус
            </Tab>
            <Tab value="main" active={current === IngredientTypes.Main} onClick={value => onClickTab(value, mainRef)}>
                Начинка
            </Tab>
        </nav>
    );
}