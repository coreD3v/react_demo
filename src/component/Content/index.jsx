import {React, useState} from 'react'
import "./styles.css"
    

function index() {

    const images = [
        "src/assets/image2.jpg",
        "src/assets/image3.jpg",
        "src/assets/image4.jpg"
    ];
    const [selected, setSelected] = useState(0);

    function selectImage(index) {
        if (index < images.length) {
            setSelected(index);
        }
    }

  return (
    <div className='container'>
        <div className="content-wrapper">
            <div className="content">
                <h1 className="title">Thomas</h1>
                <p className="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum enim eos dolorum dignissimos consectetur unde earum voluptates magnam officiis eaque
                    libero, ad non placeat nostrum asperiores aut minima. Officiis, harum!
                </p>
                <div className="button-group">
                    <button className="contact-btn">Contact Us</button>
                    <button className="about-btn">About Us</button>
                </div>
            </div>
            <div className="slider">
                <img src={ images[selected] } className="selected" />
            </div>
        </div>
        <div className="dot-container">
        { images.map((_, index) => {
            return <div className={`dot ${index === selected ? 'selected': ''}`} key={index} onClick={() => selectImage(index)}></div>
        }) }
        </div>
    </div>
  )
}

export default index