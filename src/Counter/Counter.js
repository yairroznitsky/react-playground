import { useState } from "react";



export default function Counter(){

const [num, setNum] = useState(0);


function increase(){
    setNum(num+1);

}
function decrease(){
    setNum(num-1);

}


return (<div> 
        <span>{num}</span>
        <button onClick = {increase}>Increase</button>
        <button onClick = {decrease}>Decrease</button>



    </div>);
}