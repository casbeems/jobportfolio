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
      <a href="https://drive.google.com/file/d/1yFgYBtN_HX783hxWByOuS3MVA7tKXqS0/view?usp=share_link" className="cta-btn">Resume
      </a>
    </div>
  )
}

export default Navbar;