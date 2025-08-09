import { Button } from "../ui/button"

const ContactBtn = ({ onClick }) => {
    return (
        <Button
            onClick={onClick}
            className={`flex flex-wrap items-center gap-2 md:flex-row bg-black text-white`}>
            Solicite presupuesto
        </Button>
    )
}

export default ContactBtn
