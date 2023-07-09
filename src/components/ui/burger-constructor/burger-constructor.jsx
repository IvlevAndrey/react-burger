import { BurgerComponentList } from "./burger-component-list/burger-component-list";
import { BurgerConstructorInfo } from "./burger-constructor-info/burger-constructor-info";

import css from './burger-constructor.module.css'
import { PropTypes } from 'prop-types';
import { IngredientPropTypes } from './../../../utils/prop-types';

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(IngredientPropTypes).isRequired
}

export function BurgerConstructor({ ingredients }) {
    let price = ingredients.reduce((prev, current) => prev + current.price, 0);

    return (
        <section className={`${css.burger_constructor} ml-5 pt-25 pl-4 pb-13`}>
            <BurgerComponentList ingredients={ingredients} />
            <BurgerConstructorInfo price={price} />
        </section>
    )
}