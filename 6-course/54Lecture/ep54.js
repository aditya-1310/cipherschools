const router = createBrowserRouter([
    {path: "/login", element:<LoginScreen />},
    {path: "/signup", element:<h1>SignUp Page</h1>},
  ]);
  
  function App(){
    return <RouterProvider router={router} />;
  }
  
  export default App;
  
  const LoginScreen = ()=>{
  
    const [credentials, setCredentials] = useState({email: "", password: ""}); 
  
    const handleLoginSubmit = async (e) =>{
      e.preventDefault();
      console.log(credentials);
    };
  
    const handleInputChange = (e) =>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  
    return (
      <section className="app-section">
        <h1>Login</h1>
        <form className="ui form" onSubmit={handleLoginSubmit}>
      <div className="field">
        <label>Email</label>
        <input type="email" name="email" placeholder="Email" value={credentials.email} onChange={handleInputChange} />
      </div>
      <div className="field">
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleInputChange} />
      </div>
      <div className="field">
      </div>
      <button className="ui button" type="submit">Submit</button>
    </form>
  </section>
    );
  };
  
  export default LoginScreen;
  
//   .app-section{
//     padding: 5vh 10%;
//   }
  
  const getUserToken = () =>{
    return localStorage.getItem("token");
  };
  
  export {getUserToken};
  
  import {LibraryApplicationBackend} from "./LibraryApplicationBackend";
  
  export const loginUser = async ({email, password}) =>{
    const {data} = await LibraryApplicationBackend.post("/user/login",{email,password});
    return data;
  };
  
  export const signUpUser = async (userData) => {
    const {data} = await LibraryApplicationBackend.post("/user/signup", userData);
    return data;
  };
  
  const vaidateCredentials = () =>{
    return credentials.email?.length && credentials.password?.length;  
  };
  
  const setUser = () =>{
    loginStorage.setItem("token", data.token);
    localStorage.setItem("user", data.user);
  };
  
  const LoginUserFunction = async ({email,password}) =>{
    const data = await loginUser({email,[assword});
    setUser(data);
    return data.user;
  };
  
  const signupUserFunction = async (userData) =>{
    conast data = await signupUser(userData);
    setUser(data);
    return data.user;
  }
  
  export {getUserToken, loginUserFunction as loginUser, signupUserFunction as signupUser};