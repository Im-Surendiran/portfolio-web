'use client'

import React, { useState } from 'react'
import LogoLink from './LogoLink'
import DesktopNavLinks from './DesktopNavLinks'
import MobileDrawer from './MobileDrawer'
import MobileMenuButton from './MobileMenuButton'
const Header = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <header className="sticky top-0 bg-white z-10">
     <div className="hidden relative py-6 sm:flex flex-col justify-center">
        <LogoLink />  
        <DesktopNavLinks />
      </div>
      <div className="sm:hidden relative flex flex-row my-4">
        <LogoLink />
        <MobileMenuButton onClick={handleDrawerToggle} />
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </div>
    </header>
  )
}

export default Header