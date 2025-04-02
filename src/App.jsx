import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import "../src/commonResource/js/bootstrap.js";
import "../src/commonResource/js/custom.js";
import Header from "./components/Header/Header";
import Alert from "./components/Main-section/Alert";
import Section1 from "./components/Main-section/Section1";
import Section2 from "./components/Main-section/Section2";
import Section3 from "./components/Main-section/Section3";
import Section4 from "./components/Main-section/Section4";
import Section5 from "./components/Main-section/Section5";
import Section6 from "./components/Main-section/Section6";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Alert />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  );
}

export default App;
