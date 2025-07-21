import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function AboutHome() {
    return (
        <section className="container mx-auto py-24 relative">
            <div className="flex flex-col lg:flex-row gap-8 relative">
                {/* Left side with image and stamp */}
                <div className="relative lg:w-1/2">
                    <Card className="relative overflow-hidden rounded-lg border-0 shadow-none">
                        <CardContent className="p-0">
                            <img
                                className="w-full h-auto object-cover rounded-2xl"
                                alt="Pool maintenance service"
                                src="https://tecdn.b-cdn.net/img/new/standard/people/002.webp"
                                placeholder="Pool maintenance worker in orange shirt"
                            />
                        </CardContent>
                    </Card>
                </div>

                {/* Right side content */}
                <div className="lg:w-1/2 flex flex-col justify-between">
                    {/* Heading section */}
                    <div className="space-y-4">
                        <h2 className="text-[40px] font-[500] tracking-[-3.6px] font-[Archivo]">
                            <span className="text-[#0f1011]">Welcome to </span>
                            <span className="text-[#8e8f95]">Jalsarah.</span>
                        </h2>

                        <h1 className="text-[70px] font-[500] tracking-[-3.6px] font-[Archivo]">
                            <span className="text-[#0f1011]">Simplify </span>
                            <span className="text-[#8e8f95]">Pool Maintenance</span>
                            <span className="text-[#0f1011]"> with Our Expert Services.</span>
                        </h1>
                    </div>

                    {/* Middle section with description */}
                    <div className="space-y-8 mt-8 lg:mt-0">
                        <p className="text-[18px] leading-[28px] tracking-[-0.4px] text-[#5b5b5f] font-normal font-['Archivo']">
                            Many health clubs, fitness centers and private clubs, such as the YMCA,
                            have pools used mostly for exercise or recreation. Many towns and cities
                            provide public pools. Many hotels have pools available for their guests
                            to use at their leisure.
                        </p>

                        {/* Service points */}
                        {/* <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-3.5 h-7 bg-[#0f1011]"></div>
                                <h4 className="text-[20px] leading-[28px] tracking-[-0.4px] text-[#0f1011] font-semibold font-[Archivo]">
                                    Regular Cleaning and Skimming.
                                </h4>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-3.5 h-7 bg-[#0f1011]"></div>
                                <h4 className="text-[20px] leading-[28px] tracking-[-0.4px] text-[#0f1011] font-semibold font-[Archivo]">
                                    Brushing and Vacuuming.
                                </h4>
                            </div>
                        </div> */}
                    </div>

                    {/* Button section */}
                    <div className="mt-8">
                        <div className="inline-flex items-center rounded-full overflow-hidden border border-[#0f1011] p-0.5">
                            <Button
                                variant="outline"
                                className="rounded-full bg-[#f1f1f1] hover:bg-[#e5e5e5] border-none h-auto py-4 px-[30px]"
                            >
                                <span className="font-semibold text-[#0f1011] text-xl tracking-[-0.2px]">
                                    More About Us
                                </span>
                            </Button>
                            <div className="flex items-center justify-center bg-[#f1f1f1] rounded-full p-3 h-[68px] w-[68px]">
                                <ArrowRight className="h-5 w-5 text-[#0f1011]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom section with brand statement */}
            <div className="mt-16 lg:w-1/2">
                <h2 className="text-[26px] leading-[48px] tracking-[-1px] font-light text-[#0f1011] font-[Archivo]">
                    Brand team building results after premium web-readiness value web
                    enabled e-business engage web enabled strategic.
                </h2>
            </div>
        </section>
    );
}
