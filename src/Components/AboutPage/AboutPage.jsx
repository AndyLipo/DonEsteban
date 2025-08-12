import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import HeroSection from './HeroSection';
import VisionSection from './VisionSection';
import BenefitsSection from './BenefitsSection';
import ValuesSection from './ValuesSection';

export default function AboutPage() {
    return (
        <div className="bg-white overflow-x-hidden">
            <div className="">
                <Navbar />
            </div>

            <HeroSection />
            <VisionSection />
            <BenefitsSection />
            <ValuesSection />

            <div className="">
                <Footer />
            </div>
        </div>
    );
}