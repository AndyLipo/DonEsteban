
import React from "react"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import RatedHome from "./RatedHome"

export default function Testimonials() {
    return (
        <section className="container mx-auto py-16 px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-neutral-900 tracking-wide">
                            Testimonials.
                        </h2>
                        <h1 className="text-5xl font-bold text-neutral-900 leading-tight tracking-tight max-w-[663px]">
                            Our Clients Feedback.
                        </h1>
                    </div>

                    <div className="mt-auto">
                        <p className="text-lg font-medium text-neutral-500 leading-relaxed max-w-[364px] mb-12">
                            We specialize in providing top-notch pool service and maintenance
                            to ensure your pool remains a safe, clean, and inviting space for
                            relaxation and recreation.
                        </p>
                    </div>
                    <Link
                        to="/about"
                        className="ml-20 z-10 bg-black text-lime-400 size-20 rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-lg"
                    >
                        <ArrowRight size={32} />
                    </Link>
                </div>

                {/* Right Column */}
                <RatedHome />
            </div>
        </section>
    )
}
