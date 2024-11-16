import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>
            <main>
                <section className="min-h-[calc(100vh-232px)] w-11/12 mx-auto ">
                    <Outlet></Outlet>
                </section>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;