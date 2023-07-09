
import { IngredientPropTypes } from './../../../../utils/prop-types';

import css from './ingredient-details.module.css'
import { IngredientProperty } from './ingredient-property/ingredient-property';

IngredientDetails.propTypes = {
    ingredient: IngredientPropTypes.isRequired
}

export function IngredientDetails({ ingredient }) {
    return (
        <div className={`${css.content}`}>
            <img alt={ingredient.name} src={ingredient.image} className={css.image} />
            <span className='pt-4 pb-8 text text_type_main-medium'>{ingredient.name}</span>
            <div className={`${css.properties} pb-5`}>
                <IngredientProperty name="Калории" value={ingredient.calories} measure="ккал" />
                <IngredientProperty name="Белки" value={ingredient.proteins} measure="г" />
                <IngredientProperty name="Жиры" value={ingredient.fat} measure="г" />
                <IngredientProperty name="Углеводы" value={ingredient.carbohydrates} measure="г" isLast />
            </div>
        </div>
    )
}