import React from "react";
import { useEffect, useState } from "react";
import GifList from "./GifList";


const request_url = "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=RLH6uvGK2KyyVc5ts9jJaWiAndkpALVw&rating=g"

function GifListContainer(){

    const [imageUrls, setImageUrls] = useState([])
    const [title, setTitle] = useState({
        title:"",
        url:""
    })


    useEffect(()=>{
        fetch(request_url)
        .then(r => r.json)
        .then((data)=>{
            console.log(data.images.original.url)
            const topThree = data.slice(0,4)
            topThree.map((urls)=>setImageUrls(urls.images.original.url))
            data.map((titles)=>{
                setTitle(()=>({...title,title:titles.title,url:title.images.original.url}))
            })
        })
    },[])

    function handleSubmit(e){
        e.preventDefault()
        // const searchImage= title[title].filter((ttle)=>ttle.includes(e.target.value))
        if(title.title.includes(e.target.value)){
            return setImageUrls(title.url)
        }
       

    }


    return(
        <div>
            <GifList images={imageUrls}/>
            <GifSearch/>
        </div>
    )

}

export default GifListContainer;