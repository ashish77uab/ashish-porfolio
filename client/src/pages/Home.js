import React from "react";
import HomeHeader from "../components/portfolio/HomeHeader";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
import Resume from "../components/portfolio/Resume";
import ThemeToggle from "../components/portfolio/ThemeToggle";
import FullStackProject from "../components/portfolio/FullStackProject";
const Home = () => {
  return (
    <section className="  relative overflow-x-hidden  ">
      <ThemeToggle />
      <HomeHeader />
      <div className="container">
        <About />
        <Skills />
        <Resume />
        <FullStackProject />
      </div>

    </section>
  );
};

export default Home;
