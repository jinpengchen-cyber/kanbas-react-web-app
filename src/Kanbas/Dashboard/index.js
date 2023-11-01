

import { React, useState } from "react";
import './Dashboard.css';

import db from "../Database";
import { Link } from "react-router-dom";

function Dashboard({
    courses,
    setCourses,
    course,
    setCourse,
    isEditing,
    setIsEditing,
    addNewCourse,
    handleEdit,
    handleUpdate,
    handleDelete
  }) {

    

    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                {/* Form to edit the course state */}
                <input value={course.name} onChange={(e) => setCourse(prev => ({...prev, name: e.target.value}))} className="form-control" />
                <input value={course.number} onChange={(e) => setCourse(prev => ({...prev, number: e.target.value}))} className="form-control" />
                <input value={course.startDate} onChange={(e) => setCourse(prev => ({...prev, startDate: e.target.value}))} className="form-control" type="date" />
                <input value={course.endDate} onChange={(e) => setCourse(prev => ({...prev, endDate: e.target.value}))} className="form-control" type="date" />
                {isEditing ? 
                    <button onClick={handleUpdate}>Update</button> 
                    : 
                    <button onClick={addNewCourse}>Add</button>
                }
            </div>
            <div className="list-group">
                {courses.map(course => (
                    <div key={course._id}>
                        <Link to={`/Kanbas/Courses/${course._id}`} className="list-group-item">{course.name}</Link>
                        <button onClick={(event) => handleEdit(event, course)}>Edit</button>
                        <button onClick={(event) => handleDelete(event, course._id)}>Delete</button>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
