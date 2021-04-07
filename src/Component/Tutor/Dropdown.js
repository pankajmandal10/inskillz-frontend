import React, {useState} from "react";
import "./Tutor.css"

let courseName = ["Choose Course", "Java", "java Script", "C", "C++"];

export default function Dropdown() {
    const [name, setName]= useState("Choose Course")

 let handleChange = (e) => {
    const newName = e.target.value;
    setName({ name: newName });
  }
    return (
      <div id="select-dropdown">
        <select className="select-courses-name" onChange={(e)=>handleChange(e)}>
          {courseName.map(Course => (
            <option value={Course}>{Course}</option>
          ))}
        </select>
      </div>
    );
}