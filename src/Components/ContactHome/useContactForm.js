import { useState, useRef } from "react";

export const useContactForm = () => {
    const [state, setState] = useState({
        submitting: false,
        succeeded: false,
        errors: {},
    });

    const [showModal, setShowModal] = useState(false);
    const formRef = useRef(null);

    const resetForm = () => {
        if (formRef.current) formRef.current.reset();
        setState({
            submitting: false,
            succeeded: false,
            errors: {},
        });
    };

    const closeModal = () => {
        setShowModal(false);
        resetForm();
    };

    const setSubmitting = (submitting) =>
        setState((prev) => ({ ...prev, submitting }));

    const setSuccess = () => {
        setState((prev) => ({ ...prev, succeeded: true, submitting: false }));
        setShowModal(true);
    };

    const setErrors = (errors) =>
        setState((prev) => ({ ...prev, errors }));

    return {
        state,
        showModal,
        formRef,
        resetForm,
        closeModal,
        setSubmitting,
        setSuccess,
        setErrors,
    };
};
