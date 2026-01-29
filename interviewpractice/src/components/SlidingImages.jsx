import React, {useEffect, useState} from "react";

const SlidingImages = () =>{
    const [products, setProducts] = useState([]);
    const[activeImage,setActiveImage] = useState(0);

    const fetchImages = async()=>{
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        console.log(result.products);
        setProducts(result.products )
    }

    useEffect(()=>{
    fetchImages()
    },[])

    const prevSlide=()=>{
        setActiveImage((activeImage)=>(activeImage-1) < 0 ? products.length-1 : activeImage-1 )
    }
    const nextSlide=()=>{
         if(products.length === 0) return;
         setActiveImage((activeImage)=>(activeImage+1)%products.length)
    }

    useEffect(()=>{
        let timer = setInterval(()=>{
              nextSlide()
        },2000);
        return()=>{
            clearInterval(timer)
        }
    },[products.length])
    return(
        <div>
       <img src="/assets/arrowkey.png" alt="left-arrow" onClick={prevSlide}/>
       {
        products.length>0 &&(
            <img src={products[activeImage].thumbnail} alt="images"/>
        )
        
       }
       <img src="/assets/rightarrowkey.png" alt="right-arrow" onClick={nextSlide}/>
     <div>
       {products.map((_,index)=>(
        <img style={{width:"25px",height:"25px"}} src={"/assets/period.png"} key={index} alt="circle-image"  onClick={() => setActiveImage(index)} className={index===activeImage?"movingImages":"moveImages"} />
       ))}
       </div>

        </div>
    )
}

export default SlidingImages;