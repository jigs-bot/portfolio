import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';
import {
    Link
  } from 'react-router-dom';

class Home extends Component {
    componentWillReceiveProps() {
        document.title = "Jigyashu Suman Software Developer Portfolio";
    }

    componentDidMount() {
        document.title = "Jigyashu Suman Software Developer Portfolio";
    }

  render() {
    return (
        <div className="home-page">
            <NavBar page="home"/>
            <div className="home-top-container">
                <div className="home-top-left">
                    <picture className="home-top-left-image">
                        {/* <source srcSet="img/webp/profile.webp" type="image/webp" /> */}
                        <source srcSet="img/png/Profile_.png" type="image/jpeg" /> 
                        <img src="img/png/Profile_.png" alt="Jeremy Shaw" />
                    </picture>
                </div>
                <div className="home-top-right">
                    <h2>Jigyashu Suman</h2>
                    <ul>
                        <li>
                            <div className="icon is-small"><i className="fa fa-user"></i></div>
                            <span>Full Stack Web Developer</span>
                        </li>
                        <li>
                            <div className="icon is-small"><i className="fa fa-location-arrow"></i></div>
                            <span>India</span>
                        </li>
                        <li>
                            <div className="icon is-small"><i className="fa fa-graduation-cap"></i></div>
                            <span>MCA @NIT Warangal</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="home-bottom">
                <div className="home-bottom-text">
                    <p>I'm Jigyashu Suman, a full stack web developer (Mern Satck) and AI / ML Enthusiast.</p>
                    <br />
                    <p>Very much interested in Image Processing and Natural Language Processing(NLP) Domain .<Link to="/contact">Hire Me</Link>.</p>
                    <div className="home-bottom-buttons">
                        <a href="https://github.com/jigs-bot" target="_blank" rel="noreferrer noopener">
                            <div className="button github">
                                <span className="icon is-small"><i className="fab fa-github"></i></span>
                                Github
                            </div>
                        </a>
                        <a href="https://drive.google.com/file/d/1GPzeOjk8gfd_SMNR7cX1hU9WZ_62M1K-/view?usp=sharing" target="_blank" rel="noreferrer noopener">
                            <div className="button CV">
                                <span className="icon is-small"><i className="fa fa-arrow-circle-down"></i></span>
                                Download CV
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/jigyashu-suman/" target="_blank" rel="noreferrer noopener">
                            <div className="button linkedin">
                                <span className="icon is-small"><i className="fab fa-linkedin"></i></span>
                                LinkedIn
                            </div>
                        </a>
                        <a href="/chat" target="_blank">
                            <div className="button blog">
                                <span className="icon is-small"><i className="fab fa-comments-o" aria-hidden="true"></i></span>
                                AIChat
                            </div>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;