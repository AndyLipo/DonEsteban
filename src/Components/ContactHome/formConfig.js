export const motivo = [
    { value: "Desagote de pileta", label: "Desagote de pileta" },
    { value: "Pozo septico", label: "Desagote de pozo" },
    { value: "Desagote empresas", label: "Desagote empresas" },
    { value: "Limpieza Asequias", label: "Limpieza Asequias" },
    { value: "Plomeria", label: "Arreglos de plomeria" },
]

export const formConfig = {
    //Id de Formspree
    id: "xjkobqka",
    fields: {
        motivo: {
            label: "Motivo de Consulta",
            placeholder: "Motivo de consulta",
            options: motivo
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