import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import db from "../../Database";
import { useDispatch } from "react-redux";
import "./modulelist.css";
import {
  addModule,
  deleteModule,
  updateModule,
} from "./modulesReducer";

import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";


function ModuleList() {
  const { courseId } = useParams();
  const [modules, setModules] = useState([]);
  const [module, setModule] = useState({});
  // const [editingModule, setEditingModule] = useState({ name: '', description: '' });

  useEffect(() => {
    findModulesForCourse(courseId).then((modules) => setModules(modules));
  }, [courseId]);

  const dispatch = useDispatch();
  const [expandedModuleId, setExpandedModuleId] = useState(null);

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
      setModules([module, ...modules])
      setModule({ name: "New Module", description: "New Description" });
    });
  }

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
      setModules(modules.filter((module) => module._id !== moduleId));
    }
    )
  }

  const handleUpdateModule = () => {
    client.updateModule(module).then((status) => {
      dispatch(updateModule(module));
      setModules(modules.map((m) => (m._id === module._id ? module : m)));
      setModule({ name: "New Module", description: "New Description" });
    });
  }

  const handleEditModule = (module) => {
    setModule(module);
  }



  return (
    <div className="module-container">
      <div className="actions">
        <button onClick={handleAddModule}>
          Add
        </button>

        <input
          value={module.name}
          onChange={(e) => setModule({ ...module, name: e.target.value })}
          className="form-control"
          placeholder="Module Name"
        />

        <button onClick={() => handleUpdateModule(module)}>
          Update
        </button>


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
                  <button onClick={() => handleEditModule(moduleItem)}>
                    Edit
                  </button>

                  <button onClick={() => handleDeleteModule(moduleItem._id)}>
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
