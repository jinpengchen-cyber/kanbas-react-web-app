
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate, useParams } from "react-router-dom";
import db from "../../Database";
import {addAssignment, updateAssignment} from "./assignmentsReducer";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignment = useSelector((state) => 
      state.assignments.assignments.find((assignment) => assignment._id === assignmentId)) || {};

  const [title, setTitle] = useState(assignment.title || "");
  const [description, setDescription] = useState(assignment.description || "");
  const [dueDate, setDueDate] = useState(assignment.dueDate || "");
  const [availableFromDate, setAvailableFromDate] = useState(assignment.availableFromDate || "");
  const [availableUntilDate, setAvailableUntilDate] = useState(assignment.availableUntilDate || "");


    const handleSave = () => {
      if (title.trim() === "") {
        alert("Title cannot be empty.");
        return;
    }
      const newAssignment = {
        _id: assignmentId || new Date().getTime().toString(),
        title,
        description,
        dueDate,
        availableFromDate,
        availableUntilDate,
        course: courseId
    };
    
  
      if (assignmentId) {

          dispatch(updateAssignment(newAssignment)); 
      } else {
        console.log("Dispatching new assignment:", newAssignment);
          dispatch(addAssignment(newAssignment));
      }
  
      navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  
    return (
        <div>
            <label>Assignment Name</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control mb-2" />

            <label>Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control mb-2" />

            <label>Due Date</label>
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="form-control mb-2" />

            <label>Available From Date</label>
            <input type="date" value={availableFromDate} onChange={(e) => setAvailableFromDate(e.target.value)} className="form-control mb-2" />

            <label>Available Until Date</label>
            <input type="date" value={availableUntilDate} onChange={(e) => setAvailableUntilDate(e.target.value)} className="form-control mb-2" />

            <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-light">Cancel</Link>
            <button onClick={handleSave} className="btn btn-danger">Save</button>
        </div>
    );
}
export default AssignmentEditor;
