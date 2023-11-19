import axios from "axios";
// const COURSES_URL = "https://kanbas-node-server-app-gov7.onrender.com/api/courses";
// const ASSIGNMENTS_URL = "https://kanbas-node-server-app-gov7.onrender.com/api/assignments";
const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_URL = `${API_BASE}/courses`;
const ASSIGNMENTS_URL = `${API_BASE}/assignments`;
// create new assignment at the front
export const createAssignment = async (courseId, assignmentData) => {
    const response = await fetch(`${COURSES_URL}/${courseId}/assignments`, {
        method: 'POST',
        body: JSON.stringify(assignmentData),
        headers: {
            'content-type': 'application/json'
        }   
    });
    return await response.json();
}


export const deleteAssignment = async (assignmentId) => {
    const response = await axios.delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
    return response.data;
}

export const findAssignmentsForCourse = async (courseId) => {
    const response = await axios.get(`${COURSES_URL}/${courseId}/assignments`);
    return response.data;
}

export const updateAssignment = async (assignment) => {
    const response = await axios.put(`${ASSIGNMENTS_URL}/${assignment._id}`, assignment);
    return response.data;
}

export const findAssignmentById = async (assignmentId) => {
    const response = await axios.get(`${ASSIGNMENTS_URL}/${assignmentId}`);
    return response.data;
};

