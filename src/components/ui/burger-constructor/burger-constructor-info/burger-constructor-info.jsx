import css from './burger-constructor-info.module.css';
import { PropTypes } from 'prop-types';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { OrderDetails } from '../order-details/order-details';
import { Modal } from './../../common/modal/modal';
import { useState } from 'react';

BurgerConstructorInfo.propTypes = {
    price: PropTypes.number
}

export function BurgerConstructorInfo({ price = 0 }) {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <section className={`${css.info} ml-5 pl-4 pr-4 pb-13`}>
                <div className={`${css.price} pr-10`}>
                    <p className="text text_type_digits-medium pr-2">{price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="button" type="primary" size="medium" onClick={() => setModalOpen(true)}>
                    Оформить заказ
                </Button>
            </section>

            {modalOpen &&
                <Modal onClose={() => setModalOpen(false)}>
                    <OrderDetails orderId={34536} />
                </Modal>
            }
        </>
    )
}