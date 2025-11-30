import { Card, CardContent } from "@/components/ui/card"
import { useContactForm } from "./useContactForm"
import { formConfig } from "./formConfig"
import BenefitsHeader from "./BenefitsHeader"
import ContactInputs from "./ContactInputs"
import FormImage from "./FormImage"
import ModalSuccess from './ModalSucces'

const ContactForm = () => {
    const {
        state,
        showModal,
        formRef,
        resetForm,
        closeModal,
        setSubmitting,
        setSuccess,
        setErrors
    } = useContactForm()

    return (
        <section
            id="contact-form"
            className="mx-auto px-4 sm:px-6 py-12 md:py-20 bg-white text-black max-w-7xl"
            aria-labelledby="contact-form-title"
            style={{
                // ⚡ CRÍTICO: Reserva espacio fijo para evitar CLS
                minHeight: '900px', // Ajusta según altura real de tu formulario
                contain: 'layout style paint',
            }}
        >
            {/* ⚡ Altura fija para el header */}
            <div style={{ minHeight: '180px', contain: 'layout' }}>
                <BenefitsHeader />
            </div>

            {/* ⚡ Altura fija para el card */}
            <Card
                className="rounded-3xl bg-gray-100"
                style={{
                    minHeight: '650px', // Ajusta según altura real
                    contain: 'layout style'
                }}
            >
                <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <ContactInputs
                            formRef={formRef}
                            state={state}
                            config={formConfig}
                            setSubmitting={setSubmitting}
                            setSuccess={setSuccess}
                            setErrors={setErrors}
                        />
                        <FormImage />
                    </div>
                </CardContent>
            </Card>

            <ModalSuccess
                isOpen={showModal}
                onClose={closeModal}
                title={formConfig.modal.title}
                message={formConfig.modal.message}
                redirectTo={formConfig.modal.redirectTo}
                autoRedirectTime={formConfig.modal.autoRedirectTime}
                buttonText={formConfig.modal.buttonText}
                onSuccess={resetForm}
            />
        </section>
    )
}

export default ContactForm;