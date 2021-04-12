import "./App.scss";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import Home from "./components/Home";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      <div className="top-bg">
        <Header />
        <Home />
      </div>
      <Intro />
      {/* <ErrorPage /> */}
    </div>
  );
}

export default App;
