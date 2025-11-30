import LogoLarge from "../../assets/logo-ppal2.webp";
import LogoSmall from "../../assets/logoGr.webp";

const LogoBtn = () => {
    return (
        <picture>
            {/* 🖥 Logo para pantallas grandes */}
            <source
                srcSet={LogoLarge}
                media="(min-width: 640px)"
                width="132"
                height="80"
            />

            {/* 📱 Logo para pantallas chicas (y fallback) */}
            <img
                src={LogoSmall}
                srcSet={`${LogoSmall} 1x, ${LogoLarge} 2x`}
                alt="Don Esteban Atmosféricos"
                width="48"   // tamaño real del logo chico
                height="48"
                className="h-12 sm:h-16 w-auto mx-auto"
                decoding="async" // mejor que lazy en logo
            />
        </picture>
    );
};

export default LogoBtn;
