import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function BenefitsOfAn() {
    const poolTypes = [
        { value: "indoor", label: "Indoor Pool" },
        { value: "outdoor", label: "Outdoor Pool" },
        { value: "infinity", label: "Infinity Pool" },
        { value: "lap", label: "Lap Pool" },
    ];

    return (
        <div className="container mx-auto px-4 py-12 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left section */}
                <div className="space-y-6">
                    <h2 className="text-[38px] font-[500] leading-[50px] tracking-[-1.52px] font-[Archivo] text-[#0f1011]">
                        We builds the best pools.
                    </h2>

                    <h1 className="text-[90px] font-[500] tracking-[-3.6px] font-[Archivo] leading-none">
                        <span className="text-[#0f1011]">Benefits of an </span>
                        <span className="text-[#8f9096]">Indoor Swimming Pool</span>
                        <span className="text-[#0f1011]"> Premise.</span>
                    </h1>
                </div>

                {/* Right section */}
                <div className="flex flex-col justify-center space-y-8">
                    <p className="text-[18px] font-[400] leading-[28px] tracking-[-0.18px] font-[Archivo] text-[#3b3b3d]">
                        Many health clubs, fitness centers and private clubs, such as the
                        YMCA, have pools used mostly for exercise or recreation. Many towns
                        and cities provide public pools. Many hotels have pools available
                        for their guests to use at their leisure. Universities typically
                        have pools for physical education.
                    </p>

                    <div className="flex">
                        <Button
                            variant="outline"
                            className="rounded-full h-auto py-4 px-8 bg-[#f1f1f1] text-[#0f1011] border-[#0f1011] hover:bg-[#e5e5e5] group"
                        >
                            <span className="font-[600] text-xl tracking-[-0.2px] font-[Archivo]">
                                Discover
                            </span>
                            <div className="ml-2 bg-[#f1f1f1] rounded-full p-2 group-hover:translate-x-1 transition-transform">
                                <ArrowRight className="h-4 w-6" />
                            </div>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Form section */}
            <Card className="mt-16 rounded-[40px] bg-neutral-200 overflow-hidden">
                <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Form */}
                        <div className="p-16 space-y-8">
                            <h3 className="text-[90px] font-[500] tracking-[-3.6px] font-[Archivo]">
                                <span className="text-[#3b3b3c]">Request a </span>
                                <span className="text-[#8e8f95]">Quote.</span>
                            </h3>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="pool-type"
                                        className="text-[20px] font-[400] leading-[32px] tracking-[-0.4px] font-[Archivo] text-[#3b3b3d]"
                                    >
                                        Pool Type
                                    </Label>
                                    <Select>
                                        <SelectTrigger className="w-full h-[69px] bg-white rounded-md shadow-[0px_2px_4px_rgba(0,0,0,0.1)] px-5">
                                            <SelectValue
                                                placeholder="Select Type"
                                                className="text-[18px] font-[400] leading-[28px] tracking-[-0.18px] font-[Archivo] text-[#8f9096]"
                                            />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {poolTypes.map((type) => (
                                                <SelectItem key={type.value} value={type.value}>
                                                    {type.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="name"
                                            className="text-[20px] font-[400] leading-[32px] tracking-[-0.4px] font-[Archivo] text-[#3b3b3d]"
                                        >
                                            Your Name
                                        </Label>
                                        <Input
                                            id="name"
                                            defaultValue="Anuradha"
                                            className="h-[69px] bg-white rounded-md shadow-[0px_2px_4px_rgba(0,0,0,0.1)] px-5 text-[18px] font-[400] leading-[28px] tracking-[-0.18px] font-[Archivo] text-[#8f9096]"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="email"
                                            className="text-[20px] font-[400] leading-[32px] tracking-[-0.4px] font-[Archivo] text-[#3b3b3d]"
                                        >
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            defaultValue="anu@sample.com"
                                            className="h-[69px] bg-white rounded-md shadow-[0px_2px_4px_rgba(0,0,0,0.1)] px-5 text-[18px] font-[400] leading-[28px] tracking-[-0.18px] font-[Archivo] text-[#8f9096]"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label
                                        htmlFor="message"
                                        className="text-[20px] font-[400] leading-[32px] tracking-[-0.4px] font-[Archivo] text-[#3b3b3d]"
                                    >
                                        Write Something
                                    </Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Your message"
                                        className="min-h-[154px] bg-white rounded-md px-5 py-4 text-[18px] font-[400] leading-[28px] tracking-[-0.18px] font-[Archivo] text-[#8f9096]"
                                    />
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Checkbox className="w-[27px] h-[27px] rounded-md border-2 border-[#bdbdbd] bg-white" />
                                    <Label
                                        htmlFor="terms"
                                        className="text-[18px] font-[400] leading-[28px] tracking-[-0.18px] font-[Archivo] text-[#3b3b3d]"
                                    >
                                        I agree that my submitted data is being collected and
                                        stored.
                                    </Label>
                                </div>

                                <Button
                                    variant="outline"
                                    className="rounded-full h-auto py-4 px-8 bg-[#0f1011] text-white hover:bg-[#0f1011]/90 group"
                                >
                                    <span className="font-[600] text-xl tracking-[-0.2px] font-[Archivo] text-[#f1f1f1]">
                                        Submit
                                    </span>
                                    <div className="ml-2 bg-[#f1f1f1] rounded-full p-2 group-hover:translate-x-1 transition-transform">
                                        <ArrowRight className="h-4 w-6 text-[#0f1011]" />
                                    </div>
                                </Button>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative h-full min-h-[400px]">
                            <img
                                src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp" alt="Luxury swimming pool with lounge area"
                                className="absolute bottom-0 right-5 w-full h-full object-cover rounded-3xl"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
