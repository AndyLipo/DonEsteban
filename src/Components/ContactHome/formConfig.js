export const poolTypes = [
    { value: "indoor", label: "Desagote de pileta" },
    { value: "outdoor", label: "Desagote de pozo" },
    { value: "infinity", label: "Desagote industrial" },
    { value: "lap", label: "Alquiler de Camiones" },
]

export const formConfig = {
    //Id de Formspree
    id: "xjkobqka",
    fields: {
        motivo: {
            label: "Motivo de Consulta",
            placeholder: "Motivo de consulta",
            options: poolTypes
        },
        name: {
            label: "Nombre",
            placeholder: "Nombre"
        },
        email: {
            label: "Email",
            placeholder: "ejemplo@gmail.com"
        },
        message: {
            label: "Descripción",
            placeholder: "Dejá tu mensaje"
        }
    },
    modal: {
        title: "¡Consulta enviada!",
        message: "Gracias por su consulta, nos pondremos en contacto a la brevedad.",
        redirectTo: "/",
        autoRedirectTime: 4000,
        buttonText: "Ir al inicio"
    }
}