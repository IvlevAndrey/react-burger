import { ModalHeader } from './header/modal-header';
import { PropTypes } from 'prop-types';
import { createPortal } from 'react-dom';
import { ModalOverlay } from './overlay/modal-overlay';
import { useEffect } from 'react';

import css from './modal.module.css';

const modalRoot = document.getElementById("react-modals");

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    header: PropTypes.string,
    onClose: PropTypes.func.isRequired
}

export function Modal({ children, header, onClose }) {

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        }

        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
    }, [])

    return createPortal(
        (
            <ModalOverlay onClose={onClose}>
                <section className={`${css.modal} p-10`} onClick={(e) => e.stopPropagation()}>
                    <ModalHeader onClose={onClose}>{header}</ModalHeader>
                    <div className={css.body}>
                        {children}
                    </div>
                </section>
            </ModalOverlay>
        ),
        modalRoot)
}