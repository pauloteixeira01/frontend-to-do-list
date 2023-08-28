import React, { useMemo } from 'react';
import { format } from 'date-fns'; 
import * as S from './styles'; 
import typeIcons from '../../utils/typeIcons';
import iconSport from '@/app/assets/sport.png';

interface BusinessCardProps {
  type: number;
  name: string;
  when: Date;
  done: boolean;
}

function BusinessCard({ type, name, when, done }: BusinessCardProps) {

  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'),[when, 'dd/MM/yyyy']);
  const hour = useMemo(() => format(new Date(when), 'HH:mm'),[when, 'HH:mm']);

  return (
    <S.Container done={done}>
      <S.TopCard>
        <img src={`${typeIcons[type]}.png`} alt="Task icon"/>
        <h3>{name}</h3>
      </S.TopCard>
      <S.BottomCard>
        <strong>{date}</strong>
        <span>{hour}</span>
      </S.BottomCard>
    </S.Container>
  )
}

export default BusinessCard;
