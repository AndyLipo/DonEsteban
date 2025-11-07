import { Label } from "@/components/ui/label"

const FormSelect = ({
    id,
    name,
    label,
    placeholder,
    options,
    errors = null,
    className = ""
}) => {
    const fieldErrors = errors && errors[name];

    return (
        <div className={`space-y-2 ${className}`}>
            <Label htmlFor={id} className="text-base md:text-lg">
                {label}
            </Label>
            <select
                id={id}
                name={name}
                className={`w-full h-10 px-3 bg-white border rounded-md focus-visible:ring-ring/50 focus-visible:ring-[3px] focus:border-transparent ${fieldErrors ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:border-transparent`}
                defaultValue=""
            >
                <option value="" disabled>{placeholder}</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {fieldErrors && (
                <p className="text-red-500 text-sm mt-1">
                    {Array.isArray(fieldErrors) ? fieldErrors[0] : fieldErrors}
                </p>
            )}
        </div>
    )
}

export default FormSelect