import css from './burger-ingredients.module.css';
import { TabCategories } from './tab-categories/tab-categories';
import { PropTypes } from 'prop-types';
import { IngredientPropTypes } from './../../../utils/prop-types';
import { Modal } from './../common/modal/modal';
import { IngredientDetails } from './ingredient-details/ingredient-details';
import { useModal } from '../../../hooks/useModal';

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(IngredientPropTypes).isRequired
}

export function BurgerIngredients({ ingredients }) {
    const { isModalOpen, openModal, closeModal, content } = useModal();

    return (
        <>
            <section className={`${css.burger_ingredients} mr-5 ml-5`}>
                <h1 className="text text_type_main-large mb-5 mt-10">Соберите бургер</h1>
                <TabCategories ingredients={ingredients} onOpenIngredientModal={(i) => openModal(i)} />
            </section>

            {isModalOpen &&
                <Modal header="Детали ингредиента" onClose={() => closeModal()}>
                    <IngredientDetails ingredient={content} />
                </Modal>
            }
        </>
    )
}