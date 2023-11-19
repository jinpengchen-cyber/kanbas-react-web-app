import React from 'react';
import './status.css';

function StatusList() {
  const actions = [
    { name: 'Import Existing Content', icon: 'fa-file-import' },
    { name: 'Import from Commons', icon: 'fa-cloud-download-alt' },
    { name: 'Choose Home Page', icon: 'fa-home' },
    { name: 'View Course Stream', icon: 'fa-stream' },
    { name: 'New Announcement', icon: 'fa-bullhorn' },
    { name: 'New Analytics', icon: 'fa-chart-line' },
    { name: 'View Course Notifications', icon: 'fa-bell' },
  ];

  const toDoItems = [
    { task: 'Grade A1 - ENV + HTML', points: 5, deadline: 'Sep 18 at 11:59pm' },
    { task: 'Grade A2 - ENV + HTML', points: 5, deadline: 'Sep 18 at 11:59pm' },
  ];

  return (
    <div className="status-list-container">
    <ul className="action-list">
    {actions.map((action, index) => (
      <li key={index} className="action-item button">

          <> 
            <i className={`fa ${action.icon}`} aria-hidden="true"></i>
            {action.name}
          </>

      </li>
    ))}
</ul>

      <div className="to-do-list">
        <h2>To Do</h2>
        {toDoItems.map((item, index) => (
          <div key={index} className="to-do-item">
            <span className="task-points">{item.points}</span>
            <span className="task-name">{item.task}</span>
            <span className="task-deadline">{item.deadline}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatusList;
