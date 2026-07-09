import React,{useState, useEffect} from "react";

const ImageSliderA = () =>{
    const[products,setProducts] = useState([]);
    const [activeImage,setActiveImage] = useState(0)
    const fetchApi = async()=>{
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
       setProducts(result.products)
     }
     useEffect(()=>{
        fetchApi()
     },[])

     const prevImage = ()=>{
        setActiveImage((activeImage)=>(activeImage-1) < 0 ? (products.length-1) : (activeImage-1))
     }

     const nextImage=()=>{
        setActiveImage((activeImage)=>(activeImage+1)%(products.length))
     }

     useEffect(()=>{
        const timer = setInterval(()=>{
            nextImage()
        },2000)
        return()=>{
            clearInterval(timer)
        }
     },[products.length])



    

    return(


        <div>

        
       {
        products.length > 0 && (
             <div>
             <img src="assets/arrowkey.png" alt="arrowImage" onClick={prevImage}/>
             <img src={products[activeImage].thumbnail} alt ="image"/>
              <img src="assets/rightarrowkey.png" alt="right_arrow_image" onClick={nextImage}/>
             
             </div>
        )
       }
        
        
        
        </div>
    )
}

export default ImageSliderA;