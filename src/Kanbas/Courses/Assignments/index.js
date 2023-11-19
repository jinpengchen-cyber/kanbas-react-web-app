import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Modal from './Modal';
import { deleteAssignment as deleteAssignmentRedux, addAssignment, updateAssignment, selectAssignment } from './assignmentsReducer';
import './index.css';
import * as client from "./client";

function Assignments() {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [assignments, setAssignments] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedAssignmentId, setSelectedAssignmentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        client.findAssignmentsForCourse(courseId).then((fetchedAssignments) => {
            setAssignments(fetchedAssignments);
        });
    }, [courseId]);

    const handleDeleteClick = (assignmentId) => {
        setSelectedAssignmentId(assignmentId);
        setModalOpen(true);
    };

    const handleAddNewAssignment = () => {
        client.createAssignment(courseId, { title: 'New Assignment' })
            .then((assignment) => {
                dispatch(addAssignment(assignment));
                setAssignments([assignment, ...assignments]);
                navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`);
            })
            .catch(error => {
                console.error('Error creating assignment:', error);
            });
    };


    const handleConfirmDelete = () => {
        client.deleteAssignment(selectedAssignmentId)
            .then(() => {
                setAssignments(assignments.filter(assignment => assignment._id !== selectedAssignmentId));
                setModalOpen(false);
            })
            .catch(error => {
                console.error('Error deleting assignment:', error);
            });
    };


    return (
        <div className="container">
            <h2>Assignments for course {courseId}</h2>
            <div className="modules-header border-bottom">
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Search for Assignment" />
                    <div className="button-group">
                        <button className="btn btn-secondary">+ Group</button>
                        <button className="btn btn-danger assign" onClick={handleAddNewAssignment}>+ Assignment</button>

                        <button className="btn btn-secondary">⋮</button>
                    </div>
                </div>
            </div>

            <div className="list-group">
                <div className="list-group-header">Assignments</div>
                {assignments.map((assignment) => (
                    <div className="list-group-item hw" key={assignment._id}>
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="assignment-link">
                            <h3 className="assignment-title">{assignment.title}</h3>

                            {assignment.description &&
                                <p className="assignment-description">{assignment.description}</p>
                            }

                            {assignment.dueDate &&
                                <p className="assignment-date">Due Date: {assignment.dueDate}</p>
                            }

                            {assignment.availableFromDate &&
                                <p className="assignment-date">Available From: {assignment.availableFromDate}</p>
                            }

                            {assignment.availableUntilDate &&
                                <p className="assignment-date">Available Until: {assignment.availableUntilDate}</p>
                            }
                        </Link>
                        <button onClick={() => handleDeleteClick(assignment._id)} className="btn btn-danger delete-btn">Delete</button>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={modalOpen}
                title="Delete Assignment"
                content="Are you sure you want to delete this assignment?"
                onCancel={() => setModalOpen(false)}
                onConfirm={handleConfirmDelete}
            />

        </div>
    );
}

export default Assignments;