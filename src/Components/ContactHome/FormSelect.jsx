import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const FormSelect = ({
    id,
    name,
    label,
    placeholder,
    options = [],
    className = ""
}) => {
    return (
        <div className={`space-y-2 ${className}`}>
            <Label htmlFor={id} className="text-base md:text-lg">
                {label}
            </Label>
            <Select name={name}>
                <SelectTrigger className="h-14 md:h-16 bg-white w-full min-w-0">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

export default FormSelect