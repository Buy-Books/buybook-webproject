/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6"

const Shop = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/all-books")
            .then((res) => res.json())
            .then((data) => {
                setBooks(data)
            })
    }, [])

    return (
        <div className="my-16 container">
            <h2 className="text-2xl text-dark-purple text-center font-medium mb-12 lg:text-3xl">
                All books are here
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 md:gap-y-20">
                {books.map((book) => (
                    <Link to={`/book/${book._id}`}>
                        <div className="py-6 hover:bg-violet-100 transition-all duration-300 ease-in-out">
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
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Shop
