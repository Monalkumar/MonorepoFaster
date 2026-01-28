import React,{useState} from "react";

const FormsProjects = () =>{
    const [formDatas,setFormDatas] =useState({name:"", email:"", address:""});
    const[displayForms,setDisplayForms] = useState({name:"", email:"", address:""});
    const initial={
        name:"", email:"", address:""
    }
    const submitForm = async (e) => {
   e.preventDefault();

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formDatas)
    });

    const data = await response.json();
    console.log("Success:", data);

   setDisplayForms(formDatas); // show submitted data
    setFormDatas(initial);     // reset form
  } catch (error) {
    console.error("Error:", error);
  }
};


    const onChangeHandler =(e)=>{
        setFormDatas({...formDatas,[e.target.name]:e.target.value})
    }
    return(
       <div>
       <form onSubmit={submitForm}>
       <label>Name</label>
       <input type ="text" placeholder="type here" name="name" value={formDatas.name} onChange={onChangeHandler}/>
       <label>Email</label>
       <input type ="text" placeholder="type here" name="email" value={formDatas.email} onChange={onChangeHandler}/>
       <label>address</label>
       <input type ="text" placeholder="type here" name="address" value={formDatas.address} onChange={onChangeHandler}/>
       <button type="submit">Click me</button>
       </form>
       <div>
       {displayForms && (
        <div>
        <h1>Name:{displayForms.name}</h1>
         <h1>Email:{displayForms.email}</h1>
          <h1>Address:{displayForms.address}</h1>
        </div>
       )}
       </div>
       </div>
    )
}

export default FormsProjects;