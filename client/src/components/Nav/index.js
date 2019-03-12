import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Project Experience Tracker
      </a>
      <a href="/ProjectEntry/">   Project Entry</a>
      <a href="#">   Project Information</a>
    </nav>
  );
}

export default Nav;
