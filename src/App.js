import React, {useState} from 'react';
import './App.css';
import {PhotoViewer} from "./photoViewerComponent/PhotoViewer";
import {ThumbnailImages} from "./ThumbnailsImages/ThumbnailsImages";



function App() {
    const [imageURL, setImageURL] = useState("");
    
  return (
      <div className = "my-class">
          <h1>React Photo Viewer</h1>
          <PhotoViewer src={imageURL}/>
          <ThumbnailImages setImage={setImageURL} image={imageURL}/>
      </div>
  );
}

export default App;
