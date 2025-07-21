import React from "react";

export const TrustSupport = () => {
    return (
        <section className="w-full bg-zinc-200 py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
                {/* Item 1 */}
                <div className="relative bg-white p-8 rounded-2xl shadow-lg flex flex-col items-start">
                    <div className="mb-4">
                        <span className="text-6xl font-bold text-neutral-700">25</span>
                        <p className="text-xl text-neutral-700 font-medium mt-2">
                            years of experience.
                        </p>
                    </div>
                    <p className="text-neutral-700 text-base">
                        For over 25 years we have been offering only the best products and
                        services.
                    </p>
                </div>

                {/* Item 2 */}
                <div className="relative bg-white p-8 rounded-2xl shadow-lg flex flex-col items-start">
                    <div className="mb-4">
                        <p className="text-xl text-neutral-700 font-medium">
                            Quality Products deliver by us.
                        </p>
                    </div>
                    <p className="text-neutral-700 text-base">
                        Your satisfaction is our priority. If you're not completely happy
                        with our service, we'll work.
                    </p>
                </div>

                {/* Item 3 */}
                <div className="relative bg-white p-8 rounded-2xl shadow-lg flex flex-col items-start">
                    <div className="mb-4">
                        <p className="text-xl text-neutral-700 font-medium">
                            24/7 hours clients support.
                        </p>
                    </div>
                    <p className="text-neutral-700 text-base">
                        We offer flexible service plans that can be tailored to your
                        specific preferences and pool.
                    </p>
                </div>
            </div>
        </section>
    );
};
