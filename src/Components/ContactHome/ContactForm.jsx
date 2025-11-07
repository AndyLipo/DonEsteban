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
                contain: 'layout',
                minHeight: 'min-content'
            }}
        >
            <div style={{ minHeight: '180px' }}>
                <BenefitsHeader />
            </div>

            <Card className="rounded-3xl bg-gray-100">
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