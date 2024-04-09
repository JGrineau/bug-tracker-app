import React from "react";
import Bug from "./Bug/Bug";

import "./Bugs.scss";

//import { FaCircleArrowUp } from "react-icons/fa6";

export default function Bugs({
  bugs,
  onStatusChange,
  onPriorityChange,
  onTaskRemove,
}) {
  // Filter tasks based on completion status
  const completedBugs = bugs.filter((bug) => bug.done);
  const openBugs = bugs.filter((bug) => !bug.done);

  return (
    <div className="task-form">
      <h2 className="header">Bug Board</h2>
      <div className="task-list">
        {/* Completed Tasks Section */}
        <div className="completed-section">
          <h3>Completed</h3>
          {completedBugs.map((bug, index) => (
            <Bug
              key={index}
              bug={bug}
              onPriorityChange={onPriorityChange}
              onStatusChange={onStatusChange}
              onTaskRemove={onTaskRemove}
            />
          ))}
        </div>

        {/* Open Tasks Sections */}
        <div className="priority-section">
          <h3>Low Priority</h3>
          {openBugs.map((bug) => bug.priority === "Low" && (
            <Bug
              key={bug.id}
              bug={bug}
              onPriorityChange={onPriorityChange}
              onStatusChange={onStatusChange}
              onTaskRemove={onTaskRemove}
            />
          ))}
        </div>
        <div className="priority-section">
          <h3>Medium Priority</h3>
          {openBugs.map((bug) => bug.priority === "Medium" && (
            <Bug
              key={bug.id}
              task={bug}
              onPriorityChange={onPriorityChange}
              onStatusChange={onStatusChange}
              onTaskRemove={onTaskRemove}
            />
          ))}
        </div>
        <div className="priority-section">
          <h3>High Priority</h3>
          {openBugs.map((bug) => bug.priority === "High" && (
            <Bug
              key={bug.id}
              bug={bug}
              onPriorityChange={onPriorityChange}
              onStatusChange={onStatusChange}
              onTaskRemove={onTaskRemove}
            />
          ))}
        </div>
      </div>
      {/* <div className="clear-button">
        <button onClick={onClearTasks}>
          <FaCircleArrowUp /> Clear Tasks
        </button>
      </div> */}
    </div>
  );
}
