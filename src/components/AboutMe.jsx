import React from 'react'

function AboutMe(){
    return (
        <div className="about" id="about">
            <h1>About Me</h1>
            <p>
            My name is Shagun Lamba. I am a third year Computer Engineering student from Thadomal Shahani Engineering College. 
            I am passionate about giving back to the community and wish to do so by building impactful software solutions. 
            Currently lot of technologies are alien to me but I am enthusiastic about paving my way through and becoming a 
            sound developer.
            </p>
            <button className="btn"><a href="./Shagun_Resume .pdf" target="blank" style={{
            color: "black", 
            textDecoration: "none"
            }}>Resume</a></button>
        </div>
    )
}

export default AboutMe;
