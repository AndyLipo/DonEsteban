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
            className={`rounded-full flex sm:flex sm:justify-center py-5 w-56 h-12 
              bg-gray-900 hover:bg-gray-800 active:bg-gray-800 
              group disabled:opacity-50 ${className}`}
        >
            <span className="font-semibold text-white">
                {isSubmitting ? loadingText : defaultText}
            </span>
            <ArrowRight className="ml-2 h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
        </Button>
    )
}

export default SubmitButton     