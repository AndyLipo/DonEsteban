const BenefitsHeader = ({
    mainTitle = "Nos encargamos de todo por vos",
    highlightText = "Aprovechá",
    accentText = "nuestras soluciones",
    endText = "y presupuestos a medida"
}) => {
    return (
        <div
            className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12"
            style={{
                minHeight: '180px' // 👈 Solo esto, sin contención agresiva
            }}
        >
            <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl sm:text-3xl md:text-4xl font-medium text-gray-900">
                    {mainTitle}
                </h2>
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
                    <span className="text-gray-900">{highlightText} </span>
                    <span className="text-[#2469a0]">{accentText}</span>
                    <span className="text-gray-900"> {endText}</span>
                </h3>
            </div>
        </div>
    )
}

export default BenefitsHeader