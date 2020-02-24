import React, {useState} from "react";
import "./PhotoViewer.css";

function PhotoViewer(props) {
    return (
        <div>
           <img className="mainImage" src={props.src}/>
        </div>
    );
}



export{PhotoViewer}; 
