import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../App"
import Home from "../screens/home/Home"
import Shop from "../screens/Shop"
import About from "../screens/About"
import SingleBook from "../components/SingleBook"
import UploadBook from "../screens/uploadBook/UploadBook"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/book/:id",
                element: <SingleBook />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/book/${params.id}`)
            },
            {
                path: "/upload-book",
                element: <UploadBook />
            }
        ]
    }
])

export default router
