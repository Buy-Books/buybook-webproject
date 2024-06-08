/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Link } from "react-router-dom"

const PromotionBanner = () => {
    return (
        <div className="w-full bg-dark-purple">
            <div className="container my-16 py-6 flex flex-col items-center  justify-between  gap-4 lg:flex-row lg:items-start md:py-20">
                <div className={`img-container h-[300px] md:h-[500px]`}></div>
                <div className="flex flex-col text-center text-white gap-4 w-full lg:w-1/2 lg:text-left">
                    <h2 className="text-2xl font-medium md:text-3xl">
                        🌟 Exclusive Promotion: Elevate Your Reading Experience!
                    </h2>
                    {/* <p>
                        Discover more for less with our exclusive promotion at
                        BuyBook.lk! For a limited time, indulge in literary
                        delights at special prices and exciting discounts.
                        Whether you're expanding your collection or searching
                        for the perfect gift, now is the ideal moment to dive
                        into a world of savings.
                    </p> */}
                    <p>
                        📚Buy One, Get One Free: Double the joy with our 'Buy
                        One, Get One Free' offer on selected titles. Explore
                        diverse genres and bring home two captivating books for
                        the price of one.
                    </p>{" "}
                    <p>
                        🎁 Bundle Deals: Unlock bundled savings with our curated
                        book bundles. From genre-specific packs to author-themed
                        collections, these deals are designed to enhance your
                        reading experience while keeping your budget in mind.
                    </p>
                    <p>
                        🚀Limited-Time Offers: Act fast to seize our
                        limited-time offers on bestselling titles. Don't miss
                        the chance to add sought-after books to your library at
                        unbeatable prices.
                    </p>
                    <p>
                        📢Stay Tuned for Flash Sales: Keep an eye out for our
                        surprise flash sales! Follow us on social media and
                        subscribe to our newsletter to be the first to know
                        about exclusive promotions, giveaways, and more.
                    </p>{" "}
                    {/* <p>
                        At BuyBook.lk, we believe that everyone deserves access
                        to great literature. Take advantage of our promotions
                        and immerse yourself in a world of savings and stories.
                        Happy Reading and Happy Savings!
                    </p>{" "}
                    <p>The BuyBook.lk Team 📖✨</p> */}
                    <Link
                        to="/shop"
                        className="btn bg-white text-dark-purple font-medium w-full xl:w-1/5 text-center mt-6"
                    >
                        Shop now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PromotionBanner
