import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import css from './burger-component.module.css'
import { PropTypes } from 'prop-types';
import { IngredientPropTypes } from './../../../../utils/prop-types';

BurgerComponent.propTypes = {
    ingredient: IngredientPropTypes.isRequired,
    isTop: PropTypes.bool,
    isBottom: PropTypes.bool
}

export function BurgerComponent({ ingredient, isTop, isBottom }) {
    const isLocked = isTop || isBottom;

    let type = undefined;
    if (isTop) type = 'top';
    if (isBottom) type = 'bottom';

    let name = ingredient.name;
    if (isTop) name += ' (верх)';
    if (isBottom) name += ' (низ)';

    return (
        <section className={`${css.component} pt-4 pb-4 ${isLocked ? 'mr-4' : ''}`}>
            <span className={css.icon_container}>
                {!isLocked && <DragIcon type='primary' />}
            </span>
            <ConstructorElement
                text={name}
                thumbnail={ingredient.image}
                price={ingredient.price}
                type={type}
                isLocked={isLocked}
            />
        </section>
    )
}