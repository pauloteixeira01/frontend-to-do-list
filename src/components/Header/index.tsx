'use client'

import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

import isConnected from '@/utils/isConnected'

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

  function Logout() {
    localStorage.removeItem('@yourMac/macaddress');
    window.location.reload();
  }
  
  return (
    <StyledContainer>
      <StyledContent>
        <StyledContentTitle>
          <h2>To do list</h2>
          <StyledSubTitle>
            Google
          </StyledSubTitle>
        </StyledContentTitle>
        <StyledMenu>
          <FaBars onClick={showSiderbar} />
        </StyledMenu>
        <StyledNavLinks>
          <StyledCloseSidebar onClick={showSiderbar}><FaTimes /></StyledCloseSidebar>
        
          <StyledLink 
            href="/" 
            className={activeLink('')} 
            onClick={showSiderbar}
          >
            HOME
          </StyledLink>

          <StyledLink 
            href="/task" 
            className={activeLink('/task')} 
            onClick={showSiderbar}
          >
            SCHEDULE TASK
          </StyledLink>    
          
          { !isConnected ? (
            <StyledLink 
              href="/qrcode" 
              className={activeLink('/qrcode')} 
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
