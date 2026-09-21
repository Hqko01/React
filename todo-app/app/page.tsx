import Image from "next/image";


export default function Home() {
  return (
    <div className="form flex flex-col items-center justify-center gap-5 position-relative w-lg max-w-lg h-screen rounded-lg shadow-md p-4 pt-10 pb-10">
      <div className="flex gap-5 input w-[90%] h-max items-center justify-center">
        <input className="flex-1 border border-[#1b1b1b] bg-[#ffffff05] outline-none color-black placeholder:text-gray-500 p-2 rounded-lg" type="text" placeholder="Add a new task" />
        <button className="w-20 h-full bg-[#748cab] outline-none border-none rounded-lg hover:bg-[#324052] active:bg-[#435266] transition-all duration-200 cursor-pointer">Add</button>
      </div>
      <div className="output flex flex-col gap-5 flex-1 w-full bg-[#ffffff05] rounded-lg p-5 overflow-y-auto scrollbar-thin scrollbar-thumb-[#748cab] scrollbar-track-[#ffffff05]">
        <div className="todo flex gap-5 flex-row w-full bg-[#ffffff10] p-2 pl-4 pr-4 rounded-lg items-center justify-between">
          <div className="content flex-1">
            <p className="text-white">Build a todo app</p>
          </div>
          <div className="check w-8.5 h-8.5 border border-[#6f6f6f] rounded-lg cursor-pointer hover:bg-[#ffffff10] active:bg-[#ffffff1e] transition-all duration-200 flex items-center justify-center" >
            <div className="tick border-b-2 border-r-2 rotate-45 w-2.5 h-5"></div>
          </div>
        </div>
      </div>
    </div >
  );
}
