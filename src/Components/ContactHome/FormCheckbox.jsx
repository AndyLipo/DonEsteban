// import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import ReCAPTCHA from "react-google-recaptcha"
const API_KEY = "6LeJQ64rAAAAAOG1wOQPa9fBgfnb0e0cxOJ4qB_M"
const FormCheckbox = ({
    id,
    // name,
    label,
    // required = false,
    className = ""
}) => {
    function onChange(value) {
        console.log("Captcha value: ", value);

    }
    return (
        <div className={`flex items-start space-x-3 ${className}`}>
            {/* <Checkbox
                id={id}
                name={name}
                className="mt-1 bg-white"
                required={required}
            /> */}
            <ReCAPTCHA
                className="mt-1 bg-white"
                sitekey={API_KEY}
                onChange={onChange}

            />
            <Label htmlFor={id} className="text-sm md:text-base">
                {label}
            </Label>
        </div>
    )
}

export default FormCheckbox