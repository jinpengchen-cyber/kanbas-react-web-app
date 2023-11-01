import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import "./modulelist.css";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const [expandedModuleId, setExpandedModuleId] = useState(null);

  return (
    <div className="module-container">
      <div className="actions">
        <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </button>
        <button onClick={() => dispatch(updateModule(module))}>
          Update
        </button>
        <input
        className="input-name"
          value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea
        className="textarea-description"
          value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
      </div>
      
      {modules
        .filter((moduleItem) => moduleItem.course === courseId)
        .map((moduleItem) => (
          <table key={moduleItem._id} className="module-table">
            <tbody>
              <tr>
                <td onClick={() => 
                  setExpandedModuleId(
                    expandedModuleId === moduleItem._id ? null : moduleItem._id
                  )
                }>
                  
                  <h3>
                    {moduleItem.name} 
                    <span className="triangle-indicator">
        {expandedModuleId === moduleItem._id ? "▼" : "►"}
    </span>
                  </h3>
                  <p>{moduleItem.description}</p>
                  <button onClick={() => dispatch(setModule(moduleItem))}>
                    Edit
                  </button>
                  <button onClick={() => dispatch(deleteModule(moduleItem._id))}>
                    Delete
                  </button>
                </td>
              </tr>
              {expandedModuleId === moduleItem._id && moduleItem.lessons?.map((lesson, index) => (
                <tr key={index}>
                  <td>
                    <h4>{lesson.name}</h4>
                    <p>{lesson.description}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
    </div>
  );
}

export default ModuleList;
