
import { PropTypes } from 'prop-types';

import css from './modal-overlay.module.css';

ModalOverlay.propTypes = {
    children: PropTypes.element.isRequired,
    onClose: PropTypes.func.isRequired
}

export function ModalOverlay({ children, onClose }) {
    return (
        <div className={css.overlay} onClick={onClose}>
            {children}
        </div>
    )
}