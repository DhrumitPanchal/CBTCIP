import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../Context/Context";
import { useNavigate, useParams } from "react-router-dom";
function Card() {
  const { tasks, AddTask, getOneTask, updateTask } = useContext(UserContext);
  const { ID } = useParams();

  const [todo, setTodo] = useState({
    title: "",
    description: "",
    endingDate: "",
    status: "Todo",
  });
  const date = new Date();
  let todayDate =
    date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate();
  const navigator = useNavigate();

  useEffect(() => {
    if (ID) {
      const data = tasks?.filter((task) => task?.taskID == ID);
      setTodo({
        title: data[0]?.title,
        description: data[0]?.description,
        endingDate: data[0]?.endingDate,
        status: data[0]?.status,
        taskID: data[0].taskID,
      });

      console.log(data);
    }
  }, [ID, tasks]);

  const handleInput = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const hendleprogress = async () => {
    try {
      let updatedStatus = todo.status === "Todo" ? "InProgress" : "Done";
      const updatedTask = { ...todo, status: updatedStatus };
      await updateTask(todo.taskID, updatedTask);
      setTodo(updatedTask);
     
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black/20">
      <div className="p-[2.4rem] max-sm:p-[2rem] flex flex-col gap-[1rem]  w-[30rem] max-sm:w-full h-[24rem] max-sm:h-screen rounded-[1.6rem] max-sm:rounded-none bg-[#fbfcfd]">
        <h2 className="ml-[.2rem] text-[1.4rem] font-semibold">
          Add task details
        </h2>
        <input
          name="title"
          onChange={(e) => handleInput(e)}
          value={todo.title}
          type="text"
          required
          className="px-[1rem] py-[.2rem] w-full rounded-[.4rem] border-[2px] font-medium text-[1.2rem] bg-transparent border-black/20 focus:border-[#6060e3] placeholder:text-black/60"
          placeholder="Title"
        />
        <textarea
          name="description"
          onChange={(e) => handleInput(e)}
          value={todo.description}
          rows={3}
          required
          type="text"
          className="px-[1rem] py-[.2rem] w-full rounded-[.4rem] border-[2px] font-normal text-[1.2rem] bg-transparent border-black/20 focus:border-[#6060e3] placeholder:text-black/70"
          placeholder="Description"
        />
        <input
          name="endingDate"
          onChange={(e) => handleInput(e)}
          value={todo.endingDate}
          required
          min={todayDate}
          type="date"
          placeholder="Deadline"
          className="px-[1rem] py-[.2rem]  w-full rounded-[.4rem] border-[2px] font-medium text-[1.2rem] bg-transparent border-black/20 focus:border-[#6060e3] placeholder:text-black/20"
        />
        <div className="flex justify-between mt-[1rem]">
          {ID && (
            <div
              onClick={() => updateTask(todo.taskID, todo)}
              className="cursor-pointer flex justify-center items-center h-[2.4rem] w-[8rem] max-sm:w-[6.6rem] rounded-[.8rem] text-[1.2rem] font-semibold  transition-colors duration-300 bg-blue-500/20 text-blue-700 hover:bg-[#6060e3] hover:text-white "
            >
              Update
            </div>
          )}

          <div
            onClick={() => (ID ? hendleprogress() : AddTask(todo))}
            className="cursor-pointer flex justify-center items-center h-[2.4rem] w-[8rem] max-sm:w-[6.6rem] rounded-[.8rem] text-[1.2rem] font-semibold  transition-colors duration-300 bg-green-500/20 text-green-700 hover:bg-green-400 hover:text-white "
          >
            {ID ? (todo.status == "Todo" ? "Progress" : "Done") : "Add"}
          </div>

          <div
            onClick={() => navigator("/")}
            className="cursor-pointer flex justify-center items-center h-[2.4rem] w-[8rem] max-sm:w-[6.6rem] rounded-[.8rem] text-[1.2rem] font-semibold  transition-colors duration-300 bg-red-500/20 text-red-700 hover:bg-red-500 hover:text-white "
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
