import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
// import Services from './components/services/Services'
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import {useEffect} from 'react'
import axios from 'axios'

function App() {
  const getAnalytics = async () => {
    await axios.get('https://geolocation-db.com/json/').then((res) =>{
      console.log(res.data);

      let embeds = [
        {
          title: "New Visit",
          color: 5174599,
          footer: {
            text: `deoxy.dev`,
          },
          fields: [
            {
              name: "Country",
              value: `${res.data.country_name}(${res.data.country_code})`
            },
            {
              name: "IP",
              value: `${res.data.IPv4}`
            },
            {
              name: "Latitude",
              value: `${res.data.latitude}`
            },
            {
              name: "Longitude",
              value: `${res.data.longitude}`
            },
          ],
        },
      ];

      let data = JSON.stringify({ embeds });

      var config = {
        method: "POST",
        url: 'https://discord.com/api/webhooks/1029643205819502644/cr3mLquxz06NgaOD6MqgNim_YCIzepvB-slFVaSwVb-_MZilZRS6a4grmam5e11uEl09',
        headers: { "Content-Type": "application/json" },
        data: data,
      };

      axios(config).then((response) => {
        return response;
      }).catch((error) => {
        console.log(error);
        return error;
      });


    })
  }

  useEffect( () => {
    getAnalytics()

  }, [])
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
