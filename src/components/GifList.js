import React from "react";


function GifList({images}){

    return(
        <div>
            <ul>
                {images.map((url,index)=>{
                    return <li key={"img_"+index}>
                            <img src={url} alt="gif"/>
                        </li>
                })}

            </ul>
        </div>
    )
}

export default GifList