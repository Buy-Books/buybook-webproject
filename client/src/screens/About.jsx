/* eslint-disable react/no-unescaped-entities */
import React from "react"
import image from "../assets/About.jpg"
import "./About.css"

const About = () => {
    return (
        <div className="about-container items-start justify-start flex flex-col md:flex-row gap-8 p-6">
            <div className="about-left flex self-start">
                <img
                    src={image}
                    alt="About us"
                    className="w-full h-auto rounded-lg"
                />
            </div>
            <div className="about-right flex-1 flex flex-col justify-center">
                <h1 className="text-2xl text-slate-600 font-medium text-center leading-tight md:text-3xl lg:text-4xl xl:text-6xl md:text-left">
                    Welcome to BuyBooks.lk!
                </h1>
                <p className="text-base text-slate-500 text-center md:text-lg lg:text-xl md:text-left mt-4">
                    Your number one source for all the books. We're dedicated to
                    giving you the best quality and a variety of books.
                </p>
                <p className="text-base text-slate-500 text-center md:text-lg lg:text-xl md:text-left mt-4">
                    At BuyBooks.lk, we believe in the transformative power of
                    books. Our mission is to connect readers with the perfect
                    book for their journey, whether it's a classic piece of
                    literature, the latest bestseller, or an undiscovered gem
                    waiting to be found.
                </p>
                <p className="text-base text-slate-500 text-center md:text-lg lg:text-xl md:text-left mt-4">
                    Founded in 2024, BuyBooks.lk started as a humble idea: to
                    create a space where book lovers could come together and
                    easily find and purchase their favorite books. We noticed a
                    gap in the market for a user-friendly, comprehensive online
                    bookstore in Sri Lanka and decided to fill that void.
                </p>
                <p className="text-base text-slate-500 text-center md:text-lg lg:text-xl md:text-left mt-4">
                    Our catalog features a diverse range of genres including
                    fiction, non-fiction, academic texts, children’s books, and
                    much more. We are constantly updating our inventory to
                    include the latest releases and timeless classics.
                </p>
                <p className="text-base text-slate-500 text-center md:text-lg lg:text-xl md:text-left mt-4">
                    Designed with the user in mind, our website is easy to
                    navigate, responsive, and secure. Whether you're browsing on
                    your desktop at home or on your phone during a commute,
                    BuyBooks.lk offers a seamless shopping experience.
                </p>
                <p className="text-base text-slate-500 text-center md:text-lg lg:text-xl md:text-left mt-4">
                    Our mission is to foster a love of reading by making books
                    accessible to everyone. We are dedicated to providing a
                    platform where readers can discover new books, connect with
                    authors, and share their love for reading with a like-minded
                    community.
                </p>
                <p className="text-base text-slate-500 text-center md:text-lg lg:text-xl md:text-left mt-4">
                    We envision a world where everyone has the opportunity to
                    explore the wealth of knowledge and entertainment that books
                    provide. By continually expanding our catalog and enhancing
                    our services, we aim to be the leading online bookstore in
                    Sri Lanka.
                </p>
                <p className="text-base text-slate-500 text-center md:text-lg lg:text-xl md:text-left mt-4">
                    Have questions, suggestions, or just want to chat about your
                    favorite book? We'd love to hear from you! Reach out to us
                    at{" "}
                    <a
                        href="mailto:contact@buybooks.lk"
                        className="text-blue-500"
                    >
                        contact@buybooks.lk
                    </a>{" "}
                    or follow us on our social media channels for the latest
                    updates and promotions.
                </p>
            </div>
        </div>
    )
}

export default About
