import React from "react";

function Testimonial() {
    return (
        <React.Fragment>
            <div className="container" id="Testimonials">
                <div className="row header">
                    <div className="col-12">
                        <h3>Success <span className="keyword">Stories</span></h3>
                    </div>
                </div>

                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="card">
                                <div className="card-body">
                                    <blockquote class="blockquote text-center">
                                        <p class="mb-30"><i class="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <footer class="blockquote-footer">Klaus Michelson</footer>
                                        <p class="client-review-stars stars">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star-half-alt"></i>
                                            <i class="far fa-star"></i>
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="card">
                                <div className="card-body">
                                    <blockquote class="blockquote text-center">
                                        <p class="mb-20"><i class="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                        <footer class="blockquote-footer">Elijah Michelson</footer>
                                        <p class="client-review-stars stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}

export default Testimonial;