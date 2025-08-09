import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useNavigate } from 'react-router-dom'

const AboutCTA = ({
    text = "Contacto",
    route = "/contacto",
    variant = "outline",
    className = ""
}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(route)
    }

    return (
        <div className={className}>
            <Button
                variant={variant}
                className="rounded-full py-3 px-6 md:py-6 md:px-8 bg-gray-100 hover:bg-gray-200 group w-fit transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2469a0] focus:ring-offset-2 mb-20"
                onClick={handleClick}
                aria-label={`Ir a ${text.toLowerCase()}`}
            >
                <span className="font-semibold text-lg">{text}</span>
                <ArrowRight
                    className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                />
            </Button>
        </div>
    )
}

export default AboutCTA