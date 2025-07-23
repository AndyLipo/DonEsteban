import AboutHome from '@/Components/AboutHome/AboutHome'
import HeroSection from '@/Components/Hero/HeroSection'
import Navbar from '@/Components/Navbar/Navbar'
import ContactForm from '@/Components/ContactHome/ContactForm'
import MapSection from '@/Components/GoogleMap/MapSection'
import WhatssaAppBtn from '@/Components/WhatssAppBtn/WhatssAppBtn'
import Footer from '@/Components/Footer/Footer'
import DreamGallery from '@/Components/Hero/DreamGallery'
import { TrustSupport } from '@/Components/AboutHome/TrustSupport'
import { OurWork } from '@/Components/Categories/OurWork'
import Testimonial from '@/Components/Testimonial/Testimonial'

const Home = () => {

    return (
        <>
            <div className='bg-white'>
                <nav>
                    <Navbar />
                </nav>
                <header className='text-center'>
                    <HeroSection />
                </header>
                <section className='my-40'>
                    <DreamGallery />
                </section>
                <section className='my-40'>
                    <ContactForm />
                </section>
                <section className='my-40'>
                    <AboutHome />
                </section>
                <section className='my-40'>
                    <TrustSupport />
                </section>
                <section className='my-40'>
                    <OurWork />
                </section>
                <section className=''>
                    <Testimonial />
                </section>



                <section className='my-40'>
                    <MapSection />
                </section>

                <section className='my-40'>
                    <WhatssaAppBtn />
                </section>

                <section className=''>
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default Home