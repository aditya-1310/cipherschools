const AddTask =()=>{
    return (
      <div>
          <form>
             <div class="ui form">
    <div class="field">
      <label>title</label>
      <input type="text" placeholder="Title" name="title"/>
    </div>
          <div class="field">
      <label>description</label>
      <textarea rows="2" placeholder="description" name="description"/>
    </div>
      </div>
      <button class="ui primary button">Summit</button>
  </form>
  </div>
    );
  }
  export default AddTask;
  //In this lecture we add a addtask form in the ui we have used form to take the input 
//  sementic ui for the add the form 