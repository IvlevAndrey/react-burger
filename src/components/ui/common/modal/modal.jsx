import { ModalHeader } from './header/modal-header';
import { PropTypes } from 'prop-types';
import { createPortal } from 'react-dom';
import { ModalOverlay } from './overlay/modal-overlay';
import { useEffect } from 'react';

import css from './modal.module.css';

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    header: PropTypes.string,
    onClose: PropTypes.func.isRequired
}

export function Modal({ children, header, onClose }) {
    const modalRoot = document.getElementById("react-modals");

    useEffect(() => {
        const onKeyDown = (e) => {
            console.log(e.key)
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