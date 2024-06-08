import React from "react"

const CustomerReview = () => {
    return <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Customer Reviews</h2>
          <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Discover what our customers have to say about their experience with BuyBooks.lk</p>
      </div> 
      <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">An Amazing Selection of Books!</h3>
                  <p class="my-4">"I've been a book lover for years, and I must say, BuyBooks.lk has one of the most impressive selections I've ever seen! From classic literature to the latest bestsellers, they have it all. The browsing experience is smooth, and the prices are great. I highly recommend BuyBooks.lk to all book enthusiasts!"</p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                  <img class="w-9 h-9 rounded-full" src="https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/65a752dbfb2186598946bfe7_Phoenix%20Baker-p-500.jpg" alt="profile picture">
                  <div class="space-y-0.5 font-medium dark:text-white text-left">
                      <div>John Doe</div>
                      <div class="text-sm font-light text-gray-500 dark:text-gray-400">Book Lover</div>
                  </div>
              </figcaption>    
          </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Convenient and Easy to Use!</h3>
                  <p class="my-4">"I recently discovered BuyBooks.lk, and it has quickly become my favorite online bookstore! The website is beautifully designed, and finding books is a breeze. The checkout process is seamless, and I love how quickly my orders arrive. BuyBooks.lk has made buying books online a delightful experience!"</p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                  <img class="w-9 h-9 rounded-full" src="https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/65a752434636d55ddc1ba159_Natali%20Craig-p-500.png" alt="profile picture">
                  <div class="space-y-0.5 font-medium dark:text-white text-left">
                      <div>Jane Smith</div>
                      <div class="text-sm font-light text-gray-500 dark:text-gray-400">Bookworm</div>
                  </div>
              </figcaption>    
          </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Exceptional Customer Service!</h3>
                  <p class="my-4">"I had a fantastic experience shopping at BuyBooks.lk! Not only do they have an extensive collection of books, but their customer service is also top-notch. I had a question about my order, and their support team was quick to respond and very helpful. I will definitely be a returning customer!"</p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                  <img class="w-9 h-9 rounded-full" src="https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/65a752b0fec11d8c4c9beaf7_Olivia%20Rhye-p-500.jpg" alt="profile picture">
                  <div class="space-y-0.5 font-medium dark:text-white text-left">
                      <div>Emily Johnson</div>
                      <div class="text-sm font-light text-gray-500 dark:text-gray-400">Book Enthusiast</div>
                  </div>
              </figcaption>    
          </figure>
      </div>
      <div class="text-center">
          <a href="#" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">See More Reviews</a> 
      </div>
</section>

}

export default CustomerReview
