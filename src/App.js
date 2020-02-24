import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PhotoViewer} from "./photoViewerComponent/PhotoViewer";

function App() {
  return (
      <div className = "my-class">
          <h1>React Photo Viewer</h1>
          <PhotoViewer/>
      </div>
  );
}

export default App;
