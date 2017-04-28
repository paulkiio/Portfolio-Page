import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import RouteNavItem from './components/RouteNavItem';
import Routes from './Routes';
import './App.css';

class App extends Component {

  handleNavLink = (event) => {
    event.preventDefault();
    this.props.history(event.currentTarget.getAttribute('href'));
  }

  render() {
    return (
      <div className="App">
        <Navbar fluid collapseOnSelec>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Paul Wathome</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <RouteNavItem onclick={this.handleNavLink} href="/about">About</RouteNavItem>
              <RouteNavItem onclick={this.handleNavLink} href="/Resume">Resume</RouteNavItem>
              <RouteNavItem onclick={this.handleNavLink} href="/projects">Projects</RouteNavItem>
              <RouteNavItem onclick={this.handleNavLink} href="/contact">Contact</RouteNavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes/>
      </div>
    );
  }
}

export default withRouter(App);
