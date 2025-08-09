import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const FormCheckbox = ({
    id,
    name,
    label,
    required = false,
    className = ""
}) => {
    return (
        <div className={`flex items-start space-x-3 ${className}`}>
            <Checkbox
                id={id}
                name={name}
                className="mt-1 bg-white"
                required={required}
            />
            <Label htmlFor={id} className="text-sm md:text-base">
                {label}
            </Label>
        </div>
    )
}

export default FormCheckbox