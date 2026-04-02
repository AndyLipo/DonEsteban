import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import VisionSection from './VisionSection';
import BenefitsSection from './BenefitsSection';
import ValuesSection from './ValuesSection';
import HeroSection from './Herosection';

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