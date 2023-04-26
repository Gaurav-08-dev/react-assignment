import Home from "./Components/Home";
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Problem from "./Components/Problem"
import Allproblem from "./Components/Allproblems"
import Error from "./Components/Error"

const AllRoutes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: "/signup",
        component: Signup,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/problemset/all",
        component: Allproblem,
    },
    {
        path: "/problems/:problem_slug",
        component: Problem,
    },
    {
        path:"*",
        component:Error
    }
];

export default AllRoutes;
