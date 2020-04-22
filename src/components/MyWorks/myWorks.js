import React from 'react';
import burger from '../../images/burgerApp.png'
import calendar from '../../images/calendar-app.png'
import trouvaille from '../../images/Trouvaille-screenshot.png'
import workout from '../../images/Workout-App (2).png'
import weather from '../../images/Weather-App (2).png'
import noteTaker from '../../images/noteTaker.png'

function myWorks(){
    return(
        <div>
            <div id="portfolio" className="portfolio-area section-padding"/>
            <div className="container">
                <div className="row">
                    <div className="section-header">
                        <h2>My Works</h2>
                        <p className="line1"></p>
                        <p className="line2"></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-6 col-lg-4">
                        <div className="gallery-items wow fadeInLeft" data-wow-delay="0.2s">
                            <a className="view img" href="images/portfolio/Trouvaille-screenshot.png"> 
                                <img src={trouvaille} alt="portfolio image"/> 
                            </a>
                            

                            <div className="gallery-text">
                                <a href = "https://lucas-bit.github.io/Trouvaille/?" target ="_blank"><h2><span>Destination Generator</span></h2></a>
                                <a href = "https://github.com/Lucas-bit/Trouvaille" target = "_blank">Git Hub Repo</a>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-6 col-lg-4">
                        <div className="gallery-items wow fadeInLeft" data-wow-delay="0.2s">
                            <a className="view img" href="images/portfolio/2020-04-05 (1).png"> 
                                <img src={noteTaker} alt="portfolio image"/> 
                            </a>
                            

                            <div className="gallery-text">
                                <a href = "https://note-taker-lgonzalo.herokuapp.com/" target ="_blank"><h2><span>Note Taker App</span></h2></a>
                                <a href = "https://github.com/Lucas-bit/noteTaker" target = "_blank">Git Hub Repo</a>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-6 col-lg-4">
                        <div className="gallery-items wow fadeInDown" data-wow-delay="0.4s">
                            <a className="view img" href="images/portfolio/Weather-App (2).png"> 
                                <img src={weather} alt="portfolio image"/> 
                            </a>

                            <div className="gallery-text">
                                <a href ="https://lucas-bit.github.io/Weather-app/" target = "_blank"><h2><span>Weather API App</span></h2></a>
                                <a href = "https://github.com/Lucas-bit/Weather-app" target = "_blank">Git Hub Repo</a>

                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-6 col-lg-4">
                        <div className="gallery-items wow fadeInRight" data-wow-delay="0.6s">
                            <a className="view img" href="images/portfolio/calendar-app.png"> 
                                <img src={calendar} alt="portfolio image"/> 
                            </a>

                            <div className="gallery-text">
                                <a href = "https://lucas-bit.github.io/Calender/" target="_blank"><h2><span>Daily Planner App</span>Design</h2></a>
                                <a href = "https://github.com/Lucas-bit/Calender" target = "_blank">Git Hub Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-6 col-lg-4">
                        <div className="gallery-items wow fadeInRight" data-wow-delay="0.6s">
                            <a className="view img" href="images/portfolio/burgerApp.png"> 
                                <img src={burger} alt="portfolio image"/> 
                            </a>

                            <div className="gallery-text">
                                <a href = "https://lit-temple-76011.herokuapp.com/burgers" target="_blank"><h2><span>Burger App</span></h2></a>
                                <a href = "https://github.com/Lucas-bit/burger" target = "_blank">Git Hub Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-6 col-lg-4">
                        <div className="gallery-items wow fadeInRight" data-wow-delay="0.6s">
                            <a className="view img" href="images/portfolio/Workout-App (2).png"> 
                                <img src={workout} alt="portfolio image"/> 
                            </a>

                            <div className="gallery-text">
                                <a href = "https://the-workout-tracker.herokuapp.com/" target="_blank"><h2><span>Fitness Tracker</span></h2></a>
                                <a href = "https://github.com/Lucas-bit/workoutTracker" target = "_blank">Git Hub Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default myWorks