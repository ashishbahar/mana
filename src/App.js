import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Features from "./components/Features";
import Header from "./components/Header";
import OwnTheJoy from "./components/OwnTheJoy.jsx";
import SecondHomeSec from "./components/SecondHomeSec";
import OwnerPerspective from "./components/OwnerPerspectives";
import Email from "./components/Email";
import Featured from "./components/Featured";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <SecondHomeSec />
      <Features />
      <OwnTheJoy />
      <OwnerPerspective />
      <Email />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
