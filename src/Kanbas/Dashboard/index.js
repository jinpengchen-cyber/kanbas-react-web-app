

import { React, useState } from "react";
import './Dashboard.css';

import db from "../Database";
import { Link } from "react-router-dom";
import axios from "axios";

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
                <input value={course.name} onChange={(e) => setCourse(prev => ({ ...prev, name: e.target.value }))} className="form-control" />
                <input value={course.number} onChange={(e) => setCourse(prev => ({ ...prev, number: e.target.value }))} className="form-control" />
                <input value={course.startDate} onChange={(e) => setCourse(prev => ({ ...prev, startDate: e.target.value }))} className="form-control" type="date" />
                <input value={course.endDate} onChange={(e) => setCourse(prev => ({ ...prev, endDate: e.target.value }))} className="form-control" type="date" />
                {isEditing ?
                    <button onClick={handleUpdate}>Update</button>
                    :
                    <button onClick={addNewCourse}>Add</button>
                }
            </div>

            <div className="row row-cols-1 row-cols-md-5 g-4">
                {courses.map((course, index) => (
                    <div className="col" key={course._id} style={{ width: 300 }}>
                        <div className="card">
                            <img src="/images/react.png" className="card-img-top" alt="Course Image" />
                            <div className="card-body">
                                <button
                                    onClick={() => handleDelete(course._id)}
                                    className="btn btn-danger float-end"
                                >
                                    Delete
                                </button>
                                <button onClick={(event) => handleEdit(event, course)} className="btn btn-primary">
                                    Edit
                                </button>
                                <h5 className="card-title">{course.name}</h5>
                                <Link
                                    to={`/Kanbas/Courses/${course._id}`}
                                    className="btn btn-primary"
                                >
                                    View
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    );
}

export default Dashboard;
