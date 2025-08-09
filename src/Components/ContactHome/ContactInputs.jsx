import FormSelect from "./FormSelect"
import FormInput from "./FormInput"
import FormTextarea from "./FormTextarea"
import FormCheckbox from "./FormCheckbox"
import SubmitButton from "./SubmitButton"

const ContactInputs = ({
    onSubmit,
    formRef,
    state,
    config
}) => {
    return (
        <div className="p-6 sm:p-8 md:p-12 lg:p-16 space-y-6">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-medium">
                <span className="text-gray-800">Solicitar un </span>
                <span className="text-[#2469a0]">Presupuesto.</span>
            </h3>

            <form
                className="space-y-4 md:space-y-6"
                onSubmit={onSubmit}
                ref={formRef}
            >
                <FormSelect
                    id="pool-type"
                    name="motivo"
                    label={config.fields.motivo.label}
                    placeholder={config.fields.motivo.placeholder}
                    options={config.fields.motivo.options}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <FormInput
                        id="name"
                        name="name"
                        label={config.fields.name.label}
                        placeholder={config.fields.name.placeholder}
                    />

                    <FormInput
                        id="email"
                        name="email"
                        type="email"
                        label={config.fields.email.label}
                        placeholder={config.fields.email.placeholder}
                        errors={state.errors}
                    />
                </div>

                <FormTextarea
                    id="message"
                    name="message"
                    label={config.fields.message.label}
                    placeholder={config.fields.message.placeholder}
                    errors={state.errors}
                />

                <FormCheckbox
                    id="terms"
                    name="terms"
                    label="Estoy de acuerdo con los términos y condiciones"
                    required
                />

                <SubmitButton
                    isSubmitting={state.submitting}
                />
            </form>
        </div>
    )
}

export default ContactInputs