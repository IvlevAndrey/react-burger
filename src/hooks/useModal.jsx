import { useState, useCallback } from "react";

export const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [content, setContent] = useState(null);


    const openModal = useCallback((content) => {
        setIsModalOpen(true);
        if (content)
            setContent(content);
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        setContent(null);
    }, []);

    return {
        isModalOpen,
        openModal,
        closeModal,
        content
    };
};
