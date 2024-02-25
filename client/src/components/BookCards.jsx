import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Link } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Pagination } from "swiper/modules"

const BookCards = ({ headline, books }) => {
    return (
        <div className="my-16 container">
            <h2 className="text-2xl text-dark-purple text-center font-medium mb-12 lg:text-3xl">
                {headline}
            </h2>

            {/* cards  */}
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50
                        }
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {books.map((book) => (
                        <SwiperSlide key={book._id} className="mb-8">
                            <Link to={`/book/${book._id}`}>
                                <div className="flex items-center justify-center">
                                    <img
                                        src={book.imageURL}
                                        alt=""
                                        className="h-[300px]"
                                    />
                                </div>
                                <div className="text-center flex flex-col items-center">
                                    <h3 className="text-lg text-dark-purple font-medium">
                                        {book.bookTitle}
                                    </h3>
                                    <p className="text-base text-slate-500">
                                        {book.authorName}
                                    </p>
                                    <div className=" bg-dark-purple hover:bg-light-purple text-white flex items-center justify-center px-6 py-2 gap-3 w-[80%] transition-all duration-300 ease-in-out rounded-md">
                                        <p>Rs.{book.price}.00 </p>
                                        <FaCartShopping />
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default BookCards
