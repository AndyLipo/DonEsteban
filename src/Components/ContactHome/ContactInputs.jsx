// import { useRef } from "react";
// import FormSelect from "./FormSelect"
// import FormInput from "./FormInput"
// import FormTextarea from "./FormTextarea"
// import FormCheckbox from "./FormCheckbox"
// import SubmitButton from "./SubmitButton"

// const ContactInputs = ({
//     onSubmit,
//     formRef,
//     state,
//     config
// }) => {
//     const captchaRef = useRef(null);

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();

//     //     if (!captchaRef.current?.isValid()) {
//     //         alert("Por favor completa el captcha");
//     //         return;
//     //     }

//     //     const formData = new FormData(e.target);
//     //     const captchaToken = captchaRef.current.getToken();
//     //     formData.append('g-recaptcha-response', captchaToken);

//     //     try {
//     //         await onSubmit(e, captchaToken);
//     //         captchaRef.current?.reset();
//     //     } catch (error) {
//     //         console.error('Error al enviar:', error);
//     //     }
//     // };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!captchaRef.current?.isValid()) {
//             alert("Por favor completa el captcha");
//             return;
//         }

//         const formData = new FormData(e.target);
//         const captchaToken = captchaRef.current.getToken();

//         // Agregar el campo como Formspree lo espera
//         formData.append('g-recaptcha-response', captchaToken);

//         // Para debug: ver qué datos se envían
//         for (let [key, value] of formData.entries()) {
//             console.log(key + ': ' + value);
//         }

//         try {
//             await onSubmit(e, captchaToken);
//             captchaRef.current?.reset();
//         } catch (error) {
//             console.error('Error al enviar:', error);
//         }
//     };
//     return (
//         <div className="p-6 sm:p-8 md:p-12 lg:p-16 space-y-6">
//             {/* Título con altura reservada */}
//             <h3
//                 className="text-4xl sm:text-5xl md:text-6xl font-medium"
//                 style={{
//                     minHeight: '1.2em',
//                     lineHeight: '1.1'
//                 }}
//             >
//                 <span className="text-gray-800">Solicitar un </span>
//                 <span className="text-[#2469a0]">Presupuesto.</span>
//             </h3>

//             <form
//                 className="space-y-4 md:space-y-6"
//                 onSubmit={handleSubmit}
//                 ref={formRef}
//                 action="https://formspree.io/f/xjkobqka"
//                 method="POST"
//             >
//                 {/* Select con altura reservada */}
//                 <div style={{ minHeight: '90px' }}>
//                     <FormSelect
//                         id="motivo"
//                         name="motivo"
//                         label={config.fields.motivo.label}
//                         placeholder={config.fields.motivo.placeholder}
//                         options={config.fields.motivo.options}
//                     />
//                 </div>

//                 {/* Inputs grid con altura reservada */}
//                 <div
//                     className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
//                     style={{ minHeight: '100px' }}
//                 >
//                     <FormInput
//                         id="name"
//                         name="name"
//                         label={config.fields.name.label}
//                         placeholder={config.fields.name.placeholder}
//                     />

//                     <FormInput
//                         id="email"
//                         name="_replyto"
//                         type="email"
//                         label={config.fields.email.label}
//                         placeholder={config.fields.email.placeholder}
//                         errors={state.errors}
//                     />
//                 </div>

//                 {/* Textarea con altura reservada */}
//                 <div style={{ minHeight: '150px' }}>
//                     <FormTextarea
//                         id="message"
//                         name="message"
//                         label={config.fields.message.label}
//                         placeholder={config.fields.message.placeholder}
//                         errors={state.errors}
//                     />
//                 </div>

//                 {/* Captcha y Botón con altura reservada */}
//                 <div
//                     className="flex flex-col items-center justify-center gap-4"
//                     style={{ minHeight: '150px' }}
//                 >
//                     <div style={{ minHeight: '80px' }}>
//                         <FormCheckbox ref={captchaRef} />
//                     </div>

//                     <div style={{ minHeight: '50px' }}>
//                         <SubmitButton
//                             isSubmitting={state.submitting}
//                         />
//                     </div>
//                 </div>
//             </form>
//         </div>
//     )
// }
// import { useRef } from "react";
import FormSelect from "./FormSelect"
import FormInput from "./FormInput"
import FormTextarea from "./FormTextarea"
import SubmitButton from "./SubmitButton"

const ContactInputs = ({
    formRef,
    state,
    config,
    setSubmitting,
    setSuccess,
    setErrors
}) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setErrors({});

        try {
            console.log('🚀 Enviando formulario...');

            // Crear FormData
            const formData = new FormData(e.target);

            // Debug: mostrar datos
            console.log('📤 Datos a enviar:');
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            // Enviar a Formspree
            const response = await fetch('https://formspree.io/f/xjkobqka', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const result = await response.json();

            if (response.ok) {
                console.log('✅ Formulario enviado exitosamente');
                setSuccess();
            } else {
                console.error('❌ Error de Formspree:', result);
                throw new Error(result.error || 'Error al enviar el formulario');
            }

        } catch (error) {
            console.error('❌ Error al enviar:', error);
            setErrors({ submit: error.message });
            alert('Error: ' + error.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="p-6 sm:p-8 md:p-12 lg:p-16 space-y-6">
            <h3
                className="text-4xl sm:text-5xl md:text-6xl font-medium"
                style={{
                    minHeight: '1.2em',
                    lineHeight: '1.1'
                }}
            >
                <span className="text-gray-800">Solicitar un </span>
                <span className="text-[#2469a0]">Presupuesto.</span>
            </h3>

            <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit}
                ref={formRef}
                method="POST"
            >
                {/* Select */}
                <div style={{ minHeight: '90px' }}>
                    <FormSelect
                        id="motivo"
                        name="motivo"
                        label={config.fields.motivo.label}
                        placeholder={config.fields.motivo.placeholder}
                        options={config.fields.motivo.options}
                        errors={state.errors}
                    />
                </div>

                {/* Inputs grid */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
                    style={{ minHeight: '100px' }}
                >
                    <FormInput
                        id="name"
                        name="name"
                        label={config.fields.name.label}
                        placeholder={config.fields.name.placeholder}
                        errors={state.errors}
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

                {/* Textarea */}
                <div style={{ minHeight: '150px' }}>
                    <FormTextarea
                        id="message"
                        name="message"
                        label={config.fields.message.label}
                        placeholder={config.fields.message.placeholder}
                        errors={state.errors}
                    />
                </div>

                {/* Botón de envío */}
                <div
                    className="flex flex-col items-center justify-center gap-6"
                    style={{ minHeight: '100px' }}
                >
                    <div style={{ minHeight: '50px' }}>
                        <SubmitButton
                            isSubmitting={state.submitting}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactInputs;