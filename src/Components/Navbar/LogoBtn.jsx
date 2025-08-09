import LogoMobile from "../../assets/logo-ppal.webp"
import LogoGr from "../../assets/logoGr.webp"
const LogoBtn = () => {
    return (
        <>
            <picture className="">
                <source srcSet={LogoMobile} alt="Logo-mobile-img" media='(min-width: 640px)' />
                <source srcSet={LogoGr} alt="Logo-img" />
                <img src={LogoGr} alt="Logo-img" className="sm:h-22 sm:w-28 size-12 py-2" loading="lazy" />
            </picture>
        </>
    )
}

export default LogoBtn