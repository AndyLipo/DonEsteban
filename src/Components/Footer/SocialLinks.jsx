import React from "react"
import { Facebook, Instagram, Linkedin } from "lucide-react"

const SocialLinks = ({
    socialMedia = {},
    className = ""
}) => {
    const defaultSocial = {
        facebook: "https://www.facebook.com/people/Atmosferico-Esteban/pfbid01FUTrKHPucEMajafgGB1vRJS4VPpyJtUbHmW8itS3PbvZTsEHKZ739uDyAVRrJU9l/?name=xhp_nt__fb__action__open_user",
        instagram: "https://www.instagram.com/atmosfericos.donesteban/?igsh=MTRseWpxcnNtcnlscg%3D%3D#",
        linkedin: "#"
    }

    const social = { ...defaultSocial, ...socialMedia }

    return (
        <div className={`space-y-6 ${className}`}>
            <div className="flex gap-4">
                <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8be27e] transition-colors"
                >
                    <Facebook className="w-5 h-5" />
                </a>
                <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8be27e] transition-colors"
                >
                    <Instagram className="w-5 h-5" />
                </a>
                <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8be27e] transition-colors"
                >
                    <Linkedin className="w-5 h-5" />
                </a>
            </div>
        </div>
    )
}

export default SocialLinks