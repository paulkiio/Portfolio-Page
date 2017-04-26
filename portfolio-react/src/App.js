import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {stack as Menu} from 'react-burger-menu';
import Routes from './Routes';
import RouteNavItem from './components/RouteNavItem';
import './App.css';

class App extends Component {

  handleNavLink = (event) => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute('href'));
  }

  render() {
    return (
      <div className="App">
        <Menu>
          <RouteNavItem onClick={this.handleNavLink} href="/about">About</RouteNavItem>
          <RouteNavItem onClick={this.handleNavLink} href="/work">Work</RouteNavItem>
          <RouteNavItem href="https://medium.com/@paulkiio" target="_blank">Blog</RouteNavItem>
          <RouteNavItem onClick={this.handleNavLink} href="/contact">Contact</RouteNavItem>
        </Menu>
        <Menu right/>
        <Routes/>
      </div>
    );
  }
}

export default withRouter(App);
