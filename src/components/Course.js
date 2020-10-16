// src/components/CourseInput.js
import React, {useState} from "react";
import CourseDisplay from './CourseDisplay.js';

const CourseControls = props => {
  
    const [tempCourseName, setTempCourseName] = useState('');
    const [courseName, setCourseName] = useState('');    
 
    const handleChange = e => {
      setTempCourseName(e.target.value);
    };
    
    const handleAdd = e => {
      setCourseName(tempCourseName);
    }

    return(
        <div id="divCourse" style={{marginTop:"20px",marginLeft:"10px"}}>
            <input 
              name="courseName"
              type="text" 
              onChange={handleChange} 
              placeholder="Please enter the Course Name"
              style={{width:"400px",fontSize:"16px"}}
            />
            <button onClick={handleAdd} style={{style:"inline-block",marginLeft:"5px"}}>Add Course</button>
            <button onClick={props.resetCourse} style={{style:"inline-block",marginLeft:"5px"}}>Reset</button>
            <CourseDisplay courseName={courseName}/>
        </div>
    );
}

const Course = () => {
    const [courseId, setCourseId] = useState(1);
    return <CourseControls key={courseId} resetCourse={() => setCourseId(courseId + 1)}/>;
  }


export default Course;


