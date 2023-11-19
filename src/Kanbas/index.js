// import {Link} from "react-router-dom";
// import Nav from "../Nav";
import "../index.css";
import { Route, Routes, Navigate, useLocation } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
//import db from "./Database";
import React, { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  const location = useLocation();
  const [courses, setCourses] = useState([]);

  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
  const URL = "http://localhost:4000/api/courses";

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);


  const [isEditing, setIsEditing] = useState(false);

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([response.data, ...courses]);
  };


  const handleEdit = (event, courseItem) => {
    event.preventDefault();
    setIsEditing(true);
    setCourse(courseItem);
  };

  const handleUpdate = async() => {
    const response = await axios.put(`${URL}/${course._id}`, course);
    setCourses(courses.map(c => c._id === course._id ? course : c));
    setIsEditing(false);
    setCourse({
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      _id: null
    });
  };


  const handleDelete = async (courseId) => {
    // event.preventDefault();
    await axios.delete(`${URL}/${courseId}`);
    setCourses(courses.filter(course => course._id !== courseId));
  };
  
  return (
    <Provider store={store}>
      <div className="d-flex">
        <div style={{ marginRight: '30px' }}>
          <KanbasNavigation />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<Account />} />
            <Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                isEditing={isEditing}
                handleEdit={handleEdit}
              />}
            />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;