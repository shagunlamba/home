import React from 'react';
// importing fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faReact, faHtml5, faCss3, faBootstrap, faJs, faGit, faNode, faPython, faGitSquare } from "@fortawesome/free-brands-svg-icons";
function Skills (){
    return (
        // 93329e
        // ffe3fe
        <div className="skills" id="skills">
            <h1 style={{textAlign: "center"}}>Skills</h1>
            <div className="container">
            <div className="row">
            <div className="col">
                <p>HTML/CSS</p>
                <FontAwesomeIcon icon={faHtml5} style={{color: "#DC4A25"}} size="3x"/>
                <FontAwesomeIcon icon={faCss3} style={{color: "#2662E9"}} size="3x"/>
            </div>
            <div className="col">
                <p>Bootstrap</p>
                <FontAwesomeIcon icon={faBootstrap} style={{color: "#523B77"}} size="3x"/>
            </div>
            <div className="col">
                <p>javaScript</p>
                <FontAwesomeIcon icon={faJs} style={{color: "#F7DF1C", backgroundColor: "black"}} size="3x"/>
            </div>
            <div className="col">
                    <p>NodeJs, Express</p>
                    <FontAwesomeIcon icon={faNode} style={{color: "#639B59", backgroundColor: "333333", padding: "3px"}} size="3x"/>
            </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>MySQL</p>
                    <FontAwesomeIcon icon={faDatabase} style={{color: "black"}} size="3x"/>
                </div>
                <div className="col">
                    <p>MongoDB</p>
                    <FontAwesomeIcon icon={faDatabase} style={{color: "black"}} size="3x"/>
                </div>
                <div className="col">
                <p>Git</p>
                <FontAwesomeIcon icon={faGitSquare} style={{color: "#E84D32"}} size="3x"/>
                </div>
                <div className="col">
                <p>Python</p>
                <FontAwesomeIcon icon={faPython} style={{color: "#42789C"}} size="3x"/>
                </div>
            </div>
                
            </div>

        </div>
    )
}

export default Skills;
