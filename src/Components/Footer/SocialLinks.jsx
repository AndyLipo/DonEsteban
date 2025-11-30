import React from "react"
import { Facebook, Instagram, Linkedin } from "lucide-react"

const SocialLinks = ({
    socialMedia = {},
    className = ""
}) => {
    const defaultSocial = {
        facebook: "https://www.facebook.com/people/Atmosferico-Esteban/pfbid01FUTrKHPucEMajafgGB1vRJS4VPpyJtUbHmW8itS3PbvZTsEHKZ739uDyAVRrJU9l/?name=xhp_nt__fb__action__open_user",
        instagram: "https://www.instagram.com/atmosfericos.donesteban/?igsh=MTRseWpxcnNtcnlscg%3D%3D#",

    }

    const social = { ...defaultSocial, ...socialMedia }

    return (
        <div className={`${className}`}>
            <div className="flex gap-4">
                <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#246416] transition-colors"
                    aria-label="Visitar nuestra página de Facebook"

                >
                    <Facebook className="size-7" aria-hidden="true" />
                </a>
                <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#246416] transition-colors"
                    aria-label="Visitar nuestro Perfil de Instagram"

                >
                    <Instagram className="size-7" aria-hidden="true" />
                </a>
            </div>
        </div>
    )
}

export default SocialLinks