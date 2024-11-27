import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css"

export default function Navbar() {
    return (
        <>
            <nav className={style.nav}>
                <ul className={style.ul}>
                    <li className={style.li}>
                        <NavLink className={style.a} to="/">Home</NavLink>
                    </li>
                    <li className={style.li}>
                        <NavLink className={style.a} to="/about">About Us</NavLink>
                    </li>
                    <li className={style.li}>
                        <NavLink className={style.a} to="/blog">Blog</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
