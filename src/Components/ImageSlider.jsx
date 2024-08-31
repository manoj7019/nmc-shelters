import React from 'react'
import Image1 from '/slider1_1.gif'
import Image2 from '/slider1_2.gif'
import Image3 from '/slider1_3.gif'
import Image4 from '/slider1_4.gif'
import Image5 from '/slider1_5.gif'
import Image6 from '/slider1_6.gif'
import Image7 from '/slider1_7.gif'
import Image8 from '/slider1_8.gif'
import Image9 from '/slider1_9.gif'
import Image10 from '/slider1_10.gif'

import Card1 from '/card1_1.jpeg'
import Card2 from '/card1_2.jpeg'
import Card3 from '/card1_3.jpeg'
import Card4 from '/card1_4.jpeg'
import Card5 from '/card1_5.jpeg'
import Card6 from '/card1_6.jpeg'
import Card7 from '/card1_7.jpeg'
import Card8 from '/card1_8.jpeg'
import Card9 from '/card1_9.jpeg'

import '../App.css'


const ImageSlider = () => {

    const style1 = {
        '--width': '100px',
        '--height': '100px',
        '--quantity': 20
    }

    const style2 = {
        '--width': '200px',
        '--height': '180px',
        '--quantity': 9
    }
    

  return (
    <div>
      {/* <div className="slider"
        style = {style1}
        >
        <div className="list">
            <div className="item" style={{'--position': 1}}><img src={Image1} alt=""/></div>
            <div className="item" style={{'--position': 2}}><img src={Image2} alt=""/></div>
            <div className="item" style={{'--position': 3}}><img src={Image3} alt=""/></div>
            <div className="item" style={{'--position': 4}}><img src={Image4} alt=""/></div>
            <div className="item" style={{'--position': 5}}><img src={Image5} alt=""/></div>
            <div className="item" style={{'--position': 6}}><img src={Image6} alt=""/></div>
            <div className="item" style={{'--position': 7}}><img src={Image7} alt=""/></div>
            <div className="item" style={{'--position': 8}}><img src={Image8} alt=""/></div>
            <div className="item" style={{'--position': 9}}><img src={Image9} alt=""/></div>
            <div className="item" style={{'--position': 10}}><img src={Image10} alt=""/></div>
            <div className="item" style={{'--position': 11}}><img src={Image1} alt=""/></div>
            <div className="item" style={{'--position': 12}}><img src={Image2} alt=""/></div>
            <div className="item" style={{'--position': 13}}><img src={Image3} alt=""/></div>
            <div className="item" style={{'--position': 14}}><img src={Image4} alt=""/></div>
            <div className="item" style={{'--position': 15}}><img src={Image5} alt=""/></div>
            <div className="item" style={{'--position': 16}}><img src={Image6} alt=""/></div>
            <div className="item" style={{'--position': 17}}><img src={Image7} alt=""/></div>
            <div className="item" style={{'--position': 18}}><img src={Image8} alt=""/></div>
            <div className="item" style={{'--position': 19}}><img src={Image9} alt=""/></div>
            <div className="item" style={{'--position': 20}}><img src={Image10} alt=""/></div>
        </div>
    </div> */}

    <br/>
    <br/>

    <div className="slider" reverse="true"
    style = {style2}>
        <div className="list">
            <div id='item' className="item" style={{'--position': 1}}><img src={Card1} alt=""/></div>
            <div id='item' className="item" style={{'--position': 2}}><img src={Card2} alt=""/></div>
            <div id='item' className="item" style={{'--position': 3}}><img src={Card3} alt=""/></div>
            <div id='item' className="item" style={{'--position': 4}}><img src={Card4} alt=""/></div>
            <div id='item' className="item" style={{'--position': 5}}><img src={Card5} alt=""/></div>
            <div id='item' className="item" style={{'--position': 6}}><img src={Card6} alt=""/></div>
            <div id='item' className="item" style={{'--position': 7}}><img src={Card7} alt=""/></div>
            <div id='item' className="item" style={{'--position': 8}}><img src={Card8} alt=""/></div>
            <div id='item' className="item" style={{'--position': 9}}><img src={Card9} alt=""/></div>
        </div>
    </div>
    </div>
  )
}

export default ImageSlider
