
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import {
    ArrowRight,
    CheckCircle2,
    ChevronDown,
    Clock3,
    Droplets,
    Wrench,
    Pipette,
    Bath,
    MessageCircle,
    MapPin,
    ShieldCheck,
    Phone,
    Search,
} from 'lucide-react'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import MapSection from '../GoogleMap/MapSection'

// IMPORTANTE: reemplazar por el WhatsApp real de la empresa.
// Formato internacional sin +, espacios ni guiones.
const WHATSAPP_NUMBER = '5491136349494'

const whatsappUrl = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

const services = [
    {
        icon: Droplets,
        title: 'Reparación de pérdidas',
        description:
            'Soluciones para pérdidas de agua en cañerías, conexiones y otros puntos de la instalación.',
    },
    {
        icon: Pipette,
        title: 'Reparación de cañerías',
        description:
            'Revisión de problemas en cañerías de agua y desagües para encontrar una solución adecuada.',
    },
    {
        icon: Wrench,
        title: 'Reparación de griferías',
        description:
            'Asistencia para canillas, conexiones y griferías que necesitan reparación o recambio.',
    },
    {
        icon: Bath,
        title: 'Instalaciones sanitarias',
        description:
            'Trabajos de reparación e instalación sanitaria según las necesidades de cada propiedad.',
    },
]

const faqs = [
    {
        question: '¿Qué trabajos de plomería realizan?',
        answer:
            'Podés consultarnos por pérdidas de agua, problemas en cañerías, griferías y otras instalaciones sanitarias. Contanos qué necesitás para evaluar el trabajo.',
    },
    {
        question: '¿En qué zonas trabajan?',
        answer:
            'Brindamos servicios en Escobar y localidades cercanas de Zona Norte del Gran Buenos Aires. Consultanos por tu ubicación para confirmar la cobertura.',
    },
    {
        question: '¿Cómo puedo solicitar un presupuesto?',
        answer:
            'Podés escribirnos por WhatsApp, indicarnos qué problema tenés y compartir fotos o videos. Con esa información podremos orientarte sobre los próximos pasos.',
    },
    {
        question: '¿También realizan destapaciones?',
        answer:
            'Sí, Don Esteban también ofrece servicios de destapaciones y desagotes. Podés consultar por el servicio que necesitás y te orientaremos.',
    },
]

function SectionTitle({ eyebrow, title, description }) {
    return (
        <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
                {eyebrow}
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                    {description}
                </p>
            )}
        </div>
    )
}

export const Plomeria = () => {
    const [openFaq, setOpenFaq] = useState(0)

    return (
        <div className="min-h-screen overflow-x-hidden bg-white text-slate-800">
            <Helmet>
                <title>Plomería en Escobar y Zona Norte | Don Esteban</title>

                <meta
                    name="description"
                    content="Servicio de plomería en Escobar y alrededores. Consultá por reparación de pérdidas de agua, cañerías y problemas sanitarios. Contactanos por WhatsApp."
                />

                <meta
                    name="robots"
                    content="index, follow"
                />

                <meta
                    property="og:title"
                    content="Servicio de Plomería en Escobar | Don Esteban"
                />

                <meta
                    property="og:description"
                    content="Consultá por trabajos de plomería en Escobar y localidades cercanas."
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:url"
                    content="https://donestebanatmosfericos.com.ar/plomeria/"
                />

                <link
                    rel="canonical"
                    href="https://donestebanatmosfericos.com.ar/plomeria/"
                />
            </Helmet>

            <Navbar />

            <main>
                {/* HERO */}
                <section className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-slate-950 pt-28 sm:pt-32">
                    {/* Fondo decorativo */}
                    <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950" />

                    <div className="absolute -right-20 top-20 -z-10 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

                    <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-24">
                        <div className="max-w-2xl">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-200">
                                <Droplets size={16} />
                                Plomería · Escobar y alrededores
                            </div>

                            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Soluciones de{' '}
                                <span className="text-sky-400">
                                    plomería
                                </span>{' '}
                                para tu hogar o negocio
                            </h1>

                            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                                ¿Tenés una pérdida de agua o un problema en
                                las cañerías? Contanos qué necesitás y
                                consultá por nuestros servicios de plomería
                                en Escobar y Zona Norte.
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href={whatsappUrl(
                                        'Hola, Don Esteban. Quiero consultar por un trabajo de plomería.'
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-sky-500 px-6 py-4 font-bold text-white shadow-lg shadow-sky-950/30 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                >
                                    <MessageCircle size={21} />
                                    Consultar por WhatsApp
                                    <ArrowRight size={18} />
                                </a>

                                <a
                                    href="#servicios"
                                    className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/20 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
                                >
                                    Ver servicios
                                </a>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                                <span className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-sky-400"
                                    />
                                    Atención personalizada
                                </span>

                                <span className="flex items-center gap-2">
                                    <MapPin
                                        size={17}
                                        className="text-sky-400"
                                    />
                                    Escobar y alrededores
                                </span>
                            </div>
                        </div>

                        {/* Imagen principal */}
                        <div className="relative mx-auto w-full max-w-xl">
                            <div className="absolute -inset-3 rounded-3xl bg-sky-400/20 blur-2xl" />

                            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-800 shadow-2xl">
                                <img
                                    src="/images/plomeria/plomero-trabajando.webp"
                                    alt="Trabajo de plomería y reparación de cañerías"
                                    width="900"
                                    height="1100"
                                    fetchPriority="high"
                                    className="h-[340px] w-full object-cover sm:h-[460px]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                                    <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">
                                        Don Esteban
                                    </p>

                                    <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                                        Estamos para ayudarte
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-slate-200">
                                        Contanos qué problema necesitás
                                        resolver.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICIOS */}
                <section
                    id="servicios"
                    className="scroll-mt-28 px-5 py-20 sm:px-8 sm:py-24"
                >
                    <div className="mx-auto max-w-7xl">
                        <SectionTitle
                            eyebrow="Nuestros servicios"
                            title="Servicios de plomería"
                            description="Conocé algunos de los trabajos por los que podés consultarnos. Te ayudamos a identificar el problema y evaluar las alternativas."
                        />

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {services.map((service) => {
                                const Icon = service.icon

                                return (
                                    <article
                                        key={service.title}
                                        className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-200/60"
                                    >
                                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition group-hover:bg-sky-600 group-hover:text-white">
                                            <Icon size={27} />
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-900">
                                            {service.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-slate-600">
                                            {service.description}
                                        </p>

                                        <a
                                            href={whatsappUrl(
                                                `Hola, Don Esteban. Quiero consultar por: ${service.title.toLowerCase()}.`
                                            )}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900"
                                        >
                                            Hacer una consulta
                                            <ArrowRight size={16} />
                                        </a>
                                    </article>
                                )
                            })}
                        </div>

                        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-slate-500">
                            Consultá previamente la disponibilidad del
                            servicio que necesitás y la cobertura para tu
                            domicilio.
                        </p>
                    </div>
                </section>

                {/* BLOQUE DE CONFIANZA */}
                <section className="bg-slate-50 px-5 py-20 sm:px-8 sm:py-24">
                    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                        <div>
                            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
                                Atención personalizada
                            </p>

                            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                                Cada problema necesita una solución adecuada
                            </h2>

                            <p className="mt-5 leading-8 text-slate-600">
                                Una pérdida o una falla en las cañerías
                                puede generar dudas sobre cómo actuar.
                                Explicanos qué sucede para que podamos
                                orientarte sobre el trabajo necesario.
                            </p>

                            <div className="mt-8 space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                                        <MessageCircle size={22} />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-slate-900">
                                            Contanos qué necesitás
                                        </h3>
                                        <p className="mt-1 text-sm leading-6 text-slate-600">
                                            Podés enviarnos una descripción
                                            del problema y fotos por WhatsApp.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                                        <Search size={22} />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-slate-900">
                                            Evaluamos el trabajo
                                        </h3>
                                        <p className="mt-1 text-sm leading-6 text-slate-600">
                                            Te orientamos sobre los próximos
                                            pasos según el problema que nos
                                            describas.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                                        <ShieldCheck size={22} />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-slate-900">
                                            Información clara
                                        </h3>
                                        <p className="mt-1 text-sm leading-6 text-slate-600">
                                            Consultá por el alcance del
                                            trabajo, los tiempos y el
                                            presupuesto antes de coordinar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Segunda imagen */}
                        <div className="relative">
                            <div className="overflow-hidden rounded-3xl bg-slate-200 shadow-xl">
                                <MapSection
                                    alt="Reparación de una instalación de agua"
                                    width="1000"
                                    height="800"
                                    loading="lazy"
                                    className="h-[350px] w-full object-cover sm:h-[480px]"
                                />
                            </div>

                            <div className="absolute -bottom-16 left-4 right-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:left-8 sm:right-8 sm:p-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                                        <MapPin size={25} />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-slate-900">
                                            Escobar y Zona Norte
                                        </h3>
                                        <p className="mt-1 text-sm text-slate-600">
                                            Consultá si llegamos a tu
                                            localidad.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DESTAPACIONES: SERVICIO RELACIONADO */}
                <section className="px-5 py-20 sm:px-8 sm:py-24">
                    <div className="mx-auto max-w-6xl">
                        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 sm:px-12 sm:py-14">
                            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />

                            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                                <div className="max-w-2xl">
                                    <p className="mb-3 text-sm font-bold uppercase tracking-widest text-sky-400">
                                        Otro de nuestros servicios
                                    </p>

                                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                        ¿Tenés un problema con los desagües?
                                    </h2>

                                    <p className="mt-4 leading-7 text-slate-300">
                                        También realizamos trabajos de
                                        destapaciones y desagotes. Conocé
                                        nuestros servicios y consultanos por
                                        tu problema.
                                    </p>
                                </div>

                                <a
                                    href="/destapacion"
                                    className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-slate-900 transition hover:bg-sky-50"
                                >
                                    Ver destapaciones
                                    <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PREGUNTAS FRECUENTES */}
                <section
                    id="preguntas-frecuentes"
                    className="bg-slate-50 px-5 py-20 sm:px-8 sm:py-24"
                >
                    <div className="mx-auto max-w-3xl">
                        <SectionTitle
                            eyebrow="Preguntas frecuentes"
                            title="Consultas sobre plomería"
                            description="Resolvemos algunas dudas habituales antes de solicitar un servicio."
                        />

                        <div className="space-y-3">
                            {faqs.map((faq, index) => {
                                const isOpen = openFaq === index

                                return (
                                    <article
                                        key={faq.question}
                                        className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenFaq(
                                                    isOpen ? -1 : index
                                                )
                                            }
                                            className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                                            aria-expanded={isOpen}
                                        >
                                            <span className="font-bold text-slate-900">
                                                {faq.question}
                                            </span>

                                            <ChevronDown
                                                size={20}
                                                className={`shrink-0 text-sky-700 transition-transform ${isOpen ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>

                                        {isOpen && (
                                            <div className="px-5 pb-6 sm:px-6">
                                                <p className="leading-7 text-slate-600">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        )}
                                    </article>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA FINAL */}
                <section className="px-5 py-20 sm:px-8 sm:py-24">
                    <div className="mx-auto max-w-5xl rounded-3xl bg-sky-600 px-6 py-12 text-center shadow-xl shadow-sky-900/10 sm:px-12 sm:py-16">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white">
                            <Wrench size={32} />
                        </div>

                        <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
                            ¿Necesitás un plomero?
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-sky-50">
                            Contanos qué está pasando y consultá por un
                            trabajo de plomería en Escobar y alrededores.
                        </p>

                        <a
                            href={whatsappUrl(
                                '¡Hola! Me gustaría hacer una consulta sobre sus servicios de plomeria.'
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-sky-800 transition hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-sky-600"
                        >
                            <MessageCircle size={21} />
                            Escribir por WhatsApp
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </section>
            </main>

            {/* FOOTER */}
            <Footer />

        </div>
    )
}

export default Plomeria
