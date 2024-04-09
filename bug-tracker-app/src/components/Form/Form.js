import {React, useState} from 'react'
import CustomButton from '../CustomButton/CustomButton'
import "./Form.scss";
import { FaPlusCircle } from "react-icons/fa";
const Form = ({onAddBug}) => {

    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("open");
    const [priority, setPriority] = useState("low");

    //Error state
    const [errorMessage, setErrorMessage] = useState("");

    //Validation for the user to enter a bug
    const validateForm = (event) =>{
        event.preventDefault();
         if (description === ""){
             setErrorMessage("Please provide a description of the issue.");
             alert("ERROR! You must enter a proper description of the bug")
         } else {
            onAddBug({description, status, priority});
            setDescription("");
            setStatus("open");
            setPriority("");
            setErrorMessage("");
         }
     }; 
    

  return (
    <div className="form-container">
    <div className="form">
      <form onSubmit={validateForm}>
        <div className="header-new-bug">
          <h2>Add a New Bug</h2>
        </div>
        {errorMessage !== "" && <div>{errorMessage}</div>}
        <div className="description">
          <label>
            Description:
            <input
              type={"text"}
              maxLength={150}
              value={description}
              placeholder="Enter your Bug here..."
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
        </div>

        {/* Status Dropdown */}
        <div className="status">
          <label>
            Status:
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="open">Open</option>
              <option value="completed">Completed</option>
            </select>
          </label>
        </div>

        {/* Priority Radio Buttons */}
        <div className="Priority">
          <label>
            Priority:
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>
        </div>

        {/* Submit Button */}
        <div className="add-bug-button">
          <CustomButton type="success" size="large" >
            <FaPlusCircle /> Add Bug
          </CustomButton>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Form
