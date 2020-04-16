import React, { Component } from 'react'
import './Home.css'
import logo from '../Pages/asset/foto.jpg'
import foto from '../Pages/asset/google.png'
import foto2 from '../Pages/asset/fb.png'
import foto3 from '../Pages/asset/linkedin.png'
import foto4 from '../Pages/asset/twitter.png'
import foto5 from '../Pages/asset/me.png'

class Home extends Component {
    render() {
        return (
            <div>   
            <img  className = "img-s" src={logo} alt=""/>
            <h2 className="text" id="about">About Me</h2>
            <p className ="sentence">I am a simple, creative and innovative person who has a passion in science and technology, 
            strong analytical skills to identify critical problem.
                I am looking forward to join with your team
         </p>
         <div>
         <img className="image-1" src={foto5}  alt=""/>
         </div>
        <div className="foto" id="contact">
         <a href="https://www.gmail.com/"><img className ="spasi"src={foto} alt=""/></a>
         <a href="https://www.facebook.com/"><img className ="spasi"src={foto2} alt=""/></a>
         <a href="https://www.linkedin.com/"><img className ="spasi"src={foto3} alt=""/></a>
         <a href="https://www.twitter.com/"><img className ="spasi"src={foto4} alt=""/></a>
         </div>
        
          
         </div>
        
        )
    }
}

export default Home