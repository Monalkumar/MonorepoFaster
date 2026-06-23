import React from "react";

const CardComponents = ({response}) =>{
    const{thumbnail} = response
    return(
        <div>
        <img src={thumbnail.product} alt="image"/>
        </div>
    )
}

export default CardComponents;