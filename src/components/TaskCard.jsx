import {useContext} from 'react'
import { TaskContext } from '../context/TaskContext';


export const TaskCard = ({task}) => {
    // usas lo que esta almacenadoe en el contexto
    const {deleteTask} = useContext(TaskContext);

    return (
        <div className="bg-cyan-950 text-white  p-3 rounded-md">
            <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
            <p className='text-amber-500 text-sm'>{task.description}</p>
            
            <button className='bg-sky-900 rounded-md px-2 py-1 mt-4 hover:bg-rose-950' onClick={ () => deleteTask(task.id)}>Eliminar tarea</button>
        </div>
    )
}
