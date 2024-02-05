// NotFoundPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { BiError } from "react-icons/bi";
import "../styles/main.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <BiError className="not-found-icon" />
        <h1>404 - Not Found</h1>
        <p>Sorry, the page you are looking for might be in another galaxy.</p>
        <Link to="/">Go back to Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
