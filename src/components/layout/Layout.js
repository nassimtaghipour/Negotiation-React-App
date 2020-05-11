import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <Link className="mainMenu" to="/">
              Negotiation App{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
        </Navbar>

        <main style={{ paddingTop: "85px", paddingBottom: "50px" }}>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Layout;
