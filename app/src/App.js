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

function App() {
  return <div className="App wrapper">
      <Header />
      <div className="Main">
        <MainPageSection1 />
        <SectionRepairPrices />
        <HowWeWork />
        <YoutubeChannel />
        <OurWorks />
      </div>
      <Footer />
    </div>;
}

export default App;
