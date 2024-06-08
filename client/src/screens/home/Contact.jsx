import React from "react"

const Contact = () => {
    return (
        <section className="bg-white " id="contact">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="text-2xl text-dark-purple text-center font-medium mb-4 lg:text-3xl ">
                    Contact Us
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
                    Got a technical issue? Want to send feedback about a beta
                    feature? Need details about our Business plan? Let us know.
                </p>
                <form action="#" className="space-y-8">
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="border-dark-purple  rounded border-2 outline-none p-1.5 w-full focus:ring-2 focus:ring-light-purple focus:outline-none   focus:border-light-purple"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="subject"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="border-dark-purple  rounded border-2 outline-none p-1.5 w-full focus:ring-2 focus:ring-light-purple focus:outline-none   focus:border-light-purple"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Your message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="border-dark-purple  rounded border-2 outline-none p-1.5 w-full focus:ring-2 focus:ring-light-purple focus:outline-none   focus:border-light-purple"
                        />
                    </div>
                    <a href="#" className="btn block text-center max-w-[200px]">
                        Send message
                    </a>
                </form>
            </div>
        </section>
    )
}

export default Contact
