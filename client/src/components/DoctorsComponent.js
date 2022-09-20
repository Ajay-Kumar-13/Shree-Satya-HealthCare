import React from "react";

function Doctors() {
    return (
        <React.Fragment>
            <div className="container" id="Doctors">
                <div className="row header">
                    <div className="col-12">
                        <h3>Meet Our <span className="keyword">Specialist</span></h3>
                    </div>
                </div>
                <div className="row doctors">
                    <div className="col-12 col-lg-4 zoomIn d-flex justify-content-center">
                        <div className="card doctor scale" style={{ width: "20rem" }}>
                            <img src="Images/doc_01.png" className="card-img-top img-thumbnail" />
                            <div className="card-body">
                                <h5 className="card-title">Dr C.Sobha MD., DGO</h5>
                                <p className="card-text">Ferrtility Specialist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 zoomIn d-flex justify-content-center">
                        <div className="card doctor scale" style={{ width: "20rem" }}>
                            <img src="Images/doc_02.png" className="card-img-top img-thumbnail" />
                            <div className="card-body">
                                <h5 className="card-title">Dr P.V Syam Prasad MD.</h5>
                                <p className="card-text">Orthopedics</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 zoomIn d-flex justify-content-center">
                        <div className="card doctor scale" style={{ width: "20rem" }}>
                            <img src="Images/doc_03.png" className="card-img-top img-thumbnail" />
                            <div className="card-body">
                                <h5 className="card-title">Dr P.V Sanjay MD.</h5>
                                <p className="card-text">Cardiologist</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row buttonn">
                    <div className="col-12 d-flex justify-content-center">
                        <button className="btn btn-primary button bounceInUp"><span>learn more</span></button>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Doctors;