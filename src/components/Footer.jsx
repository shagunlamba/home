import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
function Footer (){
	return <footer>
        <h1 className="display-4 text-center">Get In Touch</h1>
        <p style={{fontSize: '20px'}}>
        I'm currently looking for part-time Software Development opportunities! 
        If you know of any positions available, if you have any questions, 
        or if you just want to say hi, 
        please feel free to email me at, <a href = "mailto: lamba.shagun0@gmail.com">lamba.shagun0@gmail.com </a> 
        </p>
        <p> &lt;&#47;&gt; with &hearts; by <span id="name">Shagun Lamba</span> using &nbsp;
        <FontAwesomeIcon icon={faReact} />
        </p>
    </footer>
}

export default Footer;