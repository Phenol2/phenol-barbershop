import { useEffect } from "react"

import "./Pictures.css"
import Curly from "../../assets/Curly.jpg"
import Afro from "../../assets/Afro.jpg"
import White from "../../assets/White.jpg"


const Pictures = () => {
  
  useEffect(() => {
  
  let els = document.querySelectorAll('.my-class');
        
       els.forEach(btn => {
          btn.addEventListener("click", (e) => {
            removeMe();
            
            e.target.parentElement.classList.add("active")
          })
        
        })
  
        function removeMe(){
            els.forEach(btn => {
              btn.parentElement.classList.remove("active")
            })
        }
  })
  
    return (
      <div className="imgs-container">
       <div className = "image-wrapper active">
          <img 
            src = {Curly} 
            alt = "A curly hair" 
            className= 'my-class' 
          />
          <h4>Spoting waves</h4>
          </div>
          <div className = "image-wrapper">
          <img 
            src = {Afro} 
            alt = "An Afro" 
            className='my-class' 
          />
          <h4>Afro Skin</h4>
          </div>
            <div className = "image-wrapper">
           <img 
             src = {White} 
             alt = "A white hair" 
             className='my-class' 
           />
           <h4>Afro</h4>
           </div>
      </div>
    )
  
}


export default Pictures