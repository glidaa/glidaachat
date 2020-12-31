/*
 * Real time private chatting app using React, Nodejs, mongodb and Socket.io
 * @author Shashank Tiwari
 */

import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

// import Authentication from './pages/authentication/Authentication';
import Home from './pages/home/Home';
import NewHome from './pages/newHome/NewHome';
import NotFound from './pages/not-found/NotFound';

import './App.css';

class App extends Component {
  componentDidMount() {
    const body = document.querySelector('body')

    // vendor
    const vendor = document.createElement('script')
    vendor.async = false
    vendor.src = '/js/vendors.js'
    body.appendChild(vendor)

    //index
    const index = document.createElement('script')
    index.async = false
    index.src = '/js/index.js'
    body.appendChild(index)
    
    //gsap 
    const gsap = document.createElement('script')
    gsap.async = false
    gsap.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js'
    body.appendChild(gsap)
    
    //scrollTrigges
    const scrollTrigger = document.createElement('script')
    scrollTrigger.async = false
    scrollTrigger.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js'
    body.appendChild(scrollTrigger)
    
    // lottie
    const lottie = document.createElement('script')
    lottie.async = false
    lottie.src = '/js/lottie.js'
    body.appendChild(lottie)
    
    //scrolllottie
    const scrollLottie = document.createElement('script')
    scrollLottie.async = false
    scrollLottie.src = '/js/ScrollLottie.js'
    body.appendChild(scrollLottie)

    //register plugin 
      const registerPlugin = document.createElement('script')
      registerPlugin.async = false
      registerPlugin.src = '/js/register.js'
      body.appendChild(registerPlugin)



    // //register plugin
    // gsap.registerPlugin(ScrollTrigger); 
    // ScrollLottie({
    //     target: '#sec02',
    //     path: 'https://assets3.lottiefiles.com/private_files/lf30_P9kQz3.json',
    //     duration: 8,
    //     speed: 'slow'
    // })
    // ScrollLottie({
    //     target: '#sec03',
    //     path: 'https://assets4.lottiefiles.com/packages/lf20_IaX52r.json',
    //     duration: 4,
    //     speed: 'medium'
    // })
    // ScrollLottie({
    //     target: '#sec04',
    //     path: 'https://assets2.lottiefiles.com/packages/lf20_QdVQmS.json',
    //     duration: 4,
    //     speed: 'medium'
    // })
    // ScrollLottie({
    //     target: '#sec05',
    //     path: 'https://assets4.lottiefiles.com/private_files/lf30_lKuCPz.json',
    //     duration: 4,
    //     speed: 'medium'
    // })
  
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={NewHome} />
          <Route path="/home/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
