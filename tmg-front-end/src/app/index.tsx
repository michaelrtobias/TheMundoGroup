import React from "react";
import Home from "../home/index";
import Products from "../products/index";
import ContactUs from "../contactUs/index";
import Watches from "../watches/index";
import About from "../about/index";
import Diamonds from "../diamonds/index";
import Jewlery from "../jewlery/index";
import BeltsAndBuckels from "../beltsAndBuckels/index";
// import NavBar from "../navBar/index";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Body = styled.div`
  background-color: orange;
`;

const Header = styled.header`
  display: flex;
  justify-context: center;
  flex-direction: column;
`;

function App() {
  return (
    <Header>
      <Body>
        <Router>
          <h1>The Mundo Group</h1>

          <Navbar bg="dark" variant="dark" expand="md">
            <Navbar.Brand>
              <Link to="/">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/about">About</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contact">Contact Us</Link>
                </Nav.Link>
                <NavDropdown title="Products" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to="/watches">Watches</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/diamonds">Diamonds</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/jewlery">Jewlery</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/beltsandbuckels">Belts and Buckels</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/about" component={About}></Route>
            <Route path="/watches" component={Watches}></Route>
            <Route path="/diamonds" component={Diamonds}></Route>
            <Route path="/jewlery" component={Jewlery}></Route>
            <Route path="/beltsandbuckels" component={BeltsAndBuckels}></Route>
            <Route path="/products" component={Products}></Route>
            <Route path="/contact" component={ContactUs}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </Router>
      </Body>
    </Header>
  );
}

export default App;
