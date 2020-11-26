import React from "react";
//GITHUB REPOS API
import API from "./Api.js";
import "./Design.scss";

function Design() {
  return (
    <>
      <div className='Design-container'>
        <div className='message-container'>
          <h1 className='Design-title'>DESIGN</h1>
          <span className='design-line'></span>
        </div>
        <p className='design-footnote'>
          Marshalls Landing<br></br>2019|Spring Cocktails<br></br>Mint Julep
        </p>
      </div>
      {/* <div className='Api-container'> */}
      <API />
      {/* </div> */}
    </>
  );
}

export default Design;
