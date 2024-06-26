
import { useState } from "react";
import Task from "../component/Task";
import AddTask from "../component/AddTask";


const ToDoScreen = () => { 
  const [taskList , settaskList] = useState([]);
  let addNewTask =(task)=>{
    settaskList([...taskList,{...task,createdDate:new Date()}]);
  };
     return (
      <>
         <div className="maina">
           <h1 className="ui_heading center"> To Do List </h1>
           <div>
            <button  onClick={(e)=>{
           settaskList([...taskList,
            {
              title: "Go to gym",
              description: "BC GYM JAO",
              createdDate : new Date(),
            },
           ]);
           }}  className="ui secondary button">Add Task
           </button>
           
           <section>
           <div class="ui cards">
          { taskList.map((task,count)=>
            <Task task={task} key={count} />)}
           </div>
           </section>
         </div>
        
         <AddTask/>
         </div>
         </>
     );
   }
export default ToDoScreen;  
// In this lecture learned how to put the provided data the ui with help useState 