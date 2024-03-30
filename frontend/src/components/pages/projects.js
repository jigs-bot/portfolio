import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//components  
import NavBar from '../nav-bar/nav-bar';

class Projects extends Component {
    componentWillReceiveProps() {
        document.title = "Projects - Jigyashu Suman Software Developer Portfolio";
    }

    componentDidMount() {
        document.title = "Projects - Jigyashu Suman Software Developer Portfolio";
    }

  render() {
    return (
        <div className="projects-page">
            <NavBar page="projects"/>
            <div className="projects-container">
                <h2>Projects</h2>

                

              


                <div className="project">
                    <picture className="project-image">
                        {/* <source srcSet="img/webp/iou-helper-2.webp" type="image/webp" /> */}
                        <source srcSet="img/jpg/Home.png" type="image/jpeg" /> 
                        <img src="img/jpg/Home.png" alt="IOU Helper 2.0 Screenshot" loading="lazy"/>
                    </picture>
                    <div className="project-text">
                        <h3>NIKE CLone Using Mern Stack</h3>
                        <div className="project-tags">
                            <div className="tag tag-html">HTML5</div>
                            <div className="tag tag-css">CSS</div>
                            <div className="tag tag-React">ReactJS</div>
                            <div className="tag tag-js">JS</div>
                            <div className="tag tag-nodejs">Node JS</div>
                            <div className="tag tag-mongoDB">MongoDB</div>
                        </div>
                        <p>The Nike Colne Using Mern Stack .</p>
                        <p>Build Api in express for React. Also Build Admin Panel to add and remove products</p>
                        <p></p>
                    </div>
                    <div className="project-links">
                        <a className="project-button" href="https://github.com/jigs-bot/Nike_Clone" target="_blank" rel="noreferrer noopener">
                            <span className="fab fa-github"></span> View Github
                        </a>
                        
                    </div>
                </div>


                <div className="project">
                    <picture className="project-image">
                        {/* <source srcSet="img/webp/vail-vr-discord-bot.webp" type="image/webp" /> */}
                        {/* <source srcSet="img/jpg/vail-vr-discord-bot.jpg" type="image/jpeg" />  */}
                        {/* <img src="img/jpg/vail-vr-discord-bot.jpg" alt="Vail VR Discord Bot Screenshot" loading="lazy"/> */}
                    </picture>
                    <div className="project-text">
                        <h3>Django Chat-App</h3>
                        <div className="project-tags">
                            <div className="tag tag-django">Django</div>
                            <div className="tag tag-python">Python </div>
                            <div className="tag tag-reactjs">ReactJS</div>
                        </div>
                        <p>Built a chat app using Django channels for wsgi communications</p>
                        <p>Integrate the django chat app api with reactjs</p>
                    </div>
                    <div className="project-links">
                        
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Projects;