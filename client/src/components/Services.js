import React from "react";

function Services() {
    return (
        <React.Fragment>
            <div className="container-fluid" id="services">

                <div className="row services">
                    <div className="offset-md-1 col-md-5">
                        <h5 className="keyword">Our Services</h5>
                        <h1>The <span className="keyword">Best Quality</span><br />Service For Your Family</h1>
                    </div>
                    <div className="col-md-5 serviceText">
                        <h5 className="text">Our best team doctor with complete and modern facilities will keep you healthy or return you to health from sick.</h5>
                    </div>
                    <div className="row service">

                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title keyword">In Vitro Fertilization (IVF)</h3>
                                <h5 className="card-text">The most advanced doctor and facility heart care in the region happens at Shree satya Health Care Center.</h5>
                                <div className="card-button">
                                    <button className="arrow">Learn More</button>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title keyword">Laproscopy</h3>
                                <h5 className="card-text">Our Certified doctors provide best medical care to help keep you healthy.</h5>
                                <div className="card-button">
                                    <button className="arrow">Learn More</button>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title keyword">Intrauterine Insemination (IUI)</h3>
                                <h5 className="card-text">Our Experts team specializes in treatments to help you get back to your normal activities.</h5>
                                <div className="card-button">
                                    <button className="arrow">Learn More</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}

export default Services;