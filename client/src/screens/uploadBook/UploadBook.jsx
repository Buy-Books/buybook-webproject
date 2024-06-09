import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"
const UploadBook = () => {
    const [formData, setFormData] = useState({
        bookTitle: "",
        authorName: "",
        imageURL: "",
        category: "",
        bookDescription: "",
        bookPDF: "",
        price: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Handle form submission logic here
        const response = await axios.post(
            "http://localhost:5000/upload-book",
            formData
        )
        console.log(response.data)
        console.log(formData)
        setFormData({
            bookTitle: "",
            authorName: "",
            imageURL: "",
            category: "",
            bookDescription: "",
            bookPDF: "",
            price: ""
        })

        toast.success("Book upload success!🎉")

        navigate("/shop")
    }

    return (
        <div className="mb-12 px-8">
            <h2 className="text-2xl text-dark-purple text-center font-medium mb-12 lg:text-3xl">
                Upload Book
            </h2>
            <form
                onSubmit={handleSubmit}
                className="flex mx-auto flex-col gap-4 w-full max-w-[600px]"
            >
                <div className="form-group">
                    <label
                        htmlFor="bookTitle"
                        className="font-semibold text-gray-600"
                    >
                        Book Title:
                    </label>
                    <input
                        type="text"
                        id="bookTitle"
                        name="bookTitle"
                        value={formData.bookTitle}
                        onChange={handleChange}
                        className="border-dark-purple  rounded border-2 outline-none p-1.5 w-full focus:ring-2 focus:ring-light-purple focus:outline-none   focus:border-light-purple"
                    />
                </div>
                <div className="form-group">
                    <label
                        htmlFor="authorName"
                        className="font-semibold text-gray-600"
                    >
                        Author Name:
                    </label>
                    <input
                        type="text"
                        id="authorName"
                        name="authorName"
                        value={formData.authorName}
                        onChange={handleChange}
                        className="border-dark-purple  rounded border-2 outline-none p-1.5 w-full focus:ring-2 focus:ring-light-purple focus:outline-none   focus:border-light-purple"
                    />
                </div>
                <div className="form-group">
                    <label
                        htmlFor="imageURL"
                        className="font-semibold text-gray-600"
                    >
                        Image URL:
                    </label>
                    <input
                        type="text"
                        id="imageURL"
                        name="imageURL"
                        value={formData.imageURL}
                        onChange={handleChange}
                        className="border-dark-purple  rounded border-2 outline-none p-1.5 w-full focus:ring-2 focus:ring-light-purple focus:outline-none   focus:border-light-purple"
                    />
                </div>
                <div className="form-group">
                    <label
                        htmlFor="category"
                        className="font-semibold text-gray-600"
                    >
                        Category:
                    </label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="border-dark-purple  rounded border-2 outline-none p-1.5 w-full focus:ring-2 focus:ring-light-purple focus:outline-none   focus:border-light-purple"
                    />
                </div>
                <div className="form-group">
                    <label
                        htmlFor="bookDescription"
                        className="font-semibold text-gray-600"
                    >
                        Book Description:
                    </label>
                    <textarea
                        id="bookDescription"
                        name="bookDescription"
                        value={formData.bookDescription}
                        onChange={handleChange}
                        className="border-dark-purple  rounded border-2 outline-none p-1.5 w-full focus:ring-2 focus:ring-light-purple focus:outline-none   focus:border-light-purple"
                    />
                </div>
                <div className="form-group">
                    <label
                        htmlFor="bookPDF"
                        className="font-semibold text-gray-600"
                    >
                        Book PDF:
                    </label>
                    <input
                        type="text"
                        id="bookPDF"
                        name="bookPDF"
                        value={formData.bookPDF}
                        onChange={handleChange}
                        className="border-dark-purple  rounded border-2 outline-none p-1.5 w-full focus:ring-2 focus:ring-light-purple focus:outline-none   focus:border-light-purple"
                    />
                </div>
                <div className="form-group">
                    <label
                        htmlFor="price"
                        className="font-semibold text-gray-600"
                    >
                        Price:
                    </label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="border-dark-purple  rounded border-2 outline-none p-1.5 w-full focus:ring-2 focus:ring-light-purple focus:outline-none   focus:border-light-purple"
                    />
                </div>
                <button type="submit" className="btn block col-span-2">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default UploadBook
