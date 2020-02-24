import React, {useState} from "react";
import {ImageUrls} from "../data";
import "./ThumbnailsImages.css";

function ThumbnailImages(prop){
    const listOfImages = [];
    
    
    for (let i = 0; i < ImageUrls.length; i++){
        const image = ImageUrls[i];
        listOfImages.push(<li><img className ="imageGallery selected" src = {image} onClick={()=> prop.setImage(image)}/></li>);
    }
    
    
    return (
        <div >
           <ul className="imageContainer">
                {listOfImages}
           </ul>
        </div>
    );
}

export{ThumbnailImages};