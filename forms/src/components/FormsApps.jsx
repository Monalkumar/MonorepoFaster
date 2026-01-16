import React, {useState} from "react";

const FormsApps =()=>{
  const[forms,setForms] = useState({name:"", email:"", address:""});
  const initialState={name:"", email:"", address:""}
  const handleSubmit =(e)=>{
    e.preventDefault();
    setFormsDisplay(forms)
    console.log(forms)
    setForms(initialState)
    
  }
  const handleChange =(e)=>{
    setForms({...forms,[e.target.name]:e.target.value})
  }

  const[formsDisplay, setFormsDisplay] = useState(null)
  return(
    <div>
    <h1>Fomms</h1>
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name</label>
    <input type="text" name="name" value={forms.name} placeholder="type here...." onChange={handleChange}/>
    <label htmlFor="email">Email</label>
    <input type = "email" name="email"  value={forms.email} placeholder="type here...." onChange={handleChange}/>
    <label htmlFor="address">Address</label>
    <input type="text" name="address" value={forms.address} placeholder="type here ....." onChange={handleChange}/>
    <button type="submit">Submit</button>
    </form>
    <div>
    { formsDisplay && (
      <div>
      <h2>Name:{formsDisplay.name}</h2>
      <h2>Email:{formsDisplay.email}</h2>
      <h2>Address:{formsDisplay.address}</h2>
      </div>
    )}
    </div>
    </div>
  )
}

export default FormsApps;