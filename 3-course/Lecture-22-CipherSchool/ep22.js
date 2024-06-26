const AddTask =()=>{
    let handleInputChange = (e)=>{
        console.log(e.target.value);
    }
    return (
      <div>
          <form>
             <div class="ui form">
    <div class="field">
      <label>title</label>
      spellcheck={false} 
      data-ms-editor={true}
      <input type="text"
       placeholder="Title"
        name="title"
       onChange={handleInputChange}/>
    </div>
          <div class="field">
      <label>description</label>
      spellcheck={false} 
      data-ms-editor={true}
      <textarea rows="2" 
      placeholder="description"
       name="description"
      onChange={handleInputChange}/>
    </div>
      </div>
      <button className="ui primary button">Summit</button>
  </form>
  </div>
    );
  }
  export default AddTask;
