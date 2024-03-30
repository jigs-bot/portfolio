import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';
import { Link } from 'react-router-dom';

class Experience extends Component {
    componentWillReceiveProps() {
        document.title = "Experience - Jigyashu Suman Software Developer Portfolio";
    }

    componentDidMount() {
        document.title = "Experience - Jigyashu Suman Software Developer Portfolio";
    }

  render() {
    return (
        <div className="experience-page">
            <NavBar page="experience"/>
            <div className="experience-container">
                <h2>Will Update Soon</h2>
                
                {/* <div className="experience-block">
                    <a href="https://www.publictrust.co.nz/" className="logo-link" target="_blank" rel="noopener noreferrer">
                        <img src="img/svg/publictrust-logo.svg" className="experience-block-logo" alt="Public Trust Logo" />
                    </a>
                    <div className="experience-block-info">
                        <h3>Developer</h3>
                        <p className="italic">April 2022 - Present</p>
                    </div>
                    <div className="project-tags">
                    <div className="tag tag-html">HTML5</div>
                        <div className="tag tag-scss">SCSS</div>
                        <div className="tag tag-js">JS</div>
                        <div className="tag tag-vue">Vue</div>
                        <div className="tag tag-php">PHP</div>
                        <div className="tag tag-laravel">Laravel</div>
                    </div>
                    <p className="experience-block-text">
                        Developing, testing, and maintaining the <a href="https://www.publictrustonline.co.nz/" target="_blank" rel="noopener noreferrer">Public Trust Platform</a> and <a href="https://www.publictrust.co.nz/" target="_blank" rel="noopener noreferrer">Website</a>.
                    </p>
                </div> */}

                <div className="university-info">
                    <Link to="/education">~ Masters In Computer Application from NIT Warangal ~</Link>
                </div>
            </div>
        </div>
    );
  }
}

export default Experience;