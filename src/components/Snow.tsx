import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import '../App.css'; // 导入您的样式文件


export const SnowComponeent = () => {
  
    const show = useSelector((state:any) => state.todos.showSnow);

  
    console.log(show);
  
    return (
      <section id="snow" className="position-relative z-3">
        
        {true && 
          <div className="snowflake-container z-99">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        } 
        
      </section>
      
    );
  };
  