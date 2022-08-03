import Link from "next/link";
import style from "../styles/menu.module.css"

export default function Menu() {
    return(
        <nav className={style.menu}>
            <div>
                <Link href="/">
                    <a className={style.link}>Home</a>
                </Link>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/faq">
                    <a>FAQ</a>
                </Link>
            </div>
        </nav>
    );
}