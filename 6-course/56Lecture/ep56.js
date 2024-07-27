// const logoutUser = async (req,res) =>{
//     try{
//       const {token} = req;
//       let user = await User.findOne({_id: req.user_id});
//       user.tokens = user.tokens.filter((userToken)=>userToken !== token);
//       await user.save();
//       return res.status(200);
//   }catch(err){
//     console.error(err);
//     return res.status(500).send({message: err.message});
//     }
//   };
  
//   module.exports = {addNewUser,loginUser,logoutUser};
  
//   export const logoutUser = async () =>{
//     const response = await LibraryApplicationBackend.get("/user/logout");
//     return response;
//   };
  
//   const LibrarianHomeScreen = () =>{
//     return <h1>LibrarianHomeScreen</h1>;
//   };
  
//   export default LibrarianHomeScreen;
  
//   const StudentHomeScreen = () =>{
//     return <h1>Student Home Screen</h1>;
//   };
  
//   export default StudentHomeScreen;
  
//   const HomeScreen = () =>{
//     const (userType, setUserType) = useState("");
//     useEffect(()=>{
//       const user = getLocalStorageUser();
//       if(user){
//         setUserType(user.type);
//           }
//     },[])
    
//     if(userType === 'LIBRARIAN'){
//       return <LibrarianHomeScreen />
//     }else if(userType === 'STUDENT'){
//       return <StudentHomeScreen>
//     }else{
//       return <p>Loading...</p>
//     }
//   };
  
//   export default HomeScreen;
  
//   const getLocalStorage = () =>{
//     return JSON.parse(localStorage.getItem("user"));
//   };
  
//   const logoutUserFunction = async()=>{
//     const response = await logoutUser();
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//   };
  
//   const navigate = useNavigate();
  
//   export const addBook = async (book) =>{
//     const {data} = await LibraryApplicationBackend.post('/book/add',{...book});
//     return data;
//   };
  
//   export const getAllBooks = async()=>{
//     const {data} = await LibraryApplicationBackend.get("/book/all");
//     return data;
//   };
  
  
//   export default AddBookScreen;