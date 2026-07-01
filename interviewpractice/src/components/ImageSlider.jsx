import React,{useState,useEffect} from "react";
const ImageSlider =()=>{
    const[products,setProducts] = useState([]);
    const[activeImage, setActiveImage] = useState(0);
 useEffect(()=>{
        fetchProduct();
    },[])
    const fetchProduct = async()=>{
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        setProducts(result.products)
    }

   

    const prevSlide=()=>{
       setActiveImage(activeImage=>(activeImage-1) < 0 ? (products.length-1) : (activeImage-1))
    }

    const nextSlide=()=>{
       setActiveImage(activeImage=>(activeImage+1)%products.length)
    }
useEffect(()=>{
   const timer = setInterval(()=>{
     nextSlide()
    },2500)
    return()=>{
    clearInterval(timer)
    }
},[products.length])


    return(
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <img src="/assets/arrowkey.png" alt ="left-arrow" onClick={prevSlide}/>
        
        {products.length > 0 && (
            <img src={products[activeImage].thumbnail} alt = "image"/>
        ) }
        <img src="/assets/rightarrowkey.png" alt ="right-arrow" onClick={nextSlide}/>
        </div>
    )
}

export default ImageSlider;

