
import { PropTypes } from 'prop-types';

import css from './ingredient-property.module.css';

IngredientProperty.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    measure: PropTypes.string.isRequired,
    isLast: PropTypes.bool,
}

export function IngredientProperty({ name, value, measure, isLast }) {
    return (
        <div className={`${css.property} ${isLast ? '' : 'mr-5'}`}>
            <span className={`text text_type_main-default text_color_inactive`}>{`${name}, ${measure}`}</span>
            <span className={`text text_type_digits-default text_color_inactive`}>{value}</span>
        </div>
    )
}