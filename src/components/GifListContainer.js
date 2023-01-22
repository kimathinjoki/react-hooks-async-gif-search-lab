import React from "react";
import { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const request_url = "https://api.giphy.com/v1/gifs/trending?api_key=RLH6uvGK2KyyVc5ts9jJaWiAndkpALVw&rating=g"

function GifListContainer(){

    const [imageUrls, setImageUrls] = useState([])


    // const [title, setTitle] = useState({
    //     title:"",
    //     url:""
    // })


    useEffect(()=>{
        fetch(request_url)
        .then(r => r.json())
        .then((data)=>{
            console.log(data.data)
            const theData = data.data
            const topThree = theData.slice(0,4)
            console.log(topThree)
            setImageUrls(topThree.map((urls)=>urls.images.original.url))
            console.log(topThree[1].images.original.url)
            // theData.map((titles)=>{
            //     setTitle((t)=>({...title,title:t.title,url:t.images.original.url}))
            // })
        })
    },[])



    // function handleChange(e){
    //     e.preventDefault()
    //     // const searchImage= title[title].filter((ttle)=>ttle.includes(e.target.value))
    //     if(title.title.includes(e.target.value)){
    //         return setImageUrls(title.url)
    //     }
       

    // }

    

    function handleSearch(searchInput){

        let searchUrl = `https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=RLH6uvGK2KyyVc5ts9jJaWiAndkpALVw&rating=g`

        fetch(searchUrl)
        .then(r => r.json())
        .then((data)=>{
            const searchedUrls = data.data.map((gif)=> gif.images.original.url)
            setImageUrls(()=>searchedUrls)
        })



        

    }


    return(
        <div>

            <GifSearch handleSearch={handleSearch} />
            <GifList imageUrls={imageUrls}/>
            
        </div>
    )

}

export default GifListContainer;