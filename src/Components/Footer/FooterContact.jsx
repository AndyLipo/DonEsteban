import React from "react"
import { Separator } from "@/components/ui/separator"
import FooterBottom from "./FooterBottom"

const FooterContact = ({
    phone = "+54 9 11 4044-2669",
    phone2 = "+54 9 11 3634-9494",
    email = "donestebanatmosferico@gmail.com",
    className = ""
}) => {
    return (
        <div className={`space-y-6 ${className}`}>
            {/* <Separator className="border-t border-gray-400" /> */}
            <div className="text-base md:text-lg font-semibold text-gray-900">
                <a
                    href={`tel:${phone}`}
                    className="hover:text-[#8be27e] transition-colors"
                >
                    {phone}
                </a>
                <br />
                <a
                    href={`tel:${phone}`}
                    className="hover:text-[#8be27e] transition-colors"
                >
                    {phone2}
                </a>
                <br />
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