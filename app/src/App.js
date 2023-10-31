import "./style/reset.scss";
import "./style/fonts.scss";
import "./style/index.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPageSection1 from "./components/MainPageSection1/MainPageSection1";

function App() {
  return (
    <div className="App wrapper">
      <Header />
      <div className="Main">
        <MainPageSection1 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
