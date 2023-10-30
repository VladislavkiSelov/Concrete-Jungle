import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import MainPageSection1 from './components/MainPageSection1/MainPageSection1'
import "./style/index.scss";

function App() {
  return <div className="App wrapper">
      <Header />
      <div className="Main">
        <MainPageSection1 />
      </div>
      <Footer />
    </div>;
}

export default App;
