import "./style/reset.scss";
import "./style/fonts.scss";
import "./style/index.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPageSection1 from "./components/MainPageSection1/MainPageSection1";
import SectionRepairPrices from "./components/SectionRepairPrices/SectionRepairPrices";
import HowWeWork from "./components/HowWeWork/HowWeWork";
import YoutubeChannel from "./components/YoutubeChannel/YoutubeChannel";
import OurWorks from "./components/OurWorks/OurWorks";
import AboutUs from "./components/AboutUs/AboutUs";
import ModalMeasuare from "./components/ModalMeasuare/ModalMeasuare";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [activeMeasuare, setActiveMeasure] = useState(false);

  useEffect(() => {
    const imgArray = Array.from(document.querySelectorAll("img"));
    imgArray.forEach(element => {
      element.setAttribute("src", `https://vladislavkiselov.github.io/Concrete-Jungle${element.getAttribute("src")}`);
      // element.getAttribute('src')
    });
  },[])

  function setModalMeasure(value) {
    setActiveMeasure(value);
  }

  return <div className="App wrapper">
      <Header activeMeasuare={activeMeasuare} setModalMeasure={value => setModalMeasure(value)} />
      <div className="Main">
        <MainPageSection1 />
        <SectionRepairPrices />
        <HowWeWork />
        <OurWorks />
        <AboutUs />
        <YoutubeChannel />
        {activeMeasuare && <ModalMeasuare setModalMeasure={value => setModalMeasure(value)} />}
      </div>
      <Footer />
    </div>;
}

export default App;
