import css from './tab-content.module.css';
import cssScrollbar from '../../../common/scrollbar/scrollbar.module.css';
import { PropTypes } from 'prop-types';
import { IngredientTypes } from "../../../../../utils/consts";
import { IngredientPropTypes } from "../../../../../utils/prop-types";
import { IgredientCardList } from './../../ingredient-card-list/ingredient-card-list';

TabContent.propTypes = {
    bunRef: PropTypes.object,
    mainRef: PropTypes.object,
    sauceRef: PropTypes.object,
    ingredients: PropTypes.arrayOf(IngredientPropTypes).isRequired,
    onOpenIngredientModal: PropTypes.func.isRequired
}

export function TabContent({ bunRef, mainRef, sauceRef, ingredients, onOpenIngredientModal }) {

    const ingredientGroups = getIngredientsGroupByType(ingredients);

    function getRefByIngredientType(type) {
        if (type === IngredientTypes.Bun)
            return bunRef;

        if (type === IngredientTypes.Main)
            return mainRef;

        if (type === IngredientTypes.Sauce)
            return sauceRef;
    }

    return (
        <section className={`${css.tab_content} ${cssScrollbar.styled_scrollbars}`}>
            {ingredientGroups
                .map(
                    ingredientGroup => (

                        <IgredientCardList
                            key={ingredientGroup[0]}
                            name={ingredientGroup[0]}
                            ingredients={ingredientGroup[1]}
                            titleRef={getRefByIngredientType(ingredientGroup[0])}
                            onOpenIngredientModal={onOpenIngredientModal} />
                    )
                )
            }
        </section>
    );
}

function getIngredientsGroupByType(ingredients) {
    let ingredientGroups = new Map()
        .set(IngredientTypes.Bun, [])
        .set(IngredientTypes.Sauce, [])
        .set(IngredientTypes.Main, [])

    ingredients.forEach(element => {
        ingredientGroups.get(element.type).push(element);
    });

    return Array.from(ingredientGroups);
}

