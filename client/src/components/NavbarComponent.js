import React from "react";

function Navbar() {

    return (
        <React.Fragment>

            <div className="topmenu" >
                <p style={{ margin: 0 }}>
                    <span>info@sreesathyaivf.com</span>
                    <span>info@sreesatyahealth.com</span>
                    {/* <span className="d-none d-sm-block phno">+91 1234567890</span> */}
                </p>
            </div>

            <div className="secondmenu">
                <div className="container-fluid">
                    <nav class="navbar navbar-expand-lg navbar-light offset-md-1 well">
                        <a class="navbar-brand logo" href="#"> <img src="Images/final.png" class="img-fluid" width="200" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto" id="secondmenu">
                                <li class="nav-item">
                                    <a class="nav-link " href="#">HOME</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link " href="#">ABOUT US</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link " href="#services">SERVICES</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link " href="#">TESTIMONIALS</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#" target="_blank">GALLERY</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link " href="#">CONTACT US</a>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar;