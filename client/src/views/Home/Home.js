import React from "react";
import Navbar from "../../components/Navabar/Navbar";
import HeroSecction from "../../components/Herosection/HeroSecction";
import Footer from "../../components/Footer/Footer";
import Section from "../../components/Section/Section";
import HeroSec from "../../components/HeroSec/HeroSec";
import "../Home/Home.css";

function Home() {
  return (
    <div>
      <div className="bg-b">
        <div>
          <Navbar />
        </div>

        <div className="">
          <HeroSecction />
        </div>

        <div>
          <div className="m-1">
            <p className="text-capitalize  fw-bolder  text-white fs-24 mx-2 ">
              Action
            </p>
            <Section genre="Action" />
          </div>
        </div>

        <div>
          <HeroSec />
        </div>

        <div>
          <h1 className="text-capitalize mt-3 fw-bolder  m-lg-1 ">Drama</h1>
          <Section genre="Drama" />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
