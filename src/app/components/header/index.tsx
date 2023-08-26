'use client'

import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

import { 
  StyledContainer, 
  StyledContent, 
  StyledContentTitle, 
  StyledTitle, 
  StyledSubTitle, 
  StyledMenu, 
  StyledNavLinks, 
  StyledCloseSidebar,
  StyledLink
} from './styles'

export default function Header() {
  const [sidebar, setSidebar] = useState(false)
  const pathName = usePathname()

  const showSiderbar = () => setSidebar(!sidebar)
  
  function activeLink(path: string) {
    return pathName === `/${path}` ? 'active' : ''
  }

  return (
    <StyledContainer>
      <StyledContent>
        <StyledContentTitle>
          <StyledTitle>To do list</StyledTitle>
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
                onClick={showSiderbar}>
                    HOME
            </StyledLink>

            <StyledLink 
                href="/pages/task" 
                className={activeLink('task')} 
                onClick={showSiderbar}>
                    SCHEDULE TASK
            </StyledLink>    

            <StyledLink 
                href="/pages/qrcode" 
                className={activeLink('qrcode')} 
                onClick={showSiderbar}>
                    SYNCHRONIZE SMARTPHONE
            </StyledLink>

        </StyledNavLinks>
      </StyledContent>
    </StyledContainer>
  )
}
