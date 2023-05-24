import React, {useState} from 'react';
import Form from './components/Form';
import List from './components/List';
import TODOI from './interfaces/Todointerfaces';


const App = () => {

  const [todos, setTodos] = useState<TODOI[]>([
    {
    id: 1,
    text: "do coding",
    completed: false,
    },
    {
      id: 2,
      text: "do eating",
      completed: true,
    },
  ]);

  const addTodo = (todo: string): void => {

  const data : TODOI = {
    id: todos.length < 1 ? 1 : todos[todos.length - 1].id + 1,
    text: todo,
    completed: false,
  };
    setTodos((prevTodos: TODOI[]): TODOI[] => [...prevTodos, data]);
    window.alert("Todo added successfully !!");
  };

    const completeTodo =(id:number): void =>{
      const currentTodo: any = todos.find((todo: TODOI) => todo.id === id);
      currentTodo.completed = true;

      const updatedTodos : TODOI[] = todos.map((todo: TODOI): TODOI=> todo.id === id ? currentTodo: todo);

      setTodos(updatedTodos);
      window.alert("Well Done!!");
    }

    const deleteTodo =(id:number): void =>{

      const updatedTodos : TODOI[] = todos.filter((todo: TODOI): any => todo.id !== id);

      setTodos(updatedTodos);
      window.alert("Deleted Success!!");
    }

  return (
    <div className="bg-cover bg-fixed bg-center bg-[url(https://picsum.photos/id/168/1920/1280)]">
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="bg-white mx-4 p-7 rounded-xl drop-shadow-xl w-full md:w-1/2 lg:w-1/3">
      <Form addTodo={addTodo} />
      <List todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
      </div>
      </div>
    </div>
  );
}

export default App;
