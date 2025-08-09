import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ValidationError } from '@formspree/react'

const FormTextarea = ({
    id,
    name,
    label,
    placeholder,
    errors = null,
    className = ""
}) => {
    return (
        <div className={`space-y-2 ${className}`}>
            <Label htmlFor={id} className="text-base md:text-lg">
                {label}
            </Label>
            <Textarea
                id={id}
                name={name}
                placeholder={placeholder}
                className="min-h-[120px] md:min-h-[150px] bg-white"
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

export default FormTextarea
