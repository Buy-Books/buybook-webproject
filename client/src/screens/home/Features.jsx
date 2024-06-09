/* eslint-disable react/no-unescaped-entities */
import React from "react"
import featureImg from "../../assets/features.svg"

const Features = () => {
    return (
        <div className="container my-36">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="features-description flex flex-col gap-6 md:gap-10 md:w-1/2">
                    <h2 className="text-2xl text-dark-purple text-center font-medium md:text-3xl lg:text-4xl">
                        Explore and find your favorite book at BuyBooks.lk -
                        Your Haven for Literary Discoveries!
                    </h2>
                    <p className="text-base text-slate-500">
                        Embark on a literary journey like never before at
                        BuyBook.lk. Our curated selection invites you to
                        discover, explore, and find your favorite book. From
                        timeless classics to contemporary gems, our collection
                        caters to every reader's taste. Dive into the pages of
                        enchanting stories and make BuyBook.lk your ultimate
                        destination for bookish joy!
                    </p>
                    <div className="stats flex gap-4 justify-center md:mt-6 md:gap-12">
                        <div className="stat-item flex flex-col items-center">
                            <h3 className="text-2xl text-dark-purple font-semibold md:text-3xl">
                                400+
                            </h3>
                            <p className="text-light-purple text-lg text-center md:text-lg">
                                Book listing
                            </p>
                        </div>
                        <div className="stat-item flex flex-col items-center">
                            <h3 className="text-2xl text-dark-purple font-semibold md:text-3xl">
                                500+
                            </h3>
                            <p className="text-light-purple text-lg text-center md:text-lg">
                                Regular customers
                            </p>
                        </div>
                        <div className="stat-item flex flex-col items-center">
                            <h3 className="text-2xl text-dark-purple font-semibold md:text-3xl">
                                1K+
                            </h3>
                            <p className="text-light-purple text-sm text-center md:text-lg">
                                PDF downloaded
                            </p>
                        </div>
                    </div>
                </div>
                <img src={featureImg} alt="" className="w-[80%] md:w-1/2" />
            </div>
        </div>
    )
}

export default Features
