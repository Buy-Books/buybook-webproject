import React from "react"
import heroImg from "../../assets/heroImg.svg"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="container flex flex-col gap-6 items-center justify-center  md:flex-row md:gap-16 md:min-h-[90vh]">
            <img
                src={heroImg}
                alt="a girl reading a book"
                className="w-[80%] sm:max-w-[400px]"
            />

            <div className="hero-desc-container flex flex-col items-center gap-3 md:items-start md:w-[50%]">
                <h1 className="text-2xl text-slate-600 font-medium text-center leading-tight md:text-3xl lg:text-4xl xl:text-6xl md:text-left">
                    Discover Your Next Chapter at{" "}
                    <span className="text-dark-purple">BuyBook.lk</span>
                </h1>
                <p className="text-base text-slate-500 text-center md:text-lg lg:text-xl md:text-left">
                    Where Every Page Holds a New Adventure!
                </p>
                <div className="flex mt-6 w-full lg:w-[80%]">
                    <Link to={"/shop"} className="btn">
                        Shop now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
