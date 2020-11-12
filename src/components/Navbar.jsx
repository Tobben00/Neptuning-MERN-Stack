import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import * as Scroll from 'react-scroll';

import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { BsCaretDownFill } from 'react-icons/bs'
import { FaChevronRight, FaLanguage } from 'react-icons/fa'
import { ImArrowLeft2 } from 'react-icons/im'
import { IconContext } from 'react-icons'
import { BiCalculator } from 'react-icons/bi'

import { SidebarData } from '../components/SidebarData'
import '../styles/_navbar.css'
import '../styles/_navbarDropdown.css'


function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <Link className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </Link>
      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(30 + dropdownRef.current?.firstChild.offsetHeight)
  }, [])
  
  function calcHeight(el) {
    const height = 30 + el.offsetHeight;
    setMenuHeight(height);
  }
  
  function DropdownItem(props) {
    return (
      <Link className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
          {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </Link>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem>My Profile <br/>(Click here to sign in)</DropdownItem>
            <DropdownItem rightIcon={<FaChevronRight />} goToMenu="tos">Terms of Service</DropdownItem>
                
        </div>
      </CSSTransition>
    
      <CSSTransition
        in={activeMenu === 'tos'}
        timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}>
            <div className="menu">
              <DropdownItem goToMenu="main" leftIcon={<ImArrowLeft2 />}>
                <h2>Policy Guidelines</h2>
              </DropdownItem>
              <DropdownItem>Terms of Service</DropdownItem>
              <DropdownItem>Terms of Use</DropdownItem>
              <DropdownItem>Privacy Policy</DropdownItem>
              <DropdownItem>Partner Policy</DropdownItem>
            </div>
          </CSSTransition>
    
        </div>
      );
    }

function Navbar() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
    
  return (
    <div>
      <IconContext.Provider value={{color: '#fff'}}>
        <div className='navbar' smooth={true}>
          <Link to='#' className='sidebar-menu-bars'>
            <FaBars onClick={showSidebar} />
          </Link>
                
          <ul className='navbar-nav'>

            <NavItem icon={<FaLanguage />}></NavItem>
            <NavItem icon={<BiCalculator />}></NavItem>
            <NavItem icon={<BsCaretDownFill />}>
              <DropdownMenu></DropdownMenu>
            </NavItem>

          </ul>
        </div>

        <nav className={sidebar ? 'sidebar-nav-menu active' : 'sidebar-nav-menu'}>
          <ul className='sidebar-nav-menu-items' onClick={showSidebar}>
            <li className='sidebar-navbar-toggle'>
              <Link to='#' className='sidebar-menu-bars'>
                <AiOutlineClose />
              </Link>    
            </li>
            {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
                    )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  )
}

export default Navbar;
