import { CheckCircle, Wrench } from 'lucide-react';
import Camion2 from '../../assets/camion-2.webp'
const VisionSection = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <ServiceCard />
                <VisionContent />
            </div>
        </div>
    </section>
);

const ServiceCard = () => (
    <div className="relative">
        <div className="bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl overflow-hidden shadow-2xl">
            <div className="h-80 bg-gradient-to-br from-orange-300 to-red-300 flex items-center justify-center">
                <div className="text-center text-white">
                    {/* <Wrench className="w-16 h-16 mx-auto mb-4 opacity-80" /> */}
                    <picture>
                        <source />
                        <img src={Camion2} alt="camion-profesional" className="w-125 mx-auto opacity-80 rounded-2xl" />

                    </picture>
                </div>
            </div>
        </div>
    </div>
);

const VisionContent = () => {
    const services = [
        "Servicio nocturno",
        "Desagotes de piletas",
        "Desagotes de pozos ciegos"
    ];

    return (
        <div>
            <div className="mb-6">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    Servicio de calidad
                </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nuestra <span className="text-blue-600">Visión</span> de la empresa
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
                Ser los líderes en servicios ambientales con camiones atmosféricos en la región,
                reconocida por su compromiso con el medioambiente, la innovación constante y
                la excelencia en la atención al cliente.
            </p>
            <div className="space-y-4">
                {services.map((service, index) => (
                    <ServiceItem key={index} text={service} />
                ))}
            </div>
        </div>
    );
};

const ServiceItem = ({ text }) => (
    <div className="flex items-center gap-3">
        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
        <span className="text-gray-700">{text}</span>
    </div>
);

export default VisionSection;
