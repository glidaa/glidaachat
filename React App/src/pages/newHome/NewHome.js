import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap'

import Login from './login/Login';
import Registration from './registration/Registration';

import './auth.css';
 
import Landing from './Landing';

class NewHome extends Component {
  state = {
    loadingState: false
  }

  setRenderLoadingState = (loadingState) => {
    this.setState({
      loadingState: loadingState
    });
  } 
  render() {
    return (
        <React.Fragment>

        <Landing /> 
       <div className="container">
        <div className = {`overlay auth-loading ${this.state.loadingState ? '' : 'visibility-hidden'}`}>
          <h1>Loading</h1>
        </div>
        <div className="authentication-screen">
          <Tabs variant="pills" defaultActiveKey = "login" >
            <Tab eventKey="login" title="Login">
              <Login loadingState={this.setRenderLoadingState}/>
            </Tab>
            <Tab eventKey="registration" title="Registration">
              <Registration loadingState={this.setRenderLoadingState}/>
            </Tab>
          </Tabs>
        </div>
      </div></React.Fragment>
    );
  }
}

export default NewHome;
