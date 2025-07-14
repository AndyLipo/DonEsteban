import LogoMobile from "../../assets/logo-ppal.png"
import LogoPpal from "../../assets/logoGr.png"
import LogoGr from "../../assets/logoGr.png"
const LogoBtn = () => {
    return (
        <>
            <picture className="">
                <source srcSet={LogoMobile} alt="Logo-mobile-img" media='(min-width: 640px)' />
                <source srcSet={LogoPpal} alt="Logo-img" />
                <img src={LogoGr} alt="Logo-img" className="sm:h-22 sm:w-28 size-12 py-2" />
            </picture>
        </>
    )
}

export default LogoBtn