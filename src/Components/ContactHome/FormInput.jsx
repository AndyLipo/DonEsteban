import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const FormInput = ({
    id,
    name,
    label,
    placeholder,
    type = "text",
    errors = null,
    className = ""
}) => {
    const fieldErrors = errors && errors[name];

    return (
        <div className={`space-y-2 ${className}`}>
            <Label htmlFor={id} className="text-base md:text-lg">
                {label}
            </Label>
            <Input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                className={`h-10 md:h-10 bg-white ${fieldErrors ? 'border-red-500' : ''}`}
            />
            {fieldErrors && (
                <p className="text-red-500 text-sm mt-1">
                    {Array.isArray(fieldErrors) ? fieldErrors[0] : fieldErrors}
                </p>
            )}
        </div>
    )
}

export default FormInput