
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import css from './modal-header.module.css'
import { PropTypes } from 'prop-types';

ModalHeader.propTypes = {
    children: PropTypes.string,
    onClose: PropTypes.func.isRequired
}

export function ModalHeader({ children, onClose }) {
    return (
        <div className={css.header}>
            <span className={`${css.title} text text_type_main-large`}>{children}</span>
            <CloseIcon type="primary" onClick={onClose} />
        </div>
    )
}

