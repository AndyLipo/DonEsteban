import AboutHome from '../Components/AboutHome/AboutHome'
import HeroSection from '../Components/Hero/HeroSection'
import ImageGalery from '../Components/ImageGallery/ImageGalery'
import Navbar from '../Components/Navbar/Navbar'
import Accordion from '../Components/Accordion/AccordionHome'
import review from '../Components/RatedComponent/reviewData'
import RatedGallery from '@/Components/RatedComponent/RatedGallery'
import { ContactForm } from '@/Components/ContactHome/ContactForm'

const Home = () => {

    return (
        <>
            <div className='bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 dark:from-slate-800 dark:to-slate-700'>
                <nav>
                    <Navbar />
                </nav>
                <header className='text-center'>
                    <HeroSection />
                </header>
                <section className='mt-12 '>
                    <AboutHome />
                </section>
                <section className='mt-18'>
                    <ImageGalery />
                </section>
                <section className='-mt-40'>
                    <RatedGallery review={review} />
                </section>
                <section className='mx-24 mt-40 pb-10'>
                    <Accordion />
                </section>
                <section className='-mt-40'>
                    <ContactForm />
                </section>
            </div>
        </>
    )
}

export default Home