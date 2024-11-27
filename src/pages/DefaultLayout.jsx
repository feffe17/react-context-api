import { Outlet } from "react-router-dom";
import AppHeader from "../assets/AppHeader";
import AppMain from "../assets/AppMain";
import AppFooter from "../assets/AppFooter";

export default function DefaultLayout() {
    return (
        <>
            <AppHeader />
            <main>
                <Outlet />
            </main>
            <AppFooter />
        </>

    )
}