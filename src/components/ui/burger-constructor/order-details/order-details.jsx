
import css from './order-details.module.css'
import { PropTypes } from 'prop-types';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components'

OrderDetails.propTypes = {
    orderId: PropTypes.number.isRequired
}

export function OrderDetails({ orderId }) {
    return (
        <div className={`${css.content} pt-10 pb-10`}>
            <span className='text text_type_digits-large'>{orderId}</span>
            <span className='text text_type_main-medium pt-8'>идентификатор заказа</span>
            <span className={`${css.check_mark} mt-15 mb-15 p-10`}>
                <CheckMarkIcon type="primary" />
            </span>
            <span className='text text_type_main-default pb-2'>Ваш заказ начали готовить</span>
            <span className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</span>
        </div>
    )
}