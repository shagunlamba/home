import React from 'react';
// importing fontAwesome
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Icons(){
    return (
        <div className="icon">
             <a href="https://github.com/shagunlamba" target="blank">
                <FontAwesomeIcon className="social-icons" icon = {faGithub} style={{
                        color: "white",
                }}/>
             </a>
             <a href="https://github.com/shagunlamba" target="blank">
            <FontAwesomeIcon className="social-icons" icon = {faFacebook} style={{
                    color: "white",
            }}/>
            </a>
            <a href="https://www.instagram.com/its_shagunnnn/" target="blank">
            <FontAwesomeIcon className="social-icons" icon = {faInstagram} style={{
                    color: "white", onMouseOver: ""
            }}/>
            </a>
            <a href="https://www.linkedin.com/in/shagun-lamba-24342114b" target="blank">
            <FontAwesomeIcon className="social-icons" icon = {faLinkedin} style={{
                    color: "white",
            }}/>
            </a>
        </div>
    )
}

export default Icons
