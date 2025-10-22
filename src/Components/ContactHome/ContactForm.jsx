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
        handleSubmit,
        showModal,
        formRef,
        resetForm,
        closeModal
    } = useContactForm(formConfig.id)

    return (
        <div className="container mx-auto px-4 sm:px-6 py-12 max-w-7xl min-h-[650px]"
            id="contact-form">
            <BenefitsHeader />

            <Card className="rounded-3xl bg-gray-100 overflow-hidden">
                <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <ContactInputs
                            onSubmit={handleSubmit}
                            formRef={formRef}
                            state={state}
                            config={formConfig}
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
        </div>
    )
}

export default ContactForm