import React, { useState } from "react";
import "./IssuesPage.scss";

const IssuesPage = () => {
  // Dummy data for issues
  const issuesData = [
    { id: 1, title: "Fix login authentication bug", priority: "High", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut lobortis leo." },
    { id: 2, title: "Update styling for homepage", priority: "Medium", description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." },
    { id: 3, title: "Implement new feature X", priority: "Low", description: "Nullam eget odio eu nunc feugiat hendrerit vel sit amet arcu." },
  ];

  const [selectedIssue, setSelectedIssue] = useState(null);

  const handleIssueClick = (issueId) => {
    setSelectedIssue(issuesData.find((issue) => issue.id === issueId));
  };

  const handleCloseDescription = () => {
    setSelectedIssue(null);
  };

  return (
    <div className="issues-page">
      <h1>Project Issues</h1>
      <div className="issues-list">
        {issuesData.map((issue) => (
          <div key={issue.id} className="issue-item" onClick={() => handleIssueClick(issue.id)}>
            <div className="issue-title">{issue.title}</div>
            <div className="issue-priority">{issue.priority}</div>
          </div>
        ))}
      </div>
      {selectedIssue && (
        <div className="issue-description">
          <h2>{selectedIssue.title}</h2>
          <p>{selectedIssue.description}</p>
          <button onClick={handleCloseDescription}>Close Description</button>
        </div>
      )}
    </div>
  );
}

export default IssuesPage;
