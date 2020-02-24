import React from "react";
import {ImageUrls} from "../data";
import "./ThumbnailsImages.css";

function ThumbnailImages(){
    const listOfImages = [];
    
    for (let i = 0; i < ImageUrls.length; i++){
        const image = ImageUrls[i];
        listOfImages.push(<li><img src = {image}/></li>);
    }
    return (
        <div>
           <ul>
               {listOfImages}
           </ul>
        </div>
    );
}

export{ThumbnailImages};