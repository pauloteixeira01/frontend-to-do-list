import React from 'react';

import {FilterCardProps} from './types'

import {StyledContainer, StyledIcon} from './styles'
  


function FilterCard({ title, actived }: FilterCardProps) {
  return (
    <StyledContainer actived={actived}>
      <StyledIcon />
      <span>{title}</span>
    </StyledContainer>
  )
}

export default FilterCard;
