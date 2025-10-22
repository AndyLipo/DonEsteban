import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const FormCheckbox = forwardRef((props, ref) => {
    const captchaRef = useRef(null);
    const [captchaToken, setCaptchaToken] = useState(null);

    const onChange = (token) => {
        console.log("Captcha completado");
        setCaptchaToken(token);
    };

    const onErrored = () => {
        console.error("Error en el captcha");
    };

    const onExpired = () => {
        console.log("Captcha expirado");
        setCaptchaToken(null);
    };

    // Exponer métodos para que el componente padre pueda acceder
    useImperativeHandle(ref, () => ({
        getToken: () => captchaToken,
        reset: () => {
            captchaRef.current?.reset();
            setCaptchaToken(null);
        },
        isValid: () => !!captchaToken
    }));

    return (
        <div className="flex items-center justify-center">
            <ReCAPTCHA
                ref={captchaRef}
                sitekey='6LeJQ64rAAAAAOG1wOQPa9fBgfnb0e0cxOJ4qB_M'
                onChange={onChange}
                onErrored={onErrored}
                onExpired={onExpired}
            />
        </div>
    );
});

FormCheckbox.displayName = 'FormCheckbox';

export default FormCheckbox;