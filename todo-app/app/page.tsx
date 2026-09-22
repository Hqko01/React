'use client';
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<Array<{ id: number; text: string; completed: boolean }>>([{ id: 1, text: "Sample Todo", completed: false }]);

  function todoStatus(event: React.MouseEvent<HTMLButtonElement>, id: number) {
    event.currentTarget.classList.toggle("checked");
    todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });

    setTodos([...todos]);
  }

  function addTodo() {
    var input = document.getElementById("todo-input") as HTMLInputElement;
    setTodos([...todos, { id: Date.now(), text: input.value, completed: false }]);
    input.value = "";
  }

  return (
    <div className="form flex flex-col items-center justify-center gap-5 position-relative w-lg max-w-lg h-screen rounded-lg shadow-md p-4 pt-10 pb-10">
      <div className="flex gap-5 input w-[90%] h-max items-center justify-center">
        <input id="todo-input" className="flex-1 border border-[#1b1b1b] bg-[#ffffff05] outline-none color-black placeholder:text-gray-500 p-2 rounded-lg" type="text" placeholder="Add a new task" />
        <button onClick={addTodo} className="w-20 h-full bg-[#748cab] outline-none border-none rounded-lg hover:bg-[#324052] active:bg-[#435266] transition-all duration-200 cursor-pointer">Add</button>
      </div>
      <div className="output flex flex-col gap-5 flex-1 w-full bg-[#ffffff05] rounded-lg p-5 overflow-y-auto scrollbar-thin scrollbar-thumb-[#748cab] scrollbar-track-[#ffffff05]">

        {todos.map((todo) => (
          <div id={`${todo.id}`} key={todo.id} className="todo flex gap-5 flex-row w-full bg-[#ffffff10] p-2 pl-4 pr-4 rounded-lg items-center justify-between">
            <div className="content flex-1">
              <p className="text-white">{todo.text}</p>
            </div>
            <button onClick={(e) => todoStatus(e, todo.id)} className="check w-8.5 h-8.5 border border-[#6f6f6f] rounded-lg cursor-pointer hover:bg-[#ffffff10] active:bg-[#ffffff1e] transition-all duration-200 flex items-center justify-center">
              {todo.completed ? <div className="tick border-b-2 border-r-2 rotate-45 w-2.5 h-5 transition-all delay-150"></div> : <div className="tick border-transparent border-b-2 border-r-2 rotate-45 w-0 h-0 transition-all delay-150"></div>}
            </button>
          </div>
        ))}
      </div>
    </div >
  );
}
