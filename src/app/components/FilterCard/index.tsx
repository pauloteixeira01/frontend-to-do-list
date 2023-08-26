import React from 'react';

import * as S from './styles';
  

interface FilterCardProps {
  title: string;
  actived: boolean;
}

function FilterCard({ title, actived }: FilterCardProps) {
  return (
    <S.Container actived={actived}>
        <img src='imgs/filter.png' alt="Filter"/>
        <span>{title}</span>
    </S.Container>
  )
}

export default FilterCard;
