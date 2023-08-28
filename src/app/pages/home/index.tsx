'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { redirect } from 'next/navigation'

import api from '@/app/services/api';
import isConnected from '@/app/utils/isConnected';
import FilterCard from '@/app/components/FilterCard'
import BusinessCard from '@/app/components/BusinessCard'

import {
  Container,
  FilterArea,
  Content,
  Title
} from './styles'

interface TaskProps {
  _id: string;
  type: number;
  name: string;
  when: Date;
  done: boolean;
}

export default function Home() {

  const [ filterActived, setFilterActived ] = useState('all');
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [redirection, setRedirection] = useState(false);

  async function loadTasks() {
    await api.get(`/task/filter/${filterActived}/${isConnected}`)
      .then(response => {
        setTasks(response.data);
    })
  }

  function Notification() {
    setFilterActived('late');
  }
  
  useEffect(() => {
    loadTasks();

    if (!isConnected) {
      setRedirection(true);
    }
  }, [filterActived])

  return (
    <Container>
      { redirection && redirect('/pages/qrcode')}
            
      <FilterArea>
        <button type="button" onClick={() => setFilterActived("all")}>
          <FilterCard title="All" actived={filterActived === 'all' ? 'true' : 'false'} />
        </button>
        <button type="button" onClick={() => setFilterActived("today")}>
          <FilterCard title="Today" actived={filterActived === 'today' ? 'true' : 'false'} />
        </button>
        <button type="button" onClick={() => setFilterActived("week")}>
          <FilterCard title="Week" actived={filterActived === 'week' ? 'true' : 'false'} />
        </button>
        <button type="button" onClick={() => setFilterActived("month")}>
          <FilterCard title="Month" actived={filterActived === 'month' ? 'true' : 'false'} />
        </button>
        <button type="button" onClick={() => setFilterActived("year")}>
          <FilterCard title="Year" actived={filterActived === 'year' ? 'true' : 'false'} />
        </button>  
      </FilterArea>

      <Title>
        <h3>TASKS</h3>
      </Title>
  
      <Content>
        {
          tasks.map(task => (
            <Link href={`/task/${task._id}`} key={task._id}>
              <BusinessCard type={task.type} name={task.name} when={task.when} done={task.done}/>
            </Link>
          ))
        }           
      </Content>
    </Container>
  )    

  
}