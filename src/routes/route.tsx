import App from "@/App";
import Login from "@/pages/Login";
import Task from "@/pages/task";
import Users from "@/pages/users";
import { createBrowserRouter } from "react-router-dom";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Task />
            },
            {
                path: '/users',
                element: <Users />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
])


export default routes