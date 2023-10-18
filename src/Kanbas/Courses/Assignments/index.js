import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import './index.css';

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );
    
    return (
        <div className="container">
            <h2>Assignments for course {courseId}</h2>
            <div className="modules-header border-bottom">
            <div className="search-container">
    <input type="text" className="search-input" placeholder="Search for Assignment" />
    <div className="button-group">
        <button className="button-grey assign">+ Group</button>
        <button className="button-red assign">+ Assignment</button>
        <button className="button-grey assign">⋮</button>
    </div>
</div>


            </div>

            
            <div className="list-group">
            <div className="list-group-header">
        Assignments
    </div>
                {courseAssignments.map((assignment) => (
                    <div className="list-group-item hw" key={assignment._id}>
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                            {assignment.title}
                        </Link>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Assignments;
