import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import VisionSection from './VisionSection';
import BenefitsSection from './BenefitsSection';
import ValuesSection from './ValuesSection';
import HeroSection from './Herosection';
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
    return (
        <div className="bg-white overflow-x-hidden">
            <Helmet>
                <title>Quiénes Somos | Don Esteban Atmosféricos - Desagote y Destapaciones</title>
                <meta name="description" content="Más de 8 años de experiencia en destapaciones, desagote de pozos, cámaras sépticas y piletas en Escobar, Ingeniero Maschwitz y zona norte de Buenos Aires." />
                <meta property="og:title" content="Quiénes Somos | Don Esteban Atmosféricos" />
                <meta property="og:description" content="Empresa familiar con 8 años de experiencia en destapaciones y desagote en zona norte de Buenos Aires." />
                <link rel="canonical" href="https://donestebanatmosfericos.com.ar/about" />
            </Helmet>
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