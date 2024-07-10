//In this lecture , we have add our own title and description when we click on submit it show the our added task 
// so basically what we are doing is we have created a form which takes the input of task and description there we have added 
//onchange property on every change it calls the component handleinputchange which takes the input value and assings it to the 
// task state variable 
// secondlly to display the add task i am take a prompts from todoScreen we have create a component named addNewTask
// i am passing the component along with the AddTask as prompt as the call the assigned named prompt to it triggeer that funtion which 
// asign the task value to the tasklist state variable 

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
           <div className="ui cards">
          { taskList.map((task,count)=>
            <Task task={task} key={count} />)}
           </div>
           </section>
         </div>
        
         <AddTask props={addNewTask} />
         </div>
         </>
     );
   }
export default ToDoScreen;  

/*
import { useState } from "react";

const AddTask =({props})=>{
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
      props(task)
    }
    return (
      <div>
          <form onSubmit={onformsubmit} >
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
      <button  className="ui primary button" type="Submit">Subbmit</button>
  </form>
  </div>
    );
  }
  export default AddTask;
 
*/