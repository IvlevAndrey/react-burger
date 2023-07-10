import { BurgerComponent } from "../burger-component/burger-component";

import css from './burger-component-list.module.css';
import cssScrollbar from '../../common/scrollbar/scrollbar.module.css';
import { PropTypes } from 'prop-types';
import { IngredientPropTypes } from './../../../../utils/prop-types';
import { IngredientTypes } from "../../../../utils/consts";

BurgerComponentList.propTypes = {
    ingredients: PropTypes.arrayOf(IngredientPropTypes).isRequired
}

export function BurgerComponentList({ ingredients }) {
    const bun = ingredients.find(i => i.type === IngredientTypes.Bun);
    const ingredientsWithoutBun = ingredients.filter(i => i.type !== IngredientTypes.Bun);

    return (
        <section className={`pb-10`}>
            <BurgerComponent ingredient={bun} isTop />
            <div className={`${css.scrollable_ingredient_list} ${cssScrollbar.styled_scrollbars} pr-2`}>
                {ingredientsWithoutBun
                    .map(
                        ingredient => (
                            <BurgerComponent key={ingredient._id} ingredient={ingredient} />
                        )
                    )
                }
            </div>
            <BurgerComponent ingredient={bun} isBottom />
        </section>
    )
}