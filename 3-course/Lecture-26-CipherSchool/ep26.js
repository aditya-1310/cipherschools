// This is one of the most interesting lecture in this lecture i learned about useContext which helps in making the component gobal
// so that every component could use the for that we first import useComtext for react library 
// we have to make a file in which i will create the createContext variable and TaskProvider Provider basically keep provide the all 
// needed thing it takes take a parameter as children -- it keeps the thing which is going to be gobal 
import { createContext, useState } from "react";

const TextContext = createContext();

const TextProvider = ({ children }) => {

    const [taskList,settaskList] = useState([]);

    const addNewTask =(task)=>{
        settaskList([...taskList,{...task,createdDate:new Date()}]);
    };

    return(
        <TextContext.Provider value={{taskList,addNewTask}} >
            {children}
            </TextContext.Provider>
    )

}
export {TextProvider};
export default TextContext;
// const {taskList}= useContext(TextContext);
// const{addNewTask} = useContext(TextContext);
// we have to extract them at the place of use   const{addNewTask} = useContext(TextContext); like this 

// we also have used the useNavigate library from react which help for better switch of routes 
//const navigate = useNavigate();
// navigate("/");