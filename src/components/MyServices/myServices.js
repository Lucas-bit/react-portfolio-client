import React from 'react'

function myServices(){
    return(
        <div id="services" className="services-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header">
                        <h2>My Services</h2>
                        <p className="line1"></p>
                        <p className="line2"></p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="single-services text-center wow fadeInDown" data-wow-delay="0.2s">
                        <div className="services-icon">
                            <i className="fa fa-users"></i>
                        </div>
                        <div className="services-content">
                            <h3>UI/UX Design</h3> 
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="single-services text-center wow fadeInDown" data-wow-delay="0.4s">
                        <div className="services-icon">
                            <i className="fa fa-bar-chart"></i>
                        </div>
                        <div className="services-content">
                            <h3>Web Design</h3> 
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="single-services text-center wow fadeInDown" data-wow-delay="0.6s">
                        <div className="services-icon">
                            <i className="fa fa-desktop"></i>
                        </div>
                        <div className="services-content">
                            <h3>Web Development</h3> 
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="single-services text-center wow fadeInDown" data-wow-delay="0.8s">
                        <div className="services-icon">
                            <i className="fa fa-area-chart"></i>
                        </div>
                        <div className="services-content">
                            <h3>Graphics Design</h3> 
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="single-services text-center wow fadeInDown" data-wow-delay="1.2s">
                        <div className="services-icon">
                            <i className="fa fa-camera"></i>
                        </div>
                        <div className="services-content">
                            <h3>Photography</h3> 
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="single-services text-center wow fadeInDown" data-wow-delay="1.2s">
                        <div className="services-icon">
                            <i className="fa fa-pied-piper-alt"></i>
                        </div>
                        <div className="services-content">
                            <h3>Logo Design</h3> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default myServices