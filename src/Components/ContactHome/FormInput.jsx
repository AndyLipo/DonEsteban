import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ValidationError } from '@formspree/react'

const FormInput = ({
    id,
    name,
    label,
    placeholder,
    type = "text",
    errors = null,
    className = ""
}) => {
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
                className="h-10 md:h-10 bg-white"
            />
            {errors && (
                <ValidationError
                    prefix={label}
                    field={name}
                    errors={errors}
                />
            )}
        </div>
    )
}

export default FormInput