import React from 'react';

// version-2

// import './App.css';
// import Doctors from './components/Doctors';
// import Services from './components/Services';
// import Faq from './components/Faq';

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from './components/NavbarComponent';
import Carousel from './components/CarouselComponent';

// version-1

import './Appv_1.css'
import Doctors from './components/DoctorsComponent';
import Services from './components/ServicesComponent';
import Faq from './components/FaqComponent';

import Testimonial from './components/TestimonialComponent';
import Footer from './components/FooterComponent';
import About from './components/AboutusComponent';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Carousel />
      <About />
      <Doctors />
      <Services />
      <Testimonial />
      <Faq />
      <Footer />
    </React.Fragment>
  );
}

export default App;
