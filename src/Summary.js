import React from "react";
import ProfilePic from "../src/cv1.JPG";
import { NavLink } from "react-router-dom";

export default function Summary() {
  return (
    <div className="row summaryDiv">
      <div className="col-md-5">
        <img
          src={ProfilePic}
          alt="profile picture"
          id="profilePic"
          className="profile-pic-responsive btn-circle"
        />
      </div>
      <div className="col-md-6">
        <h1 className="hello">Hello,</h1>
        <h1>a bit about me:</h1>
        <div className="row">
          <NavLink to="/Resume">
            <button
              type="button"
              className="btn-circle resumeButton btn-responsive col-md-4"
            >
              MY RESUME
            </button>
          </NavLink>

          <NavLink to="/Project">
            <button
              type="button"
              className="btn-circle workButton btn-responsive col-md-4"
            >
              MY WORK
            </button>
          </NavLink>

          <button
            type="button"
            className="btn-circle skillButton btn-responsive col-md-4"
          >
            MY SKILLS
          </button>
        </div>

        <br />
        <br />
        <p>
          This property tells the content to fill the container in a variety of
          ways; such as "preserve that aspect ratio" or "stretch up and take up
          as much space as possible". Look at the following image from Paris,
          which is 400x300 pixels:
        </p>
      </div>
      <br />
      <br />
      <div className="col-md-1"></div>
    </div>
  );
}
