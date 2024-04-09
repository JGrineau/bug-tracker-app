import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss"; // Import your SCSS file for styling

const Sidebar = () => {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        const appContainer = document.querySelector(".app-container");
        if (appContainer) {
            appContainer.classList.toggle("shifted");
        }
    };

    return (
        <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
            <div className="logoContainer">
                <h2 className="title">evergreen.</h2>
            </div>
            <div className="burgerContainer">
                <div className="burgerTrigger" onClick={toggleSidebar}>
                    {isSidebarOpen ? <span>&gt;</span> : <span>X</span>}
                </div>
                <div className="burgerMenu"></div>
            </div>
            <div className="profileContainer">
                <div className="profileContents">
                    <p className="name">Hello, John👋</p>
                    <p>johnsmith@gmail.com</p>
                </div>
            </div>
            <div className="contentsContainer">
                <ul>
                    <li className={location.pathname === "/" ? "active" : ""}>
                        <Link to="/">Tasks</Link>
                    </li>
                    <li className={location.pathname === "/transactions" ? "active" : ""}>
                        <Link to="/add">Add Bug</Link>
                    </li>
                    <li className={location.pathname === "/performance" ? "active" : ""}>
                        <Link to="/help">Help</Link>
                    </li>
                    {/* Add Link components for other routes */}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
