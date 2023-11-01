// import {Link} from "react-router-dom";
// import Nav from "../Nav";
import "../index.css";
import { Route, Routes, Navigate, useLocation } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const location = useLocation();
  const [courses, setCourses] = useState(db.courses);
    
  // Use the provided course constant as the initial state
  const [course, setCourse] = useState({
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
  });

  const [isEditing, setIsEditing] = useState(false);

  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
};


  const handleEdit = (event, courseItem) => {
      event.preventDefault();
      setIsEditing(true);
      setCourse(courseItem);
  };

  const handleUpdate = () => {
      setCourses(courses.map(c => c._id === course._id ? course : c));
      setIsEditing(false);
      // Reset the form
      setCourse({
          name: "New Course",
          number: "New Number",
          startDate: "2023-09-10",
          endDate: "2023-12-15",
          _id: null
      });
  };
  

  const handleDelete = (event, courseId) => {
      event.preventDefault();
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