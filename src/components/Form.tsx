import React, {FormEvent, FunctionComponent as FC} from 'react'
import {useState} from 'react'
import TODOI from '../interfaces/Todointerfaces';

interface Props {
  addTodo(todo: string) : void;
}

const Form: FC<Props> = ({addTodo}) => {

  const [todo, setTodo] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {e.preventDefault();
  if(!todo) return window.alert("Please Add the field!!");
  addTodo(todo);
  setTodo("");
  }

  return (
    <div className="container mx-auto max-w-lg px-4 my-5">
      <h2 className="text-center text-2xl font-bold my-5">React Typescript Todo App</h2>
        <form onSubmit={handleSubmit} className="flex items-center space-x-2 ">
            <input type="text" style={{boxShadow: "none"}} value={todo} onChange={(e)=> setTodo(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Add Todo..." />
            <button type="submit" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 ">Add</button>
        </form>
    </div>
  )
}

export default Form