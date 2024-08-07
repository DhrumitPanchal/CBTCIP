import { FaPlus } from "react-icons/fa";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { tasks, getTasks } = useContext(UserContext);
  const navigator = useNavigate();
  useEffect(() => {
    getTasks();
  }, []);
  useEffect(() => {}, [tasks]);

  return (
    <>
      <section className="w-full px-[4rem] max-sm:px-[1.6rem] min-h-[calc(100vh-3.4rem)] pt-[1rem] pb-[2rem] bg-[#fbfcfd]">
        <nav className="flex items-center justify-between">
          <div className="px-[.2rem] flex items-center gap-[.4rem]">
            <img className="h-[2.1rem]" src="./Images/AppLogo.svg" alt="" />
            <h2 className="logo text-[1.6rem] font-semibold ">Todo app</h2>
          </div>
          <Link to={"/card"}>
            <div className="cursor-pointer flex items-center justify-center gap-[.4rem] h-[2.4rem] w-[8rem] rounded-[.6rem] bg-blue-500/20 text-blue-700">
              <FaPlus className="text-[1.4rem]" />
              <h2>Add task</h2>
            </div>
          </Link>
        </nav>

        <div className="mt-[2rem] flex max-sm:flex-col gap-[4rem] max-sm:gap-[1rem]">
          <div className="w-1/3 max-sm:w-full px-[1.8rem] pb-[1rem] pt-[2rem] border-t-[3px] border-[#efc34d] rounded-b-[.8rem] bg-[#fdf8ea]">
            <h2 className="text-[1.2rem] font-bold text-[#efc34d]">To do</h2>

            <div className="mt-[2rem] flex flex-col gap-[1rem]">
              {tasks
                .filter((e) => e.status === "Todo")
                .map((e) => (
                  <Link key={e.taskID} to={`/UpdateTask/${e.taskID}`}>
                    <div className="cursor-pointer px-[1.4rem] py-[1rem] flex  flex-col gap-[.2rem] rounded-[.6rem] bg-white">
                      <h2 className="text-[1.1rem] font-medium ">{e.title}</h2>
                      <p className="text-[1rem] font-normal">{e.description}</p>
                      <h2 className="text-[.9rem] font-normal text-black/70">
                        Deadline : {e.endingDate}
                      </h2>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          <div className="w-1/3 max-sm:w-full px-[1.8rem] pb-[1rem] pt-[2rem] border-t-[3px] border-[#6060e3] rounded-b-[.8rem] bg-[#f0f0ff]">
            <h2 className="text-[1.2rem] font-bold text-[#6060e3]">
              In progress
            </h2>

            <div className="mt-[2rem] flex flex-col gap-[1rem]">
              {tasks
                .filter((e) => e.status === "InProgress")
                .map((e) => (
                  <Link key={e.taskID} to={`/UpdateTask/${e.taskID}`}>
                    <div className="cursor-pointer px-[1.4rem] py-[1rem] flex  flex-col gap-[.2rem] rounded-[.6rem] bg-white">
                      <h2 className="text-[1.1rem] font-medium ">{e.title}</h2>
                      <p className="text-[1rem] font-normal">{e.description}</p>
                      <h2 className="text-[.9rem] font-normal text-black/70">
                        Deadline : {e.endingDate}
                      </h2>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          <div className="w-1/3 max-sm:w-full px-[1.8rem] pb-[2rem] pt-[2rem] border-t-[3px] border-[#cf2592] rounded-b-[.8rem] bg-[#fbeef6]">
            <h2 className="text-[1.2rem] font-bold text-[#cf2592]">Done</h2>

            <div className="mt-[2rem] flex flex-col gap-[1rem]">
              {tasks
                .filter((e) => e.status === "Done")
                .map((e) => (
                  <Link key={e.taskID} to={`/UpdateTask/${e.taskID}`}>
                    <div className="cursor-pointer px-[1.4rem] py-[1rem] flex  flex-col gap-[.2rem] rounded-[.6rem] bg-white">
                      <h2 className="text-[1.1rem] font-medium ">{e.title}</h2>
                      <p className="text-[1rem] font-normal">{e.description}</p>
                      <h2 className="text-[.9rem] font-normal text-black/70">
                        Deadline : {e.endingDate}
                      </h2>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
