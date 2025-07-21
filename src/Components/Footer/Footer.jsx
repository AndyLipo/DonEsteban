import {
    Facebook,
    Twitter,
    Instagram
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#1B2533] text-white py-20 px-6 md:px-24">
            <div className="grid md:grid-cols-5 gap-12">
                {/* Call to action */}
                <div className="md:col-span-2 space-y-6">
                    <h3 className="text-xl font-semibold">Listo para contactarnos?</h3>
                    <button className="bg-pink-300 text-indigo-900 font-semibold py-2 px-4 rounded-md hover:bg-pink-400 transition">
                        Presupuestá
                    </button>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-pink-300 font-medium mb-4">Servicios</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>Email Marketing</li>
                        <li>Campaigns</li>
                        <li>Branding</li>
                        <li>Offline</li>
                    </ul>
                </div>

                {/* About */}
                <div>
                    <h4 className="text-pink-300 font-medium mb-4">Sobre Nosotros</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>Nuestra historia</li>
                        <li>Beneficios</li>
                        <li>Staff</li>
                        <li>Proyectos</li>
                    </ul>
                </div>

                {/* Help */}
                <div>
                    <h4 className="text-pink-300 font-medium mb-4">Ayuda</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>FAQs</li>
                        <li>Contacto</li>
                    </ul>
                </div>
            </div>

            {/* Bottom row */}
            <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-700 pt-6">
                <div className="flex gap-6 text-sm text-gray-400">
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
                <div className="flex gap-6 text-white">
                    <Facebook className="w-5 h-5 hover:text-pink-300 cursor-pointer" />
                    <Twitter className="w-5 h-5 hover:text-pink-300 cursor-pointer" />
                    <Instagram className="w-5 h-5 hover:text-pink-300 cursor-pointer" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
