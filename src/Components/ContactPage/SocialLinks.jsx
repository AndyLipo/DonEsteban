import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const SocialLinks = () => {
    const socialLinks = [
        {
            icon: Facebook,
            href: "https://www.facebook.com/people/Atmosferico-Esteban/pfbid01FUTrKHPucEMajafgGB1vRJS4VPpyJtUbHmW8itS3PbvZTsEHKZ739uDyAVRrJU9l/?name=xhp_nt__fb__action__open_user",
            label: "Facebook"
        },
        {
            icon: Instagram,
            href: "https://www.instagram.com/atmosfericos.donesteban/?igsh=MTRseWpxcnNtcnlscg%3D%3D#",
            label: "Instagram"
        },
        {
            icon: Linkedin,
            href: "#",
            label: "LinkedIn"
        }
    ];

    return (
        <div className="absolute bottom-8 left-6 flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <Link
                    key={index}
                    to={href}
                    target={href !== "#" ? "_blank" : undefined}
                    rel={href !== "#" ? "noopener noreferrer" : undefined}
                    className="text-black hover:text-white transition-colors"
                    aria-label={label}
                >
                    <Icon size={30} />
                </Link>
            ))}
        </div>
    );
};

export default SocialLinks;