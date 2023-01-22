import React, {useState} from "react";

function GifSearch({handleSearch}){

    const [inputValue, setInputValue]= useState("")


    return(
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault()
                setInputValue("")
                handleSearch(inputValue)}}>
                <input type="text" placeholder="Search Gif" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default GifSearch;