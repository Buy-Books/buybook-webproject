import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../App"
import Home from "../screens/home/Home"
import Shop from "../screens/Shop"
import SingleBook from "../components/SingleBook"

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
                path: "/book/:id",
                element: <SingleBook />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/book/${params.id}`)
            }
        ]
    }
])

export default router
