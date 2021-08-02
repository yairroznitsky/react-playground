import { useState } from "react";
const students = ["yair","nic","pic","zic"]

export default function StudentPicker(){
    
    function pick(){
        console.log("click");
        pickStu(students.pop());
    }    
    
    
    const [stu, pickStu] = useState(null);

    return <div>
        <button onClick = {pick}>Pick</button>
        <div>{stu}</div>
    </div>
}