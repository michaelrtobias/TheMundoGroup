import React from "react";
import Home from "../home/index";
import Products from "../products/index";
import ContactUs from "../contactUs/index";
import Watches from "../watches/index";
import About from "../about/index";
import Diamonds from "../diamonds/index";
import Jewlery from "../jewlery/index";
import BeltsAndBuckels from "../beltsAndBuckels/index";
import Bracelets from "../bracelets/index";
import GoldLink from "../goldLink/index";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import LeatherGoods from "../leatherGoods";
import PartsAndAccessories from "../partsAndAccessories";

const Body = styled.div`
  background-color: white;
`;

const Header = styled.header`
  display: flex;
  justify-context: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
`;

const TitleBox = styled.div`
  background-color: #343a40;
`;
function App() {
  return (
    <Header>
      <Body>
        <Router>
          <TitleBox>
            <Title>The Mundo Group</Title>
          </TitleBox>
          <Navbar bg="dark" variant="dark" expand="md" sticky="top">
            <Navbar.Brand>
              <img
                src="444-4447220_clipart-earth-logo-clipart-earth-logo-transparent-globe.png"
                alt=""
                width="30"
                height="30"
              ></img>
              {"  "}
              <Link to="/">The Mundo Group</Link>
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
                <NavDropdown title="Watches" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to="/watches">Pre-Owned Watches</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/partsandaccessories">Parts & Accessories</Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Jewlery" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to="/diamonds">Diamonds</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/bracelets">Bracelets</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/goldlink">Gold Link</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="/jewlery">See All Jewlery</Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Fine Goods" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to="/beltsandbuckels">Belts aand Buckels</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/leathergoods">Leather Goods</Link>
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
            <Route path="/bracelets" component={Bracelets}></Route>
            <Route path="/goldlink" component={GoldLink}></Route>
            <Route
              path="/partsandaccessories"
              component={PartsAndAccessories}
            ></Route>
            <Route path="/leathergoods" component={LeatherGoods}></Route>
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
