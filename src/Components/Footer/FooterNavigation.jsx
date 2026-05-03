import React from "react"
import { Link } from "react-router-dom"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu"

const FooterNavigation = ({
    links = [],
    className = "",
    onNavClick = null,
    isMobile = false
}) => {
    return (
        <NavigationMenu className={`w-full ${className}`}>
            <NavigationMenuList className={
                isMobile
                    ? "flex flex-col gap-y-1 w-full"
                    : "flex flex-wrap gap-x-6 gap-y-2"
            }>
                {links.map((link) => (
                    <NavigationMenuItem key={link.name} className={isMobile ? "w-full" : ""}>
                        {!link.path ? (
                            <NavigationMenuLink
                                href="/#contact-form"
                                className={
                                    isMobile
                                        ? "block w-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors cursor-pointer"
                                        : "text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                                }
                                onClick={(e) => {
                                    e.preventDefault()
                                    onNavClick && onNavClick(link)
                                    window.history.replaceState(null, '', window.location.pathname)
                                }}
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