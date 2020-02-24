import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PhotoViewer} from "./photoViewerComponent/PhotoViewer";

function App() {
  return (
      <div className = "my-class">
          <h1>React Photo Viewer</h1>
          <PhotoViewer src={"https://i.picsum.photos/id/600/1600/900.jpg"}/>
      </div>
  );
}

export default App;
