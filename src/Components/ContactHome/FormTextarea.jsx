import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const FormTextarea = ({
    id,
    name,
    label,
    placeholder,
    errors = null,
    className = ""
}) => {
    const fieldErrors = errors && errors[name];

    return (
        <div className={`space-y-2 ${className}`}>
            <Label htmlFor={id} className="text-base md:text-lg">
                {label}
            </Label>
            <Textarea
                id={id}
                name={name}
                placeholder={placeholder}
                className={`min-h-[120px] md:min-h-[150px] bg-white ${fieldErrors ? 'border-red-500' : ''}`}
            />
            {fieldErrors && (
                <p className="text-red-500 text-sm mt-1">
                    {Array.isArray(fieldErrors) ? fieldErrors[0] : fieldErrors}
                </p>
            )}
        </div>
    )
}

export default FormTextarea