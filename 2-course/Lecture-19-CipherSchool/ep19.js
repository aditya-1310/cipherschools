import { Component } from "react";

class ToDoScreen extends Component {
 state = {
     taskCount : 0,
     // in the state we have to put all the data that is dynamic 
     // whenevery a variable is going to change content on the screen should be placed in taskCount;
 };
   render(){
     return (
         <div className="maina">
           <h1 className="ui_heading center"> To Do List </h1>
           <button  onClick={((e)=>{
             this.setState({...this.state,
                taskCount: this.state.taskCount+1,
             })
                    console.log(this.state.taskCount);
               
           })}  className="ui secondary button">Add Task</button>
           <p>The number of task are: {this.state.taskCount} </p>
         </div>
     );
   }
}
export default ToDoScreen;
/// Here we have build our basic block of the todoscreen 