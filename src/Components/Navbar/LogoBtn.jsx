import LogoMobile from "../../assets/logo-ppal2.webp"
import LogoGr from "../../assets/logoGr.webp"
const LogoBtn = () => {
    return (
        <>
            <picture className="">
                <source srcSet={LogoMobile} alt="Logo-mobile-img" media='(min-width: 640px)' />
                <source srcSet={LogoGr} alt="Logo-img" />
                <img src={LogoGr} alt="Logo-img" className="sm:h-26 sm:w-33 size-12" loading="lazy" />
            </picture>
        </>
    )
}

export default LogoBtn