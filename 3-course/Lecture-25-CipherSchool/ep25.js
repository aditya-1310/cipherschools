/// In this lecture we learned how to add routes  with help of the library react-router-dom
// its a great way to add routes
import logo from './logo.svg';
import './App.css';
import ToDoScreen from "./screen/ToDoScreen";
import {Component} from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import AddTask from './component/AddTask';


const Ap = createBrowserRouter([
  {
    path:'/',
    element:<ToDoScreen/>
  },
  {
    path:'/addtask',
    element:<AddTask/>
  }
])
class App extends Component {
  render () {
      return  <RouterProvider router={Ap}/>;
  }
}

export default App;