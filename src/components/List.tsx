import React, {FunctionComponent as FC} from 'react'
import TODOI from '../interfaces/Todointerfaces'

interface Props {
    todos: TODOI[];
    completeTodo(id: number):void;
    deleteTodo(id: number):void;
  }

const List : FC<Props> = ({todos, completeTodo, deleteTodo}) => {
  return (
    <div className="container  max-w-lg  my-5">
        {todos.map((todo: TODOI, index: number): any => (
                  <div key={index} className="flex items-center ">
                    <h1 className={`text-center text-xl py-4 ${todo.completed ? "completed" : "notCompleted"}`}
                        style={{width:"80%"}} onClick={()=>completeTodo(todo.id)}
                        >{todo.text}</h1>
                    
                    {
                      todo.completed && 
                      <button onClick={()=>deleteTodo(todo.id)} type="button" 
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-0 mb-2">Delete</button>
                    }
                  </div>
                ))
        
        }
    </div>
  )
}

export default List