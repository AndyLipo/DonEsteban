import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import HeroSection from './HeroSection';
import VisionSection from './VisionSection';
import BenefitsSection from './BenefitsSection';
import ValuesSection from './ValuesSection';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="h-16 bg-blue-600 flex items-center justify-center text-white font-semibold">
                <Navbar />
            </div>

            <HeroSection />
            <VisionSection />
            <BenefitsSection />
            <ValuesSection />

            <div className="py-8">
                <Footer />
            </div>
        </div>
    );
}