import { Shield, Clock, Zap } from 'lucide-react';

const BenefitsSection = () => (
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <SectionHeader
                title="Beneficios de elegirnos."
                description="Ofrecemos soluciones integrales con la más alta calidad y compromiso profesional."
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <BenefitCard />
                <BenefitContent />
            </div>
        </div>
    </section>
);

const SectionHeader = ({ title, description }) => (
    <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
    </div>
);

const BenefitCard = () => (
    <div className="relative">
        <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl overflow-hidden shadow-2xl">
            <div className="h-80 bg-gradient-to-br from-cyan-300 to-blue-400 flex items-center justify-center">
                <div className="text-center text-white">
                    <Shield className="w-16 h-16 mx-auto mb-4 opacity-80" />
                </div>
            </div>
        </div>
        <div className="absolute -bottom-6 -right-6 bg-yellow-400 rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-gray-900">01</span>
        </div>
    </div>
);

const BenefitContent = () => {
    const benefits = [
        {
            icon: Clock,
            title: "Servicio Nocturno",
            description: "Asistencia durante las noches para problemas urgentes"
        },
        {
            icon: Zap,
            title: "Tiempo de respuesta rápido",
            description: "Respuesta rápida a todas las solicitudes de servicio"
        }
    ];

    return (
        <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Expertos en soluciones de problemas.
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
                Nuestro equipo combina décadas de experiencia con técnicas de vanguardia para
                ofrecer resultados excepcionales. Desde la consulta inicial, hasta el mantenimiento
                continuo, somos tu socio integral para la solución de problemas.
            </p>
            <div className="space-y-6">
                {benefits.map((benefit, index) => (
                    <BenefitItem key={index} {...benefit} />
                ))}
            </div>
        </div>
    );
};

const BenefitItem = ({ icon: Icon, title, description }) => (
    <div className="flex items-start gap-4">
        <div className="bg-blue-100 rounded-lg p-2">
            <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
            <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    </div>
);

export default BenefitsSection;
