import { BurgerIngredients } from '../../ui/burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../../ui/burger-constructor/burger-constructor';
import { PropTypes } from 'prop-types';
import { IngredientPropTypes } from './../../../utils/prop-types';

BurgerConstructorPage.propTypes = {
  ingredients: PropTypes.arrayOf(IngredientPropTypes).isRequired
}

export function BurgerConstructorPage({ ingredients }) {
  return (
    <>
      <BurgerIngredients ingredients={ingredients} />
      <BurgerConstructor ingredients={ingredients} />
    </>
  );
}

