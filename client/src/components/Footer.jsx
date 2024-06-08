import React from "react"
import './Footer.css'
import { FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa"


const Footer = () => {
    return (
    
    <div className="footer" id ='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
           
                <p>Explore and find your favourite book here!!
                    <br />Ready to win disounts
                </p>
                   
                     <FaYoutube/>
                    <FaTwitter/>
                    <FaFacebook/>
                    

                
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Shop</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94 772785962</li>
                    <li>BuyBooks@gmail.com</li>
                </ul>
            </div>
        </div>
    <hr />
    <p className="footer-copy-right">Copyright 2024 © BuyBook.com - All rights recieved </p>
    </div>
)
}

export default Footer
