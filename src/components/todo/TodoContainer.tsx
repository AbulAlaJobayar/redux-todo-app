import { useAppSelector } from "@/redux/features/hooks";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import TodoModal from "./TodoModal";

const TodoContainer = () => {
  const tasks = useAppSelector((state) => state.todos.todo);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <TodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient  w-full h-full  shadow-2xl rounded-xl p-[5px] ">
        

        {/* <div className="bg-white font-semibold text-2xl rounded-md  py-2 flex justify-center items-center">
          <p>There is no task pending...</p>
        </div> */}
        <div className="bg-white w-full h-full rounded-xl space-y-3 p-4 ">
        {tasks.length?tasks.map((task,i)=><TodoCard {...task} key={i}></TodoCard>):<div className="bg-white font-semibold text-2xl rounded-md  py-2 flex justify-center items-center">
          <p>There is no task pending...</p>
        </div> }
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
