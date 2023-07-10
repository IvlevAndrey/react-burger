
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import css from './ingredient-card.module.css';
import { IngredientPropTypes } from './../../../../utils/prop-types';
import { PropTypes } from 'prop-types';

IngredientCard.propTypes = {
    ingredient: IngredientPropTypes.isRequired,
    onOpenIngredientModal: PropTypes.func.isRequired
}

export function IngredientCard({ ingredient, onOpenIngredientModal }) {
    return (
        <>
            <section className={`${css.card} ml-3 mt-6 mr-3`} onClick={() => onOpenIngredientModal(ingredient)}>
                <div className={'pl-4 pr-4 pb-1'}>
                    <img alt={ingredient.name} src={ingredient.image} className={css.image} />
                    <Counter count={1} size="default" />
                    <span className={`${css.price} mt-1 text text_type_digits-default`}>
                        {ingredient.price}
                        <span className='pl-2'><CurrencyIcon type="primary" /></span>
                    </span>
                </div>
                <span className={`${css.name} text text_type_main-default`}>{ingredient.name}</span>
            </section>
        </>
    );
}