import React from "react"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"

const FooterNavigation = ({
    links = [],
    className = "",
    onNavClick = null
}) => {
    const handleLinkClick = (path) => {
        if (path && path.startsWith('#')) {
            const element = document.querySelector(path)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <NavigationMenu className={`w-full ${className}`}>
            <NavigationMenuList className="flex flex-wrap gap-x-4 gap-y-2">
                {links.map((link) => (
                    <NavigationMenuItem key={link.name}>
                        {/* Si no tiene path (null), usar onNavClick */}
                        {!link.path ? (
                            <NavigationMenuLink
                                className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer"
                                onClick={() => onNavClick && onNavClick(link)}
                            >
                                {link.name}
                            </NavigationMenuLink>
                        ) : link.path.startsWith('#') ? (
                            <NavigationMenuLink
                                className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer"
                                onClick={() => handleLinkClick(link.path)}
                            >
                                {link.name}
                            </NavigationMenuLink>
                        ) : (
                            <NavigationMenuLink asChild>
                                <Link
                                    to={link.path}
                                    className="text-sm text-gray-700 hover:text-gray-900"
                                    onClick={() => onNavClick && onNavClick(link)}
                                >
                                    {link.name}
                                </Link>
                            </NavigationMenuLink>
                        )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default FooterNavigation