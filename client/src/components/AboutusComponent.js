import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';

function About() {

    return (
        <div className='aboutUs'>
            <div className="container">
                <div className="row">
                    <div className="offset-md-1 col-11">
                        <h3 style={{color: "#25318D"}}>About <span className='keyword'>Us</span></h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content ustify-content-center">
                    <div className="col-12 offset-md-1 col-md-6">
                        <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                        <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                    </div>
                    <div className="col-12 col-md-5 d-flex justify-content-center">
                        <img src='Images/aboutus.jpeg' />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default About;