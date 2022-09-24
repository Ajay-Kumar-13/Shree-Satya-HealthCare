import React from "react";

function Footer() {
    return (
        <React.Fragment>
            <div id="Footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="offset-md-1 col-md-4">
                            <div className="row">
                                <img src="Images/1logo.png"></img>
                            </div>
                            <div className="row">
                                <div className="col-12 aboutFooter">
                                    <p>We will always give our customers the best in order to get the best.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 callNumber">
                                    <p>Call Center (+91 123456789)</p>
                                    <p>Chat Center (+91 123456789)</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <p>Follow us on Social Media:</p>
                                </div>
                                <div className="col-12 socialButtons">
                                    <i class="fa-brands fa-facebook-f socialButton"></i>
                                    <i class="fa-brands fa-twitter socialButton"></i>
                                    <i class="fa-brands fa-instagram socialButton"></i>
                                    <i class="fa-brands fa-youtube socialButton"></i>
                                </div>
                            </div>
                        </div>

                        <div className="offset-md-1 col-md-2 d-none d-sm-block d-sm-none d-md-block">
                            <div className="row">
                                <h3 className="footerHeader">About</h3>
                            </div>
                            <div className="row">
                                <div className="col-12 FooterService">
                                    <a href="#services">Services</a>
                                </div>
                                <div className="col-12 FooterService">
                                    <a href="#testimonials">Testimonials</a>
                                </div>
                                <div className="col-12 FooterService">
                                    <a href="#Doctors">Our Specialists</a>
                                </div>
                            </div>
                        </div>

                        <div className="offset-md-1 col-md-3 d-none d-sm-block d-sm-none d-md-block">
                            <div className="row">
                                <h3 className="footerHeader">Treatment</h3>
                            </div>
                            <div className="row">
                                <div className="col-12 FooterService">
                                    <a href="#services">Intrauterine Insemination</a>
                                </div>
                                <div className="col-12 FooterService">
                                    <a href="#testimonials">In Vitro Fertilization</a>
                                </div>
                                <div className="col-12 FooterService">
                                    <a href="#Doctors">Laproscopy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="copyright">
                        <p>CopyRight©2022</p>
                    </div>  
                </div>
            </div>

        </React.Fragment>
    );
}

export default Footer