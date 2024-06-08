import React from "react"
import Hero from "./Hero"
import BestSellerBooks from "./BestSellerBooks"
import Features from "./Features"
import OtherBooks from "./OtherBooks"
import PromotionBanner from "./PromotionBanner"
import CustomerReview from "./CustomerReview"
import Contact from "./Contact"

const Home = () => {
    return (
        <div>
            <Hero />
            <BestSellerBooks />
            <Features />
            <PromotionBanner />
            <OtherBooks />
            <CustomerReview />
            <Contact />
        </div>
    )
}

export default Home
