import React from 'react'
import { TaksForm } from './components/TaksForm'
import { TaskList } from './components/TaskList'

export const App = () => {


  return (

    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p'>
        <TaksForm />
        <TaskList />
      </div>
    </main>

  )
}
