import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
export const UserContext = createContext(null);

export default function Mycontext(props) {
  const [tasks, setTasks] = useState([]);
  const date = new Date();
  const navigate = useNavigate();

  const AddTask = async ({ title, description, endingDate, status }) => {
    console.log("data : ", { title, description, endingDate, status });
    try {
      if (!title || !description || !endingDate) {
        toast.error("All fields are required");
        return;
      }

      const taskId = Date.now();
      console.log("task Id : " + taskId);
      const newTask = {
        taskID: taskId,
        title,
        description,
        endingDate,
        status,
      };

      const updatedTasks = [...tasks, newTask];
      Cookies.set("Tasks", JSON.stringify(updatedTasks)); // Stringify tasks

      setTasks(updatedTasks);
      toast.success("Task Added successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      console.log("error : ", error);
    }
  };

  const getTasks = async () => {
    try {
      const savedTasks = Cookies.get("Tasks");
      const data = JSON.parse(savedTasks);
      if (savedTasks) {
        setTasks(data);
      }
    } catch (error) {
      toast.error(error.message);
      console.log("error : ", error);
    }
  };

  const updateTask = async (taskId, updatedTaskData) => {
    try {
      const updatedTasks = tasks.map((task) =>
        task.taskID === taskId ? { ...task, ...updatedTaskData } : task
      );
      Cookies.set("Tasks", JSON.stringify(updatedTasks)); // Stringify tasks

      setTasks(updatedTasks);
      toast.success("Task updated successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      console.log("error : ", error);
    }
  };

  const getOneTask = async (taskId) => {
    try {
      const task = tasks.find((task) => task.taskID === taskId);
      return task || null;
    } catch (error) {
      toast.error(error.message);
      console.log("error : ", error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        AddTask,
        getTasks,
        tasks,
        setTasks,
        updateTask,
        getOneTask,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
