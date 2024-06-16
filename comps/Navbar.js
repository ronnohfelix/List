import Link
 from "next/link";
const Navbar = () => {
    return (
        <nav>
        <div className="logo">
            <h1>My List</h1>
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/lists/list">List</Link>
        </nav>
    );
    }

export default Navbar;