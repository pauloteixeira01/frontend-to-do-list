'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { redirect } from 'next/navigation'

import {Navigate} from 'react-router-dom'
import { format } from 'date-fns';
// import { TimeField } from '@mui/x-date-pickers/TimeField';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';



import * as S from './styles';

interface MatchProps {
    match?: {
        params: {
            id: string;
        }
    }
}

function Business({ match }: MatchProps) {
  const [ redirection, setRedirection ] = useState(false);
  const [ type, setType ] = useState(0);
  // const [ id, setId ] = useState(); 
  const [ done, setDone ] = useState(false);
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ date, setDate ] = useState('');
  const [ hour, setHour ] = useState('');
  const [ minute, setMinute ] = useState('');
  

  async function LoadTaskDetails() {
    if(match) {
      await api.get(`/task/${match?.params.id}`)
      .then(response => {
        setType(response.data.type)
        setDone(response.data.done)  
        setName(response.data.name)
        setDescription(response.data.description)
        setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
        setHour(format(new Date(response.data.when), 'HH:mm'))
      })
    } 
  }

  async function Save() {
   
    if (!name) {
      return alert('You need to inform what title of task.');
    } else if (!description) {
      return alert('You need to inform what description of task.');
    } else if (!type) {
      return alert('You need to inform what type of task.')
    } else if (!date) {
      return alert('You need to inform what date of task.')
    } else if (!hour) {
      return alert('You need to inform what hour with two numbers.')
    }

    if(Number(hour) > 12 || Number(hour) < 0) {
      return alert('You need to inform a correct hour.')
    }

    if(!minute) {
      return alert('You need to inform what minute with two numbers.')
    }

    if(Number(minute) > 59 || Number(minute) < 0) {
      return alert('You need to inform a correct minutes.')
    }

    // if(typeof hour !== 'number' || typeof minute !== 'number'){
    //   return alert('You need type a numbers in HOUR and MINUTES')
    // }

    if (match?.params.id) {
      await api.put(`/task/${match.params.id}`,{
        macaddress: isConnected,
        done,
        type,
        name,
        description,
        when: `${date}T${hour}:${minute}:00.000`
      }).then(() => setRedirection(true))
    } else { 
      await api.post('/task',{
        macaddress: isConnected,
        type,
        name,
        description,
        when: `${date}T${hour}:${minute}:00.000`
      }).then(() => setRedirection(true))
    } 
  }

  async function Remove() {
    const res = window.confirm('Are you sure you want to delete the task?');
    if (res === true) {
      await api.delete(`/task/${match?.params.id}`)
      .then(() => setRedirection(true)); 
    }   
  }

  useEffect(() => {
    if (!isConnected) {
      setRedirection(true);
    }
    LoadTaskDetails();
  }, [])  
 
  return (
    <S.Container>
      { redirection && redirect('/pages/qrcode') }
    
      <S.Form>
        <S.TypeIcons>
          {
            TypeIcons.map((icon, index) => (
              index > 0 && 
              <button type="button" onClick={() => setType(index)} key={index}>
                <img src={`${icon}.png`} alt="Task Type" 
                className={type && type !== index ? 'inative' : ''}/>
              </button>
            ))
          }
        </S.TypeIcons>

        <S.Input>
          <span>TITLE</span>
          <input type="text" placeholder="Type a title for the task." 
          onChange={e => setName(e.target.value)} value={name} />
        </S.Input>

        <S.TextArea>
          <span>DESCRIPTION</span>
          <textarea rows={5} placeholder="Describe your task here." 
          onChange={e => setDescription(e.target.value)} value={description}/>
        </S.TextArea>

        <S.Input>
          <span>DATE</span>
          <img src='imgs/calendar.png' alt="Calendar" />
          <input type="date" onChange={e => setDate(e.target.value)} value={date}/>
        </S.Input>
        
        <S.Input>
          <span>HOUR</span>
          {/* <img src={iconClock} alt="Clock" /> */}
          <input type="number" placeholder='hour with 2 numbers' onChange={e => setHour(e.target.value)} value={hour} maxLength={2}/>
          <input type="number" placeholder='minutes with 2 numbers' onChange={e => setMinute(e.target.value)} value={minute} maxLength={2}/>
          {/* <TimeField
          label="hour"
          value={hour}
          onChange={(e) => setHour(e)}
          format="HH:mm"
        /> */}
        </S.Input>

        <S.Options>
          {match?.params.id && <button type="button" onClick={Remove} >DELETE</button>}
        </S.Options>

        <S.Save>
          <button type="button" onClick={Save}>SAVE</button>
        </S.Save>

      </S.Form>
    </S.Container>
  )    
}

export default Business;
