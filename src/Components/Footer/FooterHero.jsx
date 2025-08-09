import React from "react"
import { Separator } from "@/components/ui/separator"

const FooterHero = ({
    title = "Tener un problema",
    highlightText = "es estresante,",
    subtitle = "permitinos solucionartelo.",
    className = ""
}) => {
    return (
        <div className={`space-y-6 ${className}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                <span>{title} </span>
                <span className="text-[#8be27e]">{highlightText}</span><br />
                <span>{subtitle}</span>
            </h2>
            <Separator className="border-t border-gray-400" />
        </div>
    )
}

export default FooterHero