import React from "react"
import "./Footer.css"
import { FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="w-full bg-dark-purple text-white py-12" id="footer">
            <div className="flex flex-col md:flex-row gap-12 justify-between container">
                <div className="footer-content-left">
                    <p>
                        Explore and find your favourite book here!!
                        <br />
                        Ready to win disounts
                    </p>

                    <div className="flex gap-3">
                        <FaYoutube />
                        <FaTwitter />
                        <FaFacebook />
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Shop</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul className="flex flex-col">
                        <li className="w-auto">+94 77555555</li>
                        <li className="w-auto">contact@buybooks.lk</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copy-right container pt-6">
                Copyright 2024 © BuyBooks.lk - All rights recieved{" "}
            </p>
        </div>
    )
}

export default Footer
