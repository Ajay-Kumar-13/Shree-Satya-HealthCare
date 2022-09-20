import React from "react";

function Services() {
    return (
        <React.Fragment>
            <div className="container-fluid" id="services">
                <div className="row header">
                    <div className="col-12">
                        <h3>Our <span className="keyword">Services</span></h3>
                    </div>
                </div>

                <div className="row service">
                    <div className="offset-md-1 col-md-5 buttonn" style={{ marginTop: "auto", marginBottom: "auto" }}>
                        <h1 className="keyword">Laproscopy</h1>
                        <p className="aboutService">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className="btn btn-primary button"><span>learn more</span></button>
                    </div>
                    <div className="offset-md-1 col-md-4">
                        <img src="Images/laproscopy.png" className="img-thumbnail serviceImg1" />
                    </div>
                </div>

                <div className="row service">
                    <div className="col-md-6 order-2 buttonn" style={{ marginTop: "auto", marginBottom: "auto" }}>
                        <h1 className="keyword">In Vitro Fertilization (IVF)</h1>
                        <p className="aboutService">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className="btn btn-primary button"><span>learn more</span></button>
                    </div>
                    <div className="offset-md-1 col-md-4">
                        <img src="Images/ivf.png" className="img-thumbnail serviceImg2" />
                    </div>
                </div>

                <div className="row service">
                    <div className="offset-md-1 col-md-5 buttonn" style={{ marginTop: "auto", marginBottom: "auto" }}>
                        <h1 className="keyword">Intrauterine Insemination (IUI)</h1>
                        <p className="aboutService">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className="btn btn-primary button"><span>learn more</span></button>
                    </div>
                    <div className="offset-md-1 col-md-4">
                        <img src="Images/iui.png" className="img-thumbnail serviceImg1" />
                    </div>
                </div>

            </div>

        </React.Fragment>
    );
}

export default Services;