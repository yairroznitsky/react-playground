import { useState } from "react";
import "./RandomColorSquare.css"




export default function RandomColorSquare(){
    
    
    
    function randomColorPicker() {
        console.log("click");
        pickColor('#' +  Math.random().toString(16).substr(-6));
    
    
    }
    
    
    
    const [color, pickColor] = useState("brown");
    
    
    
    
    return <div className = 'RCS' onClick = {randomColorPicker} style  = {{backgroundColor: color}}></div>;




}