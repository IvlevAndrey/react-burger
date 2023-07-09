import css from './burger-ingredients.module.css';
import { TabCategories } from './tab-categories/tab-categories';
import { PropTypes } from 'prop-types';
import { IngredientPropTypes } from './../../../utils/prop-types';

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(IngredientPropTypes).isRequired
}

export function BurgerIngredients({ ingredients }) {
    return (
        <section className={`${css.burger_ingredients} mr-5 ml-5`}>
            <h1 className="text text_type_main-large mb-5 mt-10">Соберите бургер</h1>
            <TabCategories ingredients={ingredients} />
        </section>
    )
}