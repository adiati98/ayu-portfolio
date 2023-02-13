import Link from "next/link";

const Navbar = () => {
  return ( 
    <header>
      <nav>
        <div className="logo">Ayu Adiati LOGO</div>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Me</Link></li>
        </ul>
      </nav>
    </header>
   );
}
 
export default Navbar;