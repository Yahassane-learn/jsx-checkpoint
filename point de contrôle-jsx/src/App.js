import React, { Component } from 'react' ;
import './App.css';
import Pp from './pp_gmc.png';
import style from './style.css' ;
function App() {
  return (
    <div className="App">
      <div className="name" style={{border:'1px solid black',maxWidth: '100vw' }}>
        <h1 className="title">
          I'am King Yahassane
        </h1>
      </div> 
      <div className="red"> 
        <img src={"/Img1.png"} alt="profile"/>
        <img src={Pp} alt="my pp"/>
      </div>
      <video width="320" height="240" controls>
        <source src={"./myvideo.mp4"} type="video/mp4" />
      </video>
    </div> 
  );
}

export default App;
