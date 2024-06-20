import { formateDate } from "../utils/DateUtil";
const Task = ({task:{title,description,createdDate}})=>{
    return (
<div class="card">
    <div class="content">
      <div class="header">
        {title}
      </div>
      <div class="meta">
        {formateDate(createdDate)}
      </div>
      <div class="description">
        {description}
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">Approve</div>
        <div class="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
    );
};
export default Task;

/*

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
              title: "Go to gym",
              description: "BC GYM JAO",
              createdDate : new Date(),
            },
           ]);
           }}  className="ui secondary button">Add Task
           </button>
           s
           <section>
           <div class="ui cards">
          { taskList.map((task,count)=>
            <Task task={task} key={count} />)}
           </div>
           </section>
         </div>
         </div>
     );
   }
export default ToDoScreen;  
*/