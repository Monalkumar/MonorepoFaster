import React,{ useState} from "react";

const FormApp =()=>{
    const[initial,setInitial] = useState({name:"", email:"", age:""});
    const[formData, setFormData] = useState({name:"", email:"", age:""});
    const [ printData, setPrintData] = useState(null)

   const onHandleSubmit = (e) =>{
   e.preventDefault();
   console.log(formData)
   setPrintData(formData)
   setFormData(initial)
   }

   const handleChnage =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    
   }
    return(
        <div>
        <form onSubmit={onHandleSubmit} >
        <label>Name</label>
        <input type ="text" value={formData.name} placeholder="type here....." name="name" onChange={handleChnage}/>
        <label>Email</label>
        <input type ="text" value={formData.email}  placeholder="type here....." name="email" onChange={handleChnage}/>
        <label>Age</label>
        <input type ="number" value={formData.age} placeholder="type here....." name="age" onChange={handleChnage}/>
        <button type="submit">Submit</button>
        </form>
        <div>
        {printData &&
            (
                <div>
                <p>Name:{printData.name}</p>
                <p>Email:{printData.email}</p>
                <p>Age:{printData.age}</p>
                </div>
            )
        }
        </div>
        </div>
       
    )
}

export default FormApp;