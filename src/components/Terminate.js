import React, { Component } from "react";
import Layout from "./layout/Layout";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
// This component is show when the negotiation is finished
export class Terminate extends Component {
  render() {
    return (
      <Layout>
        <div className="content text-center">
          <Jumbotron fluid>
            <Container>
              <h1>Negotiation is finished</h1>
              <p>for starting again, click on Negotiation App in Navbar .</p>
            </Container>
          </Jumbotron>
        </div>
      </Layout>
    );
  }
}

export default Terminate;
