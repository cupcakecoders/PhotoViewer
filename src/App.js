import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PhotoViewer} from "./photoViewerComponent/PhotoViewer";
import {ThumbnailImages} from "./ThumbnailsImages/ThumbnailsImages";

function App() {
  return (
      <div className = "my-class">
          <h1>React Photo Viewer</h1>
          <PhotoViewer src={"https://i.picsum.photos/id/600/1600/900.jpg"}/>
          <ThumbnailImages />
      </div>
  );
}

export default App;
