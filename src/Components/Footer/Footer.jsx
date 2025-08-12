import React from "react"
import FooterHero from "./FooterHero"
import FooterNavigation from "./FooterNavigation"
import FooterContact from "./FooterContact"
import SocialLinks from "./SocialLinks"
import ScrollToTopButton from "./ScrollToTopButton"
import FooterBottom from "./FooterBottom"

export default function Footer({
    heroTitle = "Tener un problema",
    heroHighlight = "es estresante,",
    heroSubtitle = "permitinos solucionartelo.",
    navLinks = [
        { name: "Inicio", path: "/Inicio" },
        { name: "Sobre nosotros", path: "/About" },
        { name: "Servicios", path: "#servicios" },
        { name: "Nuestro trabajo", path: "/trabajo" },
        { name: "Contacto", path: "/Contacto" },
    ],
    contactTitle = "Nuestro",
    contactTitleHighlight = "Trabajo.",
    phone = "+54 9 11 4044-2669",
    email = "donestebanatmosferico@gmail.com",
    socialMedia = {},
    showScrollButton = true,
    footerLinks = ["Privacidad", "Descargo"],
    showCopyright = true
}) {
    return (
        <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
                {/* Columna 1 */}
                <div className="space-y-6">
                    <FooterHero
                        title={heroTitle}
                        highlightText={heroHighlight}
                        subtitle={heroSubtitle}
                    />
                    <FooterNavigation links={navLinks} />
                </div>

                {/* Columna 2 */}
                <FooterContact
                    title={contactTitle}
                    titleHighlight={contactTitleHighlight}
                    phone={phone}
                    email={email}
                />

                {/* Columna 3 */}
                <SocialLinks socialMedia={socialMedia} />
            </div>

            {/* Botón scroll to top */}
            {showScrollButton && (
                <ScrollToTopButton className="mt-8" />
            )}

            {/* Footer bottom */}
            <FooterBottom
                links={footerLinks}
                showCopyright={showCopyright}
            />
        </footer>
    )
}