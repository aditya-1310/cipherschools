
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

/*
import { useState } from "react";

const AddTask =()=>{
    const [task, settask] = useState({
        title: '',
        description: '',
    });

    let handleInputChange = (e)=>{
       settask({
        ...task,
        [e.target.name]: e.target.value,
       });
    };
    let onformsubmit = (e)=>{
    
     e.preventDefault();
      console.log(task);
    }
    return (
      <div>
          <form onClick={onformsubmit}>
             <div className="ui form">
    <div className="field">
      <label>title</label>
     
      <input type="text"
       placeholder="Title"
        name="title"
        spellCheck={false} 
        data-ms-editor={true}
       onChange={handleInputChange}/>
    </div>
          <div className="field">
      <label>description</label>
     
      <textarea rows="2" 
      placeholder="description"
       name="description"
       spellCheck={false} 
       data-ms-editor={true}
      onChange={handleInputChange}/>
    </div>
      </div>
      <button className="ui primary button">Summit</button>
  </form>
  </div>
    );
  }
  export default AddTask;
 
*/
// In this lecture learned how to put the provided data the ui with help useState 