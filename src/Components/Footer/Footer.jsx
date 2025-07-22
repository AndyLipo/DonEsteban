import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
    ArrowUpRight,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
} from "lucide-react";
import React from "react";

export default function Footer() {
    const navLinks = [
        { name: "Home", path: "#" },
        { name: "About Us", path: "#" },
        { name: "Blog", path: "#" },
        { name: "Services", path: "#" },
        { name: "Pricing", path: "#" },
        { name: "Gallery", path: "#" },
        { name: "Contacts", path: "#" },
    ];

    return (
        <footer className="relative w-full max-w-[1500px] h-auto py-8">
            <div className="text-4xl tracking-tight leading-snug font-semibold">
                <span className="text-[#0f1011]">Owning a </span>
                <span className="text-[#8e8f95]">pool</span>
                <span className="text-[#0f1011]"> is a fun part, <br />let us handle the rest.</span>
                <hr className="w-150 border-2 text-[#0f1011]" />
            </div>

            <Separator className="w-[687px] h-0.5 my-8 bg-primary-text-h1" />

            <NavigationMenu className="w-full max-w-[547px] mt-6">
                <NavigationMenuList className="flex flex-wrap gap-[10px_24px]">
                    {navLinks.map((link, index) => (
                        <React.Fragment key={link.name}>
                            <NavigationMenuItem className="inline-flex items-center">
                                <NavigationMenuLink className="text-lg tracking-wide leading-6 italic font-medium text-primary-text-h1">
                                    {link.name}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            {index < navLinks.length - 1 && (
                                <span className="font-extralight text-background-primary-03 text-xl font-[Bricolage_Grotesque-ExtraLight]">/</span>
                            )}
                        </React.Fragment>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>

            <div className="flex justify-between w-full max-w-[840px] mt-12 ml-auto">
                <div className="flex flex-col w-full gap-8">
                    <Separator className="w-full h-0.5 bg-primary-text-h1 opacity-50" />

                    <div className="flex items-start justify-between">
                        <div className="w-[253px]">
                            <div className="text-base tracking-wide leading-5 italic font-semibold">
                                <span className="text-[#0f1011]">Our </span>
                                <span className="text-[#8e8f95]">Gallery.</span>
                            </div>
                        </div>

                        <div className="w-[253px]">
                            <div className="flex flex-col gap-[22px]">
                                <div className="text-lg tracking-wide leading-6 italic font-semibold text-primary-text-h1">
                                    +1 999 888-77-64
                                </div>
                                <div className="text-lg tracking-wide leading-6 italic font-semibold text-primary-text-h1">
                                    jalsarah@logoipsum.com
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end w-[182px]">
                            <div className="relative w-[127.07px] h-[59.85px]">
                                <div className="absolute w-[55px] h-[60px] bg-primary-blue rounded-[8.2px] border-[2.46px] border-solid border-[#d1d1d1] flex items-center justify-center">
                                    <span className="text-white font-bold">JAL</span>
                                </div>
                                <span className="absolute right-0 top-1/2 -translate-y-1/2 font-bold">
                                    SARAH
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="relative self-end">
                        <div className="relative w-[73.79px] h-[73.79px] bg-primary-text-h1 rounded-full flex items-center justify-center rotate-[-34.70deg]">
                            <ArrowUpRight className="w-[26px] h-[22px] text-white rotate-[34.70deg]" />
                        </div>
                    </div>

                    <div className="flex justify-between w-full mt-auto">
                        <div className="opacity-60 font-normal text-primary-text-h1 text-[15px] tracking-[-0.15px] leading-7 font-['Archivo']">
                            Privacy
                        </div>
                        <div className="opacity-60 font-normal text-primary-text-h1 text-[15px] tracking-[-0.15px] leading-7 font-['Archivo']">
                            Disclaimer
                        </div>
                        <div className="opacity-60 font-normal text-primary-text-h1 text-[15px] text-right tracking-[-0.15px] leading-7 font-['Archivo']">
                            © 2023 — Copyright
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-[3px] flex gap-4">
                <Facebook className="w-6 h-6" />
                <Twitter className="w-6 h-6" />
                <Instagram className="w-6 h-6" />
                <Linkedin className="w-6 h-6" />
            </div>
        </footer>
    );
}
