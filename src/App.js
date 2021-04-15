import "./App.scss";
import CoversAllAngles from "./components/CoversAllAngles/CoversAllAngles";
import ErrorPage from "./components/ErrorPage";
import FeatureList from "./components/FeatureList/FeatureList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Intro from "./components/Intro";
import UltraQuiet from "./components/UltraQuiet/UltraQuiet";
import chemicalIcon from "./static/images/chemicals.png";
import bg1 from "./static/images/bg-1.jpg";
import bg2 from "./static/images/bg-2.jpg";

const features1 = [
  {
    icon: chemicalIcon,
    title: "Chemical and odour control",
    invert: true,
  },
  {
    icon: chemicalIcon,
    title: "Microbial and pathogens inactivation",
    invert: true,
  },
  {
    icon: chemicalIcon,
    title: "Allergens and other environmental trigger control",
    invert: true,
  },
];

const features2 = [
  {
    icon: chemicalIcon,
    title: "Best aftersales service",
    invert: true,
  },
  {
    icon: chemicalIcon,
    title: "Satisfaction guaranteed",
    invert: true,
  },
  {
    icon: chemicalIcon,
    title: "great investment on your health",
    invert: true,
  },
];

function App() {
  return (
    <div className="App">
      <div className="top-bg">
        <Header />
        <Home />
      </div>
      <div className="bg-img-div">
        <img src={bg1} alt="bg-img" />
      </div>
      <Intro />
      <FeatureList data={features1} />
      <CoversAllAngles />
      <FeatureList data={features2} />
      <div className="bg-img-div">
        <img src={bg2} alt="bg-img" />
      </div>
      <UltraQuiet />
      <Footer />
      {/* <ErrorPage /> */}
    </div>
  );
}

export default App;
