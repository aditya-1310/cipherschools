//In this i had very tough time to the edit button 
//in this first we have to build the logic of editing in the contex file then in task.js we add the logic in which 
// first we created a usestate varible of boolean type for handel the edit task as we click on edit button get become true and the functon 
// side the if conditon applied where we added a input for title and textarea for description in this also we have to apply two-way-binding
//to update the input we have handleinpuchange function which basically iterates on tasklist and e.target.name === e.target.value assig
//the value to it and on the save button onclick property to call the logic to update the task  the logic to update the task is ask follow
// first we creared a state variable to know which varible to update 



///////////////////////--------------------------LOGIC  OF EDITING
//  const notedit = ({title,discription});
// const editTask =((task)=>){
    //    const temptasklist =[...tasklist];
    //  for(let t of temptasklist){
    //     if(t.taskId == task.taskId) {
    //     notedit.forEach((element)=>{
        //    t[elemet]= task[element];
        //})
    //}
    //} 
    // settasklist (tasklist);
    //}
import TextContext from "../Context/TaskContext";
import { formateDate } from "../utils/DateUtil";
import { useContext, useState } from "react";
const Task = ({ task: indi }) => {
  const { title, description, createdDate, taskId } = indi;
  const { deleteTask, Editing } = useContext(TextContext);
  const [isEditing, setisEditing] = useState(false);
  const [task, settask] = useState({ title: "", description: "", taskId });

  // const { Editing } = useContext(TextContext);


  let handleInputChange = ((e) => {
    settask({
      ...task,
      [e.target.name]: e.target.value,
    });
  });

  if (isEditing) {
    return (
      <div className="card">
        <div className="content">
          <div className="ui form">
            <div className="field">
              <input type="text"
                placeholder="Title"
                name="title"
                spellCheck={false}
                data-ms-editor={true}
                onChange={handleInputChange}
                value={task.title} />

            </div>

            <div className="meta">
              {formateDate(createdDate)}
            </div>


            <textarea rows="2"
              placeholder="description"
              name="description"
              spellCheck={false}
              data-ms-editor={true}
              onChange={handleInputChange}
              value={task.description} />

          </div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button" onClick={() => { Editing(task); setisEditing(false) }}>Save</div>
            <div className="ui basic red button"
              onClick={() => setisEditing(false)}>
              Cancle</div>
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="card">
        <div className="content">
          <div className="header">
            {title}
          </div>
          <div className="meta">
            {formateDate(createdDate)}
          </div>
          <div className="description">
            {description}
          </div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button" onClick={() => setisEditing(true)}>Edit</div>
            <div className="ui basic red button"
              onClick={() => deleteTask(taskId)}>
              Delete</div>
          </div>
        </div>
      </div>
    );
  }
};
export default Task;