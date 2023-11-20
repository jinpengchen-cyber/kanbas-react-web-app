import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const URL = "https://kanbas-node-server-app-gov7.onrender.com/a5/assignment";
  const fetchAssignment = async () => {
    const response = await axios.get(`${URL}`);
    setAssignment(response.data);
  };

  const updateTitle = async () => {
    const response = await axios.get(`${URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };

  const updateScore = async (newScore) => {
    const response = await axios.get(`${URL}/score/${newScore}`);
    setAssignment(response.data);
  }

  

  const updateCompleted = async (newCompleted) => {
    const response = await axios.get(`${URL}/completed/${newCompleted}`);
    setAssignment(response.data);
  };

  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a href={`${URL}/title/${assignment.title}`}
        className="btn btn-primary me-2 float-end">
        Update Title
      </a>

      <input
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text" />

      <button onClick={updateTitle}
        className="w-100 btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment}
        className="w-100 btn btn-danger mb-2">
        Fetch Assignment
      </button>


      <h4>Retrieving Objects</h4>
      <a href="https://kanbas-node-server-app-gov7.onrender.com/a5/assignment"
        className="btn btn-primary me-2">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        href="https://kanbas-node-server-app-gov7.onrender.com/a5/assignment/title"
        className="btn btn-primary me-2"
        style={{ marginBottom: 20 }}>
        Get Title
      </a>
      {/* add more space between lines */}
      

      <div></div>
      {/* get score */}
      <a
        href= "https://kanbas-node-server-app-gov7.onrender.com/a5/assignment/score"
        className="btn btn-primary me-2"
        style={{ marginBottom: 20 }}>
        Get Score
      </a>


      <input
        onChange={(e) => setAssignment({ ...assignment, score: e.target.value })}
        value={assignment.score}
        className="form-control mb-2 w-75"
        type="number" />

      <button onClick={() => updateScore(assignment.score)}
        className="btn btn-primary me-2">
        Update Score
      </button>
      <div></div>
      {/* get completed */}
      <a
        href= "https://kanbas-node-server-app-gov7.onrender.com/a5/assignment/completed"
        className="btn btn-primary me-2">
        Get Completed
      </a>

      <div></div>
      <input
        type="checkbox"
        checked={assignment.completed}
        onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
        className="form-check-input mb-2"
      />
      <button onClick={() => updateCompleted(assignment.completed)}
        className="btn btn-primary me-2">
        Update Completed Status
      </button>
    </div>
  );
}
export default WorkingWithObjects;