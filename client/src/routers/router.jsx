import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../App"
import Home from "../screens/Home"
import Shop from "../screens/Shop"

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
            }
        ]
    }
])

export default router
