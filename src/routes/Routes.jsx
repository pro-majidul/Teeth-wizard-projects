import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/home/Home";
import Appoinment from './../pages/appoinment/Appoinment';
import Profile from './../pages/profile/Profile'
import AllTreatments from './../pages/all-treatments/AllTreatments';
import Error from "../components/Error";

const Routes = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        errorElement : <Error></Error>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : async ()=> {
                    const serviceRes = await fetch('/service.json');
                    const serviceData = await serviceRes.json();

                    const feedbackRes = await fetch('/happyclients.json');
                    const feedbackData = await feedbackRes.json();

                    return { serviceData , feedbackData}
                }
            },
            {
                path : '/profile',
                element : <Profile></Profile>
            },
            {
                path : '/appoinment',
                element : <Appoinment></Appoinment>
            },
            {
                path : '/teatments',
                element : <AllTreatments></AllTreatments>,
                loader : ()=> fetch('/service.json')


            }
        ]
    }
]);

export default Routes ;