/* eslint-disable react/no-unescaped-entities */
import React from "react"

const CustomerReview = () => {
    return (
        <section className="bg-white -900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="text-2xl text-dark-purple text-center font-medium mb-4 lg:text-3xl ">
                        Testimonials
                    </h2>
                    <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">
                        See what our customers are saying about BuyBooks.lk:
                    </p>
                </div>
                <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r -800 -700">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                            <h3 className="text-lg font-semibold text-dark-purple ">
                                Seamless integration and excellent support
                            </h3>
                            <p className="my-4">
                                "Integrating BuyBooks.lk into our e-commerce
                                platform was incredibly smooth. The provided
                                documentation was comprehensive, and any
                                questions we had were promptly answered by their
                                support team. Highly recommend!"
                            </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img
                                className="w-9 h-9 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                                alt="profile picture"
                            />
                            <div className="space-y-0.5 font-medium  text-left">
                                <div className="text-slate-700">
                                    Bonnie Green
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 -800 -700">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                            <h3 className="text-lg font-semibold text-dark-purple ">
                                Solid foundation for our online bookstore
                            </h3>
                            <p className="my-4">
                                "BuyBooks.lk offers a comprehensive set of
                                features and components that have formed the
                                backbone of our online bookstore. From seamless
                                checkout experiences to intuitive product
                                browsing, it's been instrumental in our
                                success."
                            </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img
                                className="w-9 h-9 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                                alt="profile picture"
                            />
                            <div className="space-y-0.5 font-medium  text-left">
                                <div className="text-slate-700">
                                    Roberta Casas
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r -800 -700">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                            <h3 className="text-lg font-semibold text-dark-purple ">
                                Unparalleled user experience
                            </h3>
                            <p className="my-4">
                                "BuyBooks.lk has transformed the way our
                                customers interact with our bookstore. The user
                                experience is unparalleled, with intuitive
                                navigation and responsive design. Our customers
                                love it!"
                            </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img
                                className="w-9 h-9 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                alt="profile picture"
                            />
                            <div className="space-y-0.5 font-medium  text-left">
                                <div className="text-slate-700">Jese Leos</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 -400">
                            <h3 className="text-lg font-semibold text-dark-purple ">
                                Highly recommended for online retailers
                            </h3>
                            <p className="my-4">
                                "As an online retailer, BuyBooks.lk has been a
                                game-changer for us. The features it provides
                                out of the box, combined with its flexibility
                                for customization, make it an ideal solution for
                                any e-commerce business."
                            </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img
                                className="w-9 h-9 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                                alt="profile picture"
                            />
                            <div className="space-y-0.5 font-medium  text-left">
                                <div className="text-slate-700">
                                    Joseph McFall
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
                <div className="text-center">
                    <a href="#" className="btn">
                        Show more...
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CustomerReview
