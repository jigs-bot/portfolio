import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';

class Education extends Component {
    componentWillReceiveProps() {
        document.title = "Education - Jigyashu Suman Software Developer Portfolio";
    }

    componentDidMount() {
        document.title = "Education - Jigyashuremy Suman Software Developer Portfolio";
    }

  render() {
    return (
        <div className="education-page">
            <NavBar page="education"/>
            <div className="education-container">
                <h2>Education</h2>
                <p className="education-explanation">Graduated from <a href="https://www.waikato.ac.nz/" target="_blank" rel="noreferrer noopener">Waikato University</a> with a Bachelor of Science, majoring in Computer Science. My relevant university courses are shown below.</p>

                <h4>400 level</h4>
                <ul>
                    <li>
                        COMP442 – Web Search: Technical and Social Issues
                    </li>
                </ul>
                <h4>300 level</h4>
                <ul>
                    <li>
                        COMP314 – Software Engineering Project
                    </li>
                    <li>
                        <a href="https://papers.waikato.ac.nz/2017/COMP/COMP336" target="_blank" rel="noreferrer noopener">COMP336 – Graphics and Computer Games</a>
                    </li>
                    <li>
                        <a href="https://papers.waikato.ac.nz/papers/2017/COMP333" target="_blank" rel="noreferrer noopener">COMP333 – Web Applications Development</a>
                    </li>
                    <li>
                        COMP316 – Artificial Intelligence Techniques and Applications
                    </li>
                </ul>
                <h4>200 level</h4>
                <ul>
                    <li>
                        <a href="https://www.waikato.ac.nz/study/papers/compx252-interactive-computing" target="_blank" rel="noreferrer noopener">COMPX252 – Interactive Computing</a>
                    </li>
                    <li>
                        <a href="https://www.waikato.ac.nz/study/papers/dsign241-design-3-aspects-of-web-design" target="_blank" rel="noreferrer noopener">DSIGN241 - Design 3: Aspects of Web Design</a>
                    </li>
                    <li>
                        <a href="https://papers.waikato.ac.nz/2017/COMP/COMP235" target="_blank" rel="noreferrer noopener">COMP235 – Logic and Computation</a>
                    </li>
                    <li>
                        <a href="https://papers.waikato.ac.nz/2017/COMP/COMP233" target="_blank" rel="noreferrer noopener">COMP233 – Internet Applications</a>
                    </li>
                    <li>
                        <a href="https://papers.waikato.ac.nz/2017/COMP/COMP204" target="_blank" rel="noreferrer noopener">COMP204 – Object Orientated Program Design</a>
                    </li>
                    <li>
                        <a href="https://papers.waikato.ac.nz/papers/2017/COMP202" target="_blank" rel="noreferrer noopener">COMP202 – Computer Communications</a>
                    </li>
                    <li>
                        <a href="https://papers.waikato.ac.nz/2017/COMP/COMP200" target="_blank" rel="noreferrer noopener">COMP200 – Computer Systems</a>
                    </li>
                    <li>
                        <a href="https://papers.waikato.ac.nz/2017/COMP/COMP203" target="_blank" rel="noreferrer noopener">COMP203 – Programming with Data Structures</a>
                    </li>
                    <li>
                        <a href="https://papers.waikato.ac.nz/2017/COMP/COMP224" target="_blank" rel="noreferrer noopener">COMP224 – Visual Design for Interactive Media</a>
                    </li>
                </ul>
                <h4>100 level</h4>
                <ul>
                    <li>
                        <a href="https://papers.waikato.ac.nz/2017/COMP/COMP103" target="_blank" rel="noreferrer noopener">COMP103 – Introduction to Computer Science 1</a>
                    </li>
                    <li>
                        <a href="https://papers.waikato.ac.nz/2017/COMP/COMP104" target="_blank" rel="noreferrer noopener">COMP104 – Introduction to Computer Science 2</a>
                    </li>
                    <li>
                        <a href="https://papers.waikato.ac.nz/2017/COMP/COMP126" target="_blank" rel="noreferrer noopener">COMP126 – Computing Media</a>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}

export default Education;