import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import {
    ArrowRight,
    ChevronDown,
    CheckCircle2,
    Droplets,
    Truck,
    Waves,
    Pipette,
    MessageCircle,
    MapPin,
    ShieldCheck,
    Search,
    CircleHelp,
} from 'lucide-react'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


const WHATSAPP_NUMBER = '5491136349494'

const whatsappUrl = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

const services = [
    {
        icon: Truck,
        title: 'Desagote de pozos ciegos',
        description:
            'Servicio de desagote para pozos ciegos y acumulaciones de líquidos cloacales en viviendas y propiedades.',
        message: 'desagote de pozo ciego',
    },
    {
        icon: Waves,
        title: 'Limpieza de cámaras sépticas',
        description:
            'Retiro de líquidos y residuos acumulados en cámaras sépticas, según las características de la instalación.',
        message: 'limpieza de cámara séptica',
    },
    {
        icon: Pipette,
        title: 'Destapación de cañerías',
        description:
            'Consultá por obstrucciones en cañerías y desagües que dificultan el paso normal del agua.',
        message: 'destapación de cañerías',
    },
    {
        icon: Droplets,
        title: 'Desagotes domiciliarios',
        description:
            'Asistencia para problemas de acumulación de líquidos en instalaciones domiciliarias.',
        message: 'desagote domiciliario',
    },
]

const faqs = [
    {
        question: '¿Qué servicios de destapaciones realizan?',
        answer:
            'Podés consultarnos por desagote de pozos ciegos, limpieza de cámaras sépticas y problemas de obstrucción en cañerías y desagües. Contanos qué sucede para confirmar qué servicio necesitás.',
    },
    {
        question: '¿En qué zonas trabajan?',
        answer:
            'Trabajamos en Escobar y localidades cercanas de Zona Norte del Gran Buenos Aires. Escribinos con tu ubicación para confirmar la cobertura.',
    },
    {
        question: '¿Cuándo necesito un desagote de pozo ciego?',
        answer:
            'Si el pozo presenta signos de saturación, los desagües funcionan lentamente o aparecen olores persistentes, conviene evaluar la instalación. Si hay retorno de líquidos cloacales, evitá el contacto y solicitá asistencia.',
    },
    {
        question: '¿Cómo solicito un presupuesto?',
        answer:
            'Escribinos por WhatsApp con tu localidad, una descripción del problema y, si es posible, algunas fotos. Así podremos orientarte sobre el servicio y los próximos pasos.',
    },
    {
        question: '¿También realizan trabajos de plomería?',
        answer:
            'Sí, también podés consultar por servicios de plomería. Ingresá a nuestra sección específica para conocer más sobre reparaciones y problemas de instalaciones sanitarias.',
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

export const Destapacion = () => {
    const [openFaq, setOpenFaq] = useState(0)

    return (
        <div className="min-h-screen overflow-x-hidden bg-white text-slate-800">
            <Helmet>
                <title>
                    Destapaciones y Desagotes en Escobar | Don Esteban
                </title>

                <meta
                    name="description"
                    content="Servicio de destapaciones y desagote de pozos ciegos en Escobar y Zona Norte. Consultá por limpieza de cámaras sépticas y obstrucciones en desagües."
                />

                <meta name="robots" content="index, follow" />

                <meta
                    property="og:title"
                    content="Destapaciones y Desagotes en Escobar | Don Esteban"
                />

                <meta
                    property="og:description"
                    content="Consultá por desagote de pozos ciegos, cámaras sépticas y destapaciones en Escobar y alrededores."
                />

                <meta property="og:type" content="website" />

                <meta
                    property="og:url"
                    content="https://donestebanatmosfericos.com.ar/destapacion/"
                />

                <link
                    rel="canonical"
                    href="https://donestebanatmosfericos.com.ar/destapacion/"
                />
            </Helmet>

            <Navbar />

            <main>
                {/* HERO */}
                <section className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-slate-950 pt-28 sm:pt-32">
                    <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950" />

                    <div className="absolute -right-20 top-20 -z-10 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

                    <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-24">
                        <div className="max-w-2xl">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-200">
                                <Truck size={17} />
                                Destapaciones y desagotes
                            </div>

                            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Destapaciones y{' '}
                                <span className="text-sky-400">
                                    desagotes
                                </span>{' '}
                                en Escobar y alrededores
                            </h1>

                            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                                ¿Tenés un pozo ciego saturado, una cámara
                                séptica que necesita limpieza o un problema
                                en los desagües? Contanos qué sucede y
                                consultá por nuestros servicios.
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href={whatsappUrl(
                                        'Hola, Don Esteban. Quiero consultar por un servicio de destapaciones o desagote.'
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
                                    src="/images/destapaciones/camion-atmosferico.webp"
                                    alt="Camión atmosférico de Don Esteban para servicios de desagote"
                                    width="900"
                                    height="1100"
                                    fetchPriority="high"
                                    className="h-[340px] w-full object-cover sm:h-[460px]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                                    <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">
                                        Don Esteban Atmosféricos
                                    </p>

                                    <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                                        Soluciones para tus desagües
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-slate-200">
                                        Consultanos por el servicio que
                                        necesitás.
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
                            title="Servicios de destapaciones y desagotes"
                            description="Conocé las soluciones por las que podés consultarnos en Escobar y localidades cercanas."
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
                                                `Hola, Don Esteban. Quiero consultar por ${service.message}.`
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
                            La disponibilidad de cada servicio depende de
                            las características del trabajo y de la zona.
                            Consultanos para confirmarla.
                        </p>
                    </div>
                </section>

                {/* CUÁNDO SOLICITAR EL SERVICIO */}
                <section className="bg-slate-50 px-5 py-20 sm:px-8 sm:py-24">
                    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                        <div>
                            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
                                ¿Cuándo consultar?
                            </p>

                            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                                Señales de que tus desagües necesitan atención
                            </h2>

                            <p className="mt-5 leading-8 text-slate-600">
                                Algunos problemas de desagüe pueden indicar
                                una obstrucción o una instalación que
                                necesita revisión. Identificar los síntomas
                                ayuda a explicar mejor el problema al
                                momento de solicitar asistencia.
                            </p>

                            <div className="mt-8 space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                                        <Droplets size={22} />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-slate-900">
                                            Desagües lentos o con retorno
                                        </h3>
                                        <p className="mt-1 text-sm leading-6 text-slate-600">
                                            El agua tarda en bajar o vuelve
                                            por rejillas y desagües.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                                        <Waves size={22} />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-slate-900">
                                            Olores persistentes
                                        </h3>
                                        <p className="mt-1 text-sm leading-6 text-slate-600">
                                            Aparecen olores desagradables
                                            cerca de las instalaciones.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                                        <Truck size={22} />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-slate-900">
                                            Pozo ciego saturado
                                        </h3>
                                        <p className="mt-1 text-sm leading-6 text-slate-600">
                                            Hay indicios de saturación o
                                            problemas recurrentes en el
                                            sistema de desagüe.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-6 text-sm leading-6 text-slate-500">
                                Estos síntomas pueden tener distintas
                                causas. Una evaluación permite determinar
                                qué tipo de asistencia corresponde.
                            </p>
                        </div>

                        {/* Segunda imagen */}
                        <div className="relative">
                            <div className="overflow-hidden rounded-3xl bg-slate-200 shadow-xl">
                                <img
                                    src="/images/destapaciones/trabajo-desagote.webp"
                                    alt="Trabajo de desagote y mantenimiento de instalaciones"
                                    width="1000"
                                    height="800"
                                    loading="lazy"
                                    className="h-[350px] w-full object-cover sm:h-[480px]"
                                />
                            </div>

                            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:left-8 sm:right-8 sm:p-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                                        <MapPin size={25} />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-slate-900">
                                            Escobar y Zona Norte
                                        </h3>
                                        <p className="mt-1 text-sm text-slate-600">
                                            Consultá por la cobertura en tu
                                            localidad.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CÓMO SOLICITAR EL SERVICIO */}
                <section className="px-5 py-20 sm:px-8 sm:py-24">
                    <div className="mx-auto max-w-7xl">
                        <SectionTitle
                            eyebrow="Simple y directo"
                            title="¿Cómo solicitar un servicio?"
                            description="Compartinos los datos necesarios para entender tu problema y orientarte."
                        />

                        <div className="grid gap-6 md:grid-cols-3">
                            {[
                                {
                                    number: '01',
                                    title: 'Contanos el problema',
                                    description:
                                        'Explicanos si se trata de un pozo ciego, una cámara séptica o una obstrucción.',
                                },
                                {
                                    number: '02',
                                    title: 'Indicá tu ubicación',
                                    description:
                                        'Decinos en qué localidad está la propiedad para confirmar la cobertura.',
                                },
                                {
                                    number: '03',
                                    title: 'Coordiná la consulta',
                                    description:
                                        'Consultá por el servicio, su disponibilidad y las condiciones del trabajo.',
                                },
                            ].map((step) => (
                                <article
                                    key={step.number}
                                    className="rounded-2xl border border-slate-200 p-7"
                                >
                                    <span className="text-4xl font-black text-sky-200">
                                        {step.number}
                                    </span>

                                    <h3 className="mt-4 text-xl font-bold text-slate-900">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 leading-7 text-slate-600">
                                        {step.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SERVICIO DE PLOMERÍA RELACIONADO */}
                <section className="px-5 pb-20 sm:px-8 sm:pb-24">
                    <div className="mx-auto max-w-6xl">
                        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 sm:px-12 sm:py-14">
                            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />

                            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                                <div className="max-w-2xl">
                                    <p className="mb-3 text-sm font-bold uppercase tracking-widest text-sky-400">
                                        También te ayudamos con plomería
                                    </p>

                                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                        ¿Problemas con las cañerías?
                                    </h2>

                                    <p className="mt-4 leading-7 text-slate-300">
                                        Consultá por reparaciones de pérdidas
                                        de agua, cañerías y otras
                                        instalaciones sanitarias.
                                    </p>
                                </div>

                                <a
                                    href="/plomeria"
                                    className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-slate-900 transition hover:bg-sky-50"
                                >
                                    Ver plomería
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
                            title="Consultas sobre destapaciones"
                            description="Información útil para conocer nuestros servicios y saber cómo hacer una consulta."
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
                            <Truck size={32} />
                        </div>

                        <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
                            ¿Necesitás un servicio de desagote?
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-sky-50">
                            Escribinos, contanos qué sucede y consultá por
                            nuestros servicios de destapaciones en Escobar
                            y alrededores.
                        </p>

                        <a
                            href={whatsappUrl(
                                '¡Hola! Me gustaría hacer una consulta sobre sus servicios de destapacion: '
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-sky-800 transition hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-sky-600"
                        >
                            <MessageCircle size={21} />
                            Solicitar presupuesto
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

export default Destapacion
