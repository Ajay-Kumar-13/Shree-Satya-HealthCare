import React from "react";

function Doctors() {
    return (
        <React.Fragment>
            <div className="container-fluid" id="Doctors">
                <div className="row header">
                    <div className="col-12">
                        <h1>Meet Our <span className="keyword">Specialist</span></h1>
                    </div>
                </div>
                <div className="row service">

                    <div className="card doctor scale">
                        <img src="Images/doc_01.png" className="card-img-top img-thumbnail" />
                        <div className="card-body">
                            <h5 className="card-title">Dr C.Sobha MD., DGO</h5>
                            <p className="card-text">Ferrtility Specialist</p>
                        </div>
                    </div>


                    <div className="card doctor scale">
                        <img src="Images/doc_02.png" className="card-img-top img-thumbnail" />
                        <div className="card-body">
                            <h5 className="card-title">Dr P.V Syam Prasad MD.</h5>
                            <p className="card-text">Orthopedics</p>
                        </div>
                    </div>


                    <div className="card doctor scale">
                        <img src="Images/doc_03.png" className="card-img-top img-thumbnail" />
                        <div className="card-body">
                            <h5 className="card-title">Dr P.V Sanjay MD.</h5>
                            <p className="card-text">Cardiologist</p>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Doctors;