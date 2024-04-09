import React, { useState } from "react";
import "./Bug.scss";
import { FaRegTrashAlt, FaExchangeAlt } from "react-icons/fa";

function Bug({ task, onStatusChange, onPriorityChange, onTaskRemove }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedPriority, setEditedPriority] = useState(task.priority);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleStatusClick = () => {
    const id = task.id;
    onStatusChange(id);
  };

  const handleRemoveClick = () => {
    const id = task.id;
    onTaskRemove(id);
  };

  const handleEditSave = () => {
    const id = task.id;
    onPriorityChange(id, editedPriority);
    setIsEditing(false);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setEditedDescription(task.description);
    setEditedPriority(task.priority);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="task-container">
      <div className="task-container-button">
        {!isEditing ? (
          <button className="task-button" onClick={() => setIsEditing(true)}>
            {task.description}
          </button>
        ) : (
          <form className="task-form">
            <input
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
            
            <button type="button" className="save-button" onClick={handleEditSave}>
              Save
            </button>
            <button className="cancel-button" type="button" onClick={handleEditCancel}>
              Cancel
            </button>

            <button className="removeButton" onClick={handleRemoveClick}>
              <FaRegTrashAlt /> Remove Task
            </button>
          </form>
        )}

        {isEditing && (
          <div className="props">
            <p>Id: {task.id}</p>

            <hr></hr>

            <p>Status: {task.done ? "Completed" : "Open"}</p>
            <button className="changeButton" onClick={handleStatusClick}>
              <FaExchangeAlt /> Change Status
            </button>

            <hr></hr>

            <p>Priority: {task.priority}</p>
            <select
              value={editedPriority}
              onChange={(e) => setEditedPriority(e.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            
            

            {/* Comment section within the editing form */}
            <div className="comment-section">

              <hr></hr>

              <p>Add a Comment:</p>
              <textarea
                rows={3}
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button className="add-comment-button" type="button" onClick={handleCommentSubmit}>
                Add Comment
              </button>

              <hr></hr>

              <p>Comment Section:</p>
              <div className="comments-list">
                {comments.map((comment, index) => (
                  <div key={index}>{comment}</div>
                ))}
              </div>
            </div>
          </div>
          
        )}
        
      </div>
      
    </div>
  );
}

export default Bug;
