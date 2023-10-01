import { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
