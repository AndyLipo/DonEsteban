import React from "react"
import FooterHero from "./FooterHero"
import FooterNavigation from "./FooterNavigation"
import FooterContact from "./FooterContact"
import SocialLinks from "./SocialLinks"
import ScrollToTopButton from "./ScrollToTopButton"
import FooterBottom from "./FooterBottom"
import { Separator } from "@radix-ui/react-select"

export default function Footer({
    heroTitle = "Tener un problema",
    heroHighlight = "es estresante,",
    heroSubtitle = "permitinos solucionartelo.",
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
            <Separator className="border-t border-gray-400" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-1">
                {/* Columna 1 */}
                <div className="">
                    <FooterHero
                        title={heroTitle}
                        highlightText={heroHighlight}
                        subtitle={heroSubtitle}
                    />
                    {/* <FooterNavigation links={navLinks} /> */}
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
                <ScrollToTopButton className="flex mt-2 ml-50 sm:ml-30 md:ml-80 lg:ml-80" />
            )}

            {/* Footer bottom */}
            <FooterBottom
                links={footerLinks}
                showCopyright={showCopyright}
            />
        </footer>
    )
}