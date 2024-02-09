import Link from "next/link";
const Nav = () => {
    return (
        <nav className="nav bg-dark d-flex justify-content-center">
            <Link href='/' className="nav-link  text-light">
                Home
            </Link>
            <Link href='/register' className="nav-link  text-light">
                Register
            </Link>
            <Link href='/' className="nav-link  text-light">
                Login
            </Link>


        </nav>

    )
}
export default Nav;