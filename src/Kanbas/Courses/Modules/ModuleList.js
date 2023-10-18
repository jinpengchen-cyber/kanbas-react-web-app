import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import './list.css';

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  
  // State to manage the index of the expanded module
  const [expandedModuleIndex, setExpandedModuleIndex] = useState(null);
  
  return (
    <ul className="list-group module">
      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item week">
             <span className={`triangle ${index === expandedModuleIndex ? "expanded" : ""}`} 
                   onClick={() => setExpandedModuleIndex(index === expandedModuleIndex ? null : index)}>
             </span>
             {module.name}
           </li>
         ))
      }
    </ul>
  );
}

export default ModuleList;
