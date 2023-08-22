import React, { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext';


export const TaksForm = () => {

    const {createTask} = useContext(TaskContext);
  

    // guardamos tareas

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description
        });
        
        clearFields();
    }

    const clearFields = () => {
        setTitle('');
        setDescription('');
    }


  return (
    <div className='max-w-md mx-auto'>
        <form onSubmit={handleSubmit} className="bg-cyan-950 p-10 mb-4">

            <h1 className='text-2xl text-center mb-6 font-bold text-white'>Crea tu tarea</h1>

            <input 
            placeholder='escribe tu tarea'
            onChange={(e)=> setTitle(e.target.value)}
            value={title}
            autoFocus
            className='bg-slate-300 p-3 w-full  mb-2'
            />
            <textarea 
            placeholder='Escriba su texto'
            onChange={(e)=> setDescription(e.target.value)}
            value={description}
            className='bg-slate-300 p-3 w-full  mb-2'
            ></textarea>
            <button className='bg-yellow-500 px-3 py-1 text-black'> Guardar </button>
        </form>
    </div>
  )
}
