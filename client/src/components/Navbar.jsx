import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import { FaXmark, FaBarsStaggered } from "react-icons/fa6"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    // toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    // nav items
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" }
    ]

    return (
        <header className="w-full py-6">
            <nav className="container">
                <div className="flex items-center justify-between gap-6 font-poppins">
                    {/* logo */}
                    <Link to="/">
                        <img src={logo} alt="logo" className="max-w-[90px]" />
                    </Link>

                    {/* nav items for large devices */}
                    <ul className="sm:flex justify-between gap-6 hidden">
                        {navItems.map(({ link, path }) => (
                            <Link
                                key={path}
                                to={path}
                                className="font-medium text-dark-purple cursor-pointer hover:text-light-purple"
                            >
                                {link}
                            </Link>
                        ))}
                    </ul>

                    <Link to={"/upload-book"} className="sm:block hidden btn">
                        Sell your books
                    </Link>

                    {/* menu button for mobile devices */}
                    <div className="sm:hidden z-50">
                        <button
                            onClick={toggleMenu}
                            className="focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <FaXmark className="size-5 text-dark-purple" />
                            ) : (
                                <FaBarsStaggered className="size-5 text-dark-purple" />
                            )}
                        </button>
                    </div>

                    {/* nav items for small devices  */}
                    <div
                        className={`sm:hidden bg-light-purple w-full min-h-screen z-40 ${
                            isMenuOpen
                                ? "fixed left-0 top-0 flex items-center justify-center"
                                : "hidden"
                        }`}
                    >
                        <ul className="flex flex-col items-center justify-between gap-6">
                            {navItems.map(({ link, path }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className="lowercase font-medium text-dark-purple cursor-pointer hover:text-white"
                                >
                                    {link}
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
