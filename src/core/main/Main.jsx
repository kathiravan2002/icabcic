import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";


export default function Main() {
    return (

        <div>
            <Header />

            <main className={`min-h-[85vh]  max-w-screen`}>

                <Outlet />
            </main>
            <Footer/>
        </div>


    );
}
