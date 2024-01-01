import Link from "next/link";
import classes from "./NavBar.module.css";
export default function NavBar(){
    return (
        <nav className={classes.navbar}>
            <h2 className={classes.logo}> <Link href="/"> Cloud Crop </Link></h2>
            <ul className={classes.navbar_menu}>
                <li> <Link href="/performance">Performance</Link>  </li>
                <li> <Link href="/Reliability">Reliability</Link>  </li>
                <li><Link href="/Scale">Scale</Link>  </li>
            </ul>
        </nav>
    )
}