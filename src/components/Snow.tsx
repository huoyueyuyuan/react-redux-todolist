import React from "react";
import { useSelector } from "react-redux";

import '../App.css';


export const SnowComponeent = () => {
  
    const show = useSelector((state:any) => state.todos.showSnow);
  
    return (
      <section id="snow" className="position-relative z-3">
        
        {show && 
          <div className="snowFlake_container w-100 position-absolute">
          
          <div className="position-absolute top-50 start-50 snowFlake-block">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
        
        } 
    


        
      </section>
      
    );
  };
  