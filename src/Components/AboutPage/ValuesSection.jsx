import { Droplets, Shield, Award, Users } from 'lucide-react';

const ValuesSection = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <ValuesContent />
                <ValuesGrid />
            </div>
        </div>
    </section>
);

const ValuesContent = () => {
    const values = [
        {
            title: "Responsabilidad",
            description: "Nos esforzamos por superar las expectativas con atención meticulosa al detalle y compromiso inquebrantable con la calidad.",
            color: "border-blue-600"
        },
        {
            title: "Confianza",
            description: "Tu felicidad es nuestra prioridad. Trabajamos estrechamente contigo para asegurar que tu visión se haga realidad.",
            color: "border-green-500"
        },
        {
            title: "Compromiso",
            description: "Estamos comprometidos con el cuidado responsable del medio ambiente usando químicos ecológicos y equipos eficientes.",
            color: "border-orange-500"
        },
        {
            title: "Eficacia",
            description: "Garantizamos soluciones efectivas y oportunas que resuelven tus necesidades de manera integral y profesional.",
            color: "border-purple-500"
        }
    ];

    return (
        <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Valores de nuestra<br />marca.
            </h2>
            <div className="space-y-8">
                {values.map((value, index) => (
                    <ValueItem key={index} {...value} />
                ))}
            </div>
        </div>
    );
};

const ValueItem = ({ title, description, color }) => (
    <div className={`border-l-4 ${color} pl-6`}>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const ValuesGrid = () => {
    const cards = [
        { icon: Droplets, text: "Agua Limpia", gradient: "from-blue-400 to-cyan-400", size: "h-48" },
        { icon: Shield, text: "Seguro", gradient: "from-green-400 to-emerald-400", size: "h-32" },
        { icon: Award, text: "Calidad", gradient: "from-orange-400 to-red-400", size: "h-32" },
        { icon: Users, text: "Clientes Felices", gradient: "from-purple-400 to-pink-400", size: "h-48" }
    ];

    return (
        <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
                <ValueCard {...cards[0]} />
                <ValueCard {...cards[1]} />
            </div>
            <div className="space-y-6 pt-12">
                <ValueCard {...cards[2]} />
                <ValueCard {...cards[3]} />
            </div>
        </div>
    );
};

const ValueCard = ({ icon: Icon, text, gradient, size }) => (
    <div className={`bg-gradient-to-br ${gradient} rounded-2xl ${size} flex items-center justify-center`}>
        <div className="text-center text-white">
            <Icon className="w-12 h-12 mx-auto mb-2 opacity-80" />
            <p className="font-medium">{text}</p>
        </div>
    </div>
);

export default ValuesSection;