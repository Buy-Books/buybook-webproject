import React from "react"
import { useLoaderData, Link } from "react-router-dom"
import RecentBooks from "./RecentBooks"

const SingleBook = () => {
    const {
        _id,
        bookTitle,
        imageURL,
        authorName,
        bookDescription,
        category,
        bookPDF,
        price
    } = useLoaderData()

    return (
        <div>
            <div className="container flex gap-6 items-center justify-center mt-6 md:gap-16 md:min-h-[80vh]">
                <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-12">
                    <img
                        src={imageURL}
                        alt=""
                        className="w-[60%] md:max-w-[400px]"
                    />
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <h2 className="text-xl text-center text-dark-purple font-medium sm:text-left md:text-2xl">
                            {bookTitle}
                        </h2>
                        <p>by {authorName}</p>
                        <p>{bookDescription}</p>
                        <p>category: {category}</p>
                        <p>Rs.{price}.00</p>
                        <Link to={bookPDF} target="/blank" className="btn">
                            Buy now
                        </Link>
                    </div>
                </div>
            </div>

            <RecentBooks />
        </div>
    )
}

export default SingleBook
