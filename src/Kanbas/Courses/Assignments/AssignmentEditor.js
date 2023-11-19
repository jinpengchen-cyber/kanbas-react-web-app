import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import * as client from "./client";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const navigate = useNavigate();
  
  const [assignment, setAssignment] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [availableFromDate, setAvailableFromDate] = useState("");
  const [availableUntilDate, setAvailableUntilDate] = useState("");

  useEffect(() => {
    if (assignmentId) {
      client.findAssignmentById(assignmentId).then((fetchedAssignment) => {
        setAssignment(fetchedAssignment);
        setTitle(fetchedAssignment.title);
        setDescription(fetchedAssignment.description);
        setDueDate(fetchedAssignment.dueDate);
        setAvailableFromDate(fetchedAssignment.availableFromDate);
        setAvailableUntilDate(fetchedAssignment.availableUntilDate);
      });
    }
  }, [assignmentId]);

  const handleSave = () => {
    const assignmentData = {
      title,
      description,
      dueDate,
      availableFromDate,
      availableUntilDate,
      course: courseId
    };

    if (assignmentId) {
      client.updateAssignment({ ...assignmentData, _id: assignmentId })
        .then(() => navigate(`/Kanbas/Courses/${courseId}/Assignments`))
        .catch(error => console.error('Error updating assignment:', error));
    } else {
      client.createAssignment(courseId, assignmentData)
        .then(() => navigate(`/Kanbas/Courses/${courseId}/Assignments`))
        .catch(error => console.error('Error creating assignment:', error));
    }
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
            <button onClick={handleSave} className="btn btn-success">Save</button> 

        </div>
    );
}
export default AssignmentEditor;
