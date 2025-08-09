import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const SubmitButton = ({
    isSubmitting = false,
    loadingText = "Enviando...",
    defaultText = "Enviar",
    className = ""
}) => {
    return (
        <Button
            type="submit"
            disabled={isSubmitting}
            className={`rounded-full py-5 px-8 w-26 h-12 ml-10 md:-ml-1 bg-gray-900 hover:bg-gray-800 group disabled:opacity-50 ${className}`}
        >
            <span className="font-semibold text-white">
                {isSubmitting ? loadingText : defaultText}
            </span>
            <ArrowRight className="ml-2 h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
        </Button>
    )
}

export default SubmitButton