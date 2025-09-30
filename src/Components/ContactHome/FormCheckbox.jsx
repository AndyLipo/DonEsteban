import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha"

// const API_KEY = "6LeJQ64rAAAAAOG1wOQPa9fBgfnb0e0cxOJ4qB_M"

const FormCheckbox = () => {
    const captcha = useRef(null)
    const onChange = () => {
        if (captcha.current.getValue()) {
            // console.log("El usuario no es un robot");
            console.clear
        }

    }
    return (
        <div className={`flex items-start space-x-3`}>
            <ReCAPTCHA
                ref={captcha}
                className="mt-1 bg-white"
                sitekey='6Ld2LbArAAAAAAHrZ6U-932opv0vWrQ_Q-vkFnrT'
                onChange={onChange}

            />
        </div>
    )
}

export default FormCheckbox