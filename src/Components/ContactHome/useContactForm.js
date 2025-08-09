import { useForm } from '@formspree/react'
import { useEffect, useState, useRef } from 'react'

export const useContactForm = (formId) => {
    const [state, handleSubmit] = useForm(formId)
    const [showModal, setShowModal] = useState(false)
    const formRef = useRef(null)

    useEffect(() => {
        if (state.succeeded) {
            setShowModal(true)
        }
    }, [state.succeeded])

    const resetForm = () => {
        if (formRef.current) {
            formRef.current.reset()
        }
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return {
        state,
        handleSubmit,
        showModal,
        formRef,
        resetForm,
        closeModal
    }
}