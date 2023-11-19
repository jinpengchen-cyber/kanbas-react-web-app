import React from 'react';
import './modules.css'; 
import ModuleList from "./ModuleList";

function Modules() {


  const handleAddModule = () => {
    
  }

  return (
    <div className="modules-container">
      <div className="modules-header border-bottom">
      <button className="button-grey">Collapse All</button>
        <button className="button-grey">View Progress</button>
        <button className="button-grey">Publish All</button>
        <button className="btn btn-danger" onClick={handleAddModule}>+ Module</button>
        <button className="button-grey">⋮</button>
      </div>

      <ModuleList />
    </div>
  );
}

export default Modules;
