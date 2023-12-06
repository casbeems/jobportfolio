// components/Navbar.jsx

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Cas's Portfolio
        </Link>
      </div>
      <a href="https://drive.google.com/file/d/1QnAacL_cw_dgY8g3NDkeHTBP0HlQiaW3/view?usp=sharing" className="cta-btn">Resume
      </a>
    </div>
  )
}

export default Navbar;