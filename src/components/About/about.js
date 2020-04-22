import React from 'react'
import logo from '../../images/lucas-headshot.jpg'

function About(){
    return (
       <div>
            <div id="about" className="about-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-5 col-md-5">
                            <div className="about-left wow fadeInDown" data-wow-delay="0.4s">
                                <img src={logo} alt="profile pic"/>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-7 col-md-7">
                            <div className="about-right wow fadeInDown" data-wow-delay="0.8s">
                                <h1>I'm <span className="text-primary">Lucas Gonzalez</span> and I'm a Full stack Developer</h1> 
                                <p>I'm a 25-year-old American Full-Stack developer who has recently completed a certification in Full-Stack Web Design at Case Western Reserve University. I have vast knowledge in HTML5, CSS, Javascript, JQuery, Node.js, React.js, MySql, and so on. The work I provide is of highest quality, fully responsive, and tested in a wide range of devices. Leveraging my background in social work and social services for a client-focused approach in my work.</p>
                                <div className="socials">
                                    <ul>
                                        <li><a href="https://www.facebook.com/profile.php?id=1327698260" target = "_blank"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="https://github.com/Lucas-bit" target = "_blank"><i className="fa fa-github"></i></a></li>
                                        <li><a href="www.linkedin.com/in/lucas-gonzalez-437399194" target = "_blank"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="https://www.instagram.com/backpacklyfe/" target = "_blank"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default About
