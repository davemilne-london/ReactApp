// src/components/CourseInput.js
import React, {useState} from "react";
import CourseDisplay from './CourseDisplay.js';
import './Course.css';

const CourseControls = props => {
  
    const [courseName, setCourseName] = useState('');    
    const [courses, setCourses] = useState([]);

    const inputBox = React.createRef('inputBox');
 
    const handleChange = e => {
      setCourseName(e.target.value);
    };
    
    const handleAdd = e => {
      setCourses([...courses, courseName]);
      inputBox.current.value = "";
    }

    return(
        <div id="divCourse" className="DivCourseName">
            <input 
              name="courseName"
              type="text" 
              ref={inputBox}
              onChange={handleChange} 
              placeholder="Please enter the Course Name"
             />
            <button onClick={handleAdd}>Add Course</button>
            <button onClick={props.resetCourse}>Reset</button>
            {courses.map(c => <CourseDisplay courseName={c}/>)}
        </div>
    );
}

const Course = () => {
    const [courseId, setCourseId] = useState(1);
    return <CourseControls key={courseId} resetCourse={() => setCourseId(courseId + 1)}/>;
  }


export default Course;


