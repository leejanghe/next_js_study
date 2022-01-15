import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from "./NavBar.module.css"

function NavBar() {
    const router = useRouter()
    return (
        
            <nav >
                <Link href="/">
                    <a className={router.pathname === "/" ? "active":""}>Home</a>
                </Link>
                <Link href="/about">
                    <a className={router.pathname === "/about" ? "active":""}>about</a>
                </Link>
                <h1>gdfadfjdlk</h1>
                <style jsx global>
                    {`
                    nav{
                        background-color: green;
                    }
                    a{
                        text-decoration: none;
                    }
                    .active{
                        color: yellow;
                    }
                    `}
                </style>
            </nav>
        
    )
}

export default NavBar
