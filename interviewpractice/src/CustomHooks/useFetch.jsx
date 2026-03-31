import React,{useState, useEffect} from "react";


const useFetch=(url)=>{
    const[data,setData] = useState(null);
    const[error,setError] = useState(null);
    const[loading,setLoading] = useState(true)
    const fetchApi=async()=>{
        try{
            setLoading(true);
            setError(null)
            const response = await fetch(url);
            if(!response.ok){
                throw new Error(`Error:${response.status}`)
            }
        const result = await response.json();
        setData(result)
        }
        catch(error){
            setError(`error message:${error.message}`)
        }
        finally{
            setLoading(false)
        }
        
    } 
    
    useEffect(()=>{
     fetchApi()
    },[url])
    return {url,data,loading,error, fetchApi}
}

export default useFetch;