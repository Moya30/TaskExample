import React, { useContext } from 'react'
import { TaskCard } from './TaskCard'
import { TaskContext } from '../context/TaskContext'


export const TaskList = () => {

    const {tasks, deleteTask} = useContext(TaskContext);

    if (tasks.length === 0) {
        return <h1 className='text-white font-bold text-center border-x-lime-200'> No hay tareas, aún </h1>
    }

    return (
        <div className='grid grid-cols-4 gap-3'>
            {
                tasks.map((task) => (
                    <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
                ))
            }
        </div>
    )
}
