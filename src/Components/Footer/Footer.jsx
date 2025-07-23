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
        { name: "Services", path: "#" },
        { name: "Gallery", path: "#" },
        { name: "Contact", path: "#" },
    ];

    return (
        <footer className="relative w-full max-w-[1200px] mx-auto h-auto px-4 py-8">
            <div className="flex gap-[20px] items-start content-stretch flex-row justify-between w-full">
                <div className="flex flex-col gap-6 max-w-[500px]">
                    <div className="text-4xl tracking-tight leading-snug font-semibold">
                        <p className="text-[#0f1011]">
                            Owning a <span className="text-[#8e8f95]">pool</span> is a fun part,<br />
                            let us handle the rest.
                        </p>
                    </div>
                    <Separator className="border-t border-[#8e8f95]" style={{ 'width': '500px' }} />

                    <NavigationMenu className="w-full max-w-[547px]">
                        <NavigationMenuList className="flex flex-wrap gap-x-2 gap-y-2 mr-25">
                            {navLinks.map((link, index) => (
                                <React.Fragment key={link.name}>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink className="text-sm text-black font-light">
                                            {link.name}
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    {index < navLinks.length - 1 && <span className="text-black">/</span>}
                                </React.Fragment>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex flex-col items-start w-full max-w-[520px]">
                    <Separator className="border-t border-[#8e8f95]" style={{ 'width': '520px' }} />
                    <div className="text-6xl font-bold mt-5 justify-start ">
                        <span className="text-[#0f1011]">Our </span>
                        <br />
                        <span className="text-[#8e8f95]">Gallery.</span>
                    </div>
                </div>
                <div className="text-center text-sm font-semibold text-black mt-15 -ml-96">
                    +1 999 888-77-64
                    <br /><br />
                    jalsarah@logoipsum.com
                </div>
            </div>
            <div className="flex justify-center mt-8 pl-70">
                <div className="relative w-[74px] h-[74px] bg-black rounded-full flex items-center justify-center rotate-[-34.7deg]">
                    <ArrowUpRight className="text-white w-6 h-6 rotate-[34.7deg]" />
                </div>
            </div>
            <div className="flex justify-end mt-6 text-sm text-black opacity-60 font-light gap-30">
                <div>Privacy</div>
                <div>Disclaimer</div>
                <div>© 2023 — Copyright</div>
            </div>



            <div className="absolute bottom-6 left-4 flex gap-4 mt-6">
                <Facebook className="siize-10" />
                <Twitter className="siize-10" />
                <Instagram className="siize-10" />
                <Linkedin className="siize-10" />
            </div>
        </footer>
    );
}
