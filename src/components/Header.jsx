import React from 'react';
import Typed from 'react-typed';
import Icon from './Icons';
function Header(){

    
    return (
        <div className="header-wraper py-10">
            <div className="main-info">
                <h1 className="display-4">Shagun Lamba</h1>
                <Typed 
                classname="typed-text" 
                strings={["Web Developer", "Competitive Coder"]} 
                typeSpeed={40} 
                backSpeed={60} loop style={{color: "whitesmoke", fontSize: "1.2em"}} />
                <Icon />
                <a href="#about" className="btn-main-offer"><a href="#about" style={{textDecoration: "none", color: "black"}}>More About Me</a></a>
            </div>
        </div>
    )
}

export default Header;
