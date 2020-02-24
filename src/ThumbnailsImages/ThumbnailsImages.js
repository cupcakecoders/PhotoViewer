import React, {useState} from "react";
import {ImageUrls} from "../data";
import "./ThumbnailsImages.css";



//display current URL 
//add 'onClick' event handler that updates the state when you click on thumbnail 

function ThumbnailImages(){
    const listOfImages = [];
    
    const [imageURL, getImageURL] = useState("");
    
    for (let i = 0; i < ImageUrls.length; i++){
        const image = ImageUrls[i];
        listOfImages.push(<li><img src = {image} onClick={()=> getImageURL (image)}/></li>);
    }
    return (
        <div>
           <ul>
                Selected image: {imageURL}
                {listOfImages}
           </ul>
        </div>
    );
}

export{ThumbnailImages};