import React, {useState, useEffect} from "react";
import Logo from "../images/logo.svg";
import NavMenu from "./NavMenu";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  function Menu() {
    if (window.innerWidth > 768) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  useEffect(() => {
    Menu();
  }, []);

  window.addEventListener("resize", Menu);

  return (
    <nav className='py-6 relative md:flex'>
      <div className='flex justify-between items-center'>
        <img src={Logo} alt='logo' />
        <button
          className='outline-none md:hidden'
          onClick={() => setShowMenu(!showMenu)}
        >
          <span className='w-7 h-1 bg-color5 block'></span>
          <span className='w-7 h-1 bg-color5 block mt-1'></span>
          <span className='w-7 h-1 bg-color5 block mt-1'></span>
        </button>
      </div>

      {showMenu && (
        <div className='absolute w-full z-50 md:relative'>
          <NavMenu />
        </div>
      )}
    </nav>
  );
};

export default Nav;
