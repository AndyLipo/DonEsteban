import React from "react"
import { Separator } from "@/components/ui/separator"
import FooterBottom from "./FooterBottom"

const FooterContact = ({
    title = "Nuestro",
    titleHighlight = "Trabajo.",
    phone = "+54 9 11 4044-2669",
    email = "donestebanatmosferico@gmail.com",
    className = ""
}) => {
    return (
        <div className={`space-y-6 ${className}`}>
            <Separator className="border-t border-gray-400" />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                <span>{title} </span>
                <span className="text-gray-500">{titleHighlight}</span>
            </h2>
            <div className="text-base md:text-lg font-semibold text-gray-900">
                <a
                    href={`tel:${phone}`}
                    className="hover:text-[#8be27e] transition-colors"
                >
                    {phone}
                </a>
                <br /><br />
                <a
                    href={`mailto:${email}`}
                    className="hover:text-[#8be27e] transition-colors"
                >
                    {email}
                </a>
            </div>
        </div>
    )
}

export default FooterContact