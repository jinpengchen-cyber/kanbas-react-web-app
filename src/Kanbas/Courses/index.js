import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./courses.css";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses() {
  const { courseId } = useParams();
  const {pathname} = useLocation();
  const [screen] = pathname.split("/");
  // const course = courses.find((course) => course._id === courseId);
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(`https://kanbas-node-server-app-gov7.onrender.com/api/courses/${courseId}`);
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

// const findCourseById = async (courseId) => {
//   const response = await axios.get(`${URL}/${courseId}`);
//   setCourse(response.data);
// };

// useEffect(() => {
//   findCourseById(courseId);
// }, [courseId]);

  return (
    <div>
      
      
      <h1 className="breadcrumb-header">
      <div class="hamburger-icon">
      <span></span>
      <span></span>
      <span></span>
      </div>

        {course.name} <span className="breadcrumb-separator">{'>'}</span> {screen || 'Home'}
        </h1>
        <div className="full-width-border"></div>

      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "100px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
