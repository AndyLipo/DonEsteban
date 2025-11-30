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
    onNavClick = null,
    isMobile = false // 👈 Nuevo prop para diferenciar mobile/desktop
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
            <NavigationMenuList className={
                isMobile
                    ? "flex flex-col gap-y-1 w-full" // Mobile: vertical
                    : "flex flex-wrap gap-x-6 gap-y-2" // Desktop: horizontal
            }>
                {links.map((link) => (
                    <NavigationMenuItem key={link.name} className={isMobile ? "w-full" : ""}>
                        {/* Si no tiene path (null), usar onNavClick */}
                        {!link.path ? (
                            <NavigationMenuLink
                                className={
                                    isMobile
                                        ? "block w-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors cursor-pointer"
                                        : "text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                                }
                                onClick={() => onNavClick && onNavClick(link)}
                            >
                                {link.name}
                            </NavigationMenuLink>
                        ) : link.path.startsWith('#') ? (
                            <NavigationMenuLink
                                className={
                                    isMobile
                                        ? "block w-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors cursor-pointer"
                                        : "text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                                }
                                onClick={() => handleLinkClick(link.path)}
                            >
                                {link.name}
                            </NavigationMenuLink>
                        ) : (
                            <NavigationMenuLink asChild>
                                <Link
                                    to={link.path}
                                    className={
                                        isMobile
                                            ? "block w-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors"
                                            : "text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                                    }
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