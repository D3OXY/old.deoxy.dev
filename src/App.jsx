import React, { Suspense, useEffect } from "react";

import getAnalytics from "./hooks/getAnalytics";
import Loading from "./components/Loader/Loading";

// import Header from "./components/header/Header";
const Header = React.lazy(() => import('./components/header/Header'));
// import Nav from "./components/nav/Nav";
const Nav = React.lazy(() => import('./components/nav/Nav'));
// import About from "./components/about/About";
const About = React.lazy(() => import('./components/about/About'));
// import Experience from "./components/experience/Experience";
const Experience = React.lazy(() => import('./components/experience/Experience'));
// import Portfolio from "./components/portfolio/Portfolio";
const Portfolio = React.lazy(() => import('./components/portfolio/Portfolio'));
// import Testimonials from "./components/testimonials/Testimonials";
const Testimonials = React.lazy(() => import('./components/testimonials/Testimonials'));
// import Contact from "./components/contact/Contact";
const Contact = React.lazy(() => import('./components/contact/Contact'));
// import Footer from "./components/footer/Footer";
const Footer = React.lazy(() => import('./components/footer/Footer'));


function App() {

  useEffect(() => {
      getAnalytics();
  }, [])

    return (
      <>
        <Suspense fallback={<Loading/>}>
        <Header />
        <Nav />
        <About />
        <Experience />
        {/* <Services /> */}
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
        </Suspense>
      </>
    );
}

export default App;
