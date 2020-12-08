import React from "react";
import imagef from '../image2.webp'

function imagees() {
    return (
        <div>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="titleRed">Your name here</h1>
    <br />
    <img src= {imagef} />
    <br />
    <img src="/image1.jpg" />
  </div>
  <video width={320} height={240} controls>
  </video></div>

    )
}
export default imagees;