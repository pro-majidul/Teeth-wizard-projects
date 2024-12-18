import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/home/Home";
import Appoinment from './../pages/appoinment/Appoinment';
import Profile from './../pages/profile/Profile'
import AllTreatments from './../pages/all-treatments/AllTreatments';
import Error from "../components/Error";
import Details from "../pages/Service-Details/Details";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Private from "../components/private/Private";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    const serviceRes = await fetch('/service.json');
                    const serviceData = await serviceRes.json();

                    const feedbackRes = await fetch('/happyclients.json');
                    const feedbackData = await feedbackRes.json();

                    return { serviceData, feedbackData }
                }
            },
            {
                path: '/profile',
                element: <Private><Profile></Profile></Private>
            },
            {
                path: '/appoinment',
                element: <Private><Appoinment></Appoinment></Private>
            },
            {
                path: '/teatments',
                element: <AllTreatments></AllTreatments>,
                loader: () => fetch('/service.json')


            },
            {
                path: '/details/:id',
                element: <Private>
                    <Details></Details>
                </Private>,
                loader: async ({ params }) => {
                    const res = await fetch('/service.json')
                    const data = await res.json()
                    const singleData = data.find(item => item.id == parseInt(params.id));
                    return singleData
                }
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default Routes;