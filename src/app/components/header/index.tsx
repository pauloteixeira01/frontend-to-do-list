'use client'

import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

import isConnected from '@/app/utils/isConnected'

import { 
  StyledContainer, 
  StyledContent, 
  StyledContentTitle, 
  StyledImage, 
  StyledSubTitle, 
  StyledMenu, 
  StyledNavLinks, 
  StyledCloseSidebar,
  StyledLink,
  StyledLogOut
} from './styles'

export default function Header() {
  const [sidebar, setSidebar] = useState(false)
  const pathName = usePathname()

  const showSiderbar = () => setSidebar(!sidebar)
  
  function activeLink(path: string) {
    return pathName === `/${path}` ? 'active' : ''
  }

  async function Logout() {
    localStorage.removeItem('@yourMac/macaddress');
    window.location.reload();
  }
  console.log('Lauren Phillips: ', isConnected)
  return (
    <StyledContainer>
      <StyledContent>
        <StyledContentTitle>
          <StyledImage src='imgs/logo.png' alt='logo' />
          <StyledSubTitle>
            Google
          </StyledSubTitle>
        </StyledContentTitle>
        <StyledMenu>
          <FaBars onClick={showSiderbar} />
        </StyledMenu>
        <StyledNavLinks menu={sidebar}>
          <StyledCloseSidebar onClick={showSiderbar}><FaTimes /></StyledCloseSidebar>
        
          <StyledLink 
            href="/" 
            className={activeLink('')} 
            onClick={showSiderbar}
          >
            HOME
          </StyledLink>

          <StyledLink 
            href="/pages/task" 
            className={activeLink('/task')} 
            onClick={showSiderbar}
          >
            SCHEDULE TASK
          </StyledLink>    

          { !isConnected ? (
            <StyledLink 
              href="/pages/qrcode" 
              className={activeLink('/pages/qrcode')} 
              onClick={showSiderbar}
            >
              SYNCHRONIZE SMARTPHONE
            </StyledLink>
          )  : (
            <StyledLogOut type="button" onClick={Logout}>LOG OUT</StyledLogOut>
          )} 
        </StyledNavLinks>
      </StyledContent>
    </StyledContainer>
  )
}
