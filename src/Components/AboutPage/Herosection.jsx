import { Award, Users, Droplets } from 'lucide-react';

const HeroSection = () => (
    <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Nuestra <span className="text-blue-600">Misión</span>.
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Brindar un servicio eficiente, seguro y responsable de recolección y transporte
                        de residuos cloacales y efluentes, cumpliendo con todas las normativas ambientales
                        vigentes. Nos comprometemos a ofrecer soluciones rápidas y confiables para hogares,
                        industrias y municipios, cuidando el entorno y priorizando la salud pública.
                    </p>
                    <div className="flex items-center gap-6">
                        <StatItem icon={Award} text="25+ años de experiencia" />
                        <StatItem icon={Users} text="500+ clientes satisfechos" />
                    </div>
                </div>
                <HeroCard />
            </div>
        </div>
    </section>
);

const StatItem = ({ icon: Icon, text }) => (
    <div className="flex items-center gap-2">
        <Icon className="w-6 h-6 text-blue-600" />
        <span className="text-sm font-medium text-gray-700">{text}</span>
    </div>
);

const HeroCard = () => (
    <div className="relative">
        <div className="bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl p-8 transform rotate-3 shadow-2xl">
            <div className="bg-white rounded-lg p-6 transform -rotate-3">
                <Droplets className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Resultados en el acto</h3>
                <p className="text-gray-600">Servicios profesionales de desagote y plomeria</p>
            </div>
        </div>
    </div>
);

export default HeroSection;