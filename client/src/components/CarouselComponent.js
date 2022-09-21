import React from 'react';
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap"

function Carousel() {
    return (
        <React.Fragment>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="Images/1.png" class="img-fluid d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="Images/2.png" class="img-fluid d-block w-100" alt="..." />
                    </div>
                </div>
                <div className='cards'>
                    <Card style={{ width: "25rem" }} className="card1">
                        <CardBody className='cardBody'>
                            <CardTitle>
                                IVF Center
                            </CardTitle>

                            <Button className='ccb1'>
                                Read More
                            </Button>
                        </CardBody>
                    </Card>
                    <Card style={{ width: "25rem" }} className="card2">
                        <CardBody className='cardBody'>
                            <CardTitle>
                                Health Center
                            </CardTitle>

                            <Button className='ccb2'>
                                Read More
                            </Button>
                        </CardBody>
                    </Card>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

            </div>

        </React.Fragment>
    );
}

export default Carousel;