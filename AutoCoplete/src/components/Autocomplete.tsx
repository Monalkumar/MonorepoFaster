import React, { useState } from "react";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorHandlig from "./ErrorHandlig";

type ProductItems = {
    id: number,
    title: string,

}
type ProductApi = {
    products: ProductItems[]
}



const Autocomplete: React.FC = () => {
    const [products, setProducts] = useState<ProductItems[]>([]);
    const [input, setInput] = useState<string>("");
    const [show,setShow] = useState<boolean>(false)
    const fetchData = async () => {
        console.log("API FETCH", input)
        const response = await fetch("https://dummyjson.com/products/search?q=" + input);
        if(!response.ok){
            throw new Error(`http err", ${response.status}`)
        }
        const result: ProductApi = await response.json();
        setProducts(result.products)

    }
    useEffect(() => {

const nums:number = 500
        const timer = setTimeout(fetchData, nums)
        return () => {
            clearTimeout(timer)
        }
    }, [input])
    return (
        <ErrorBoundary FallbackComponent={ErrorHandlig} onReset={() => setInput("")}> 
        <form>
            <input value={input} placeholder="type here" type="text" style={{ width: "197px" }} onChange={(e) => setInput(e.target.value)} onFocus={()=>setShow(true)} onBlur={()=>setShow(false)} />
            {show &&(<div style={{ border: "1px solid black", width: "200px" }}>
                {
                    products.map((product: ProductItems) => (
                        <span key={product.id}>{product.title}</span>
                    ))
                }
            </div>)}
        </form>
         </ErrorBoundary>

    )
}

export default Autocomplete;