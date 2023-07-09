import { PropTypes } from 'prop-types';
import { IngredientCard } from '../ingredient-card/ingredient-card';

import css from './ingredient-card-list.module.css';

import { IngredientTypesRu } from '../../../../utils/consts';
import { IngredientPropTypes } from '../../../../utils/prop-types';

IgredientCardList.propTypes = {
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(IngredientPropTypes).isRequired,
    ref: PropTypes.object.isRequired
}

export function IgredientCardList({ name, ingredients, ref }) {
    return (
        <section className='pt-10'>
            <p className="text text_type_main-medium pb-3" ref={ref}>{IngredientTypesRu(name)}</p>
            <div className={css.content}>
                {ingredients.map(ingredient => IngredientCard({ ingredient }))}
            </div>
        </section>
    );
}