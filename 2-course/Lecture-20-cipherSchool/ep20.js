
import { useState } from "react";
import Task from "../component/Task";

// in the state we have to put all the data that is dynamic 
// whenevery a variable is going to change content on the screen should be placed in taskCount;
const ToDoScreen = () => { 
  const [taskList , settaskList] = useState([]);

     return (
         <div className="maina">
           <h1 className="ui_heading center"> To Do List </h1>
           <div>
            <button  onClick={(e)=>{
           settaskList([...taskList,
            {
              title: "To Do List",
              description: "To  List",
            },
           ]);

           }}  className="ui secondary button">Add Task</button>
          { taskList.map((task)=>task =<Task/>)}
         </div>
         </div>
     );
   }
export default ToDoScreen;


/*
const Task = ()=>{
    return <h4>Task</h4>
}
export default Task;

*/