import React from "react";
import "./PhotoViewer.css";

function PhotoViewer(props) {
    return (
        <div>
           <img src={props.src}/>
        </div>
    );
}

export{PhotoViewer}; 