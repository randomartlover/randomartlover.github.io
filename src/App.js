import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./header.js";
import Home from "./Home.js";
import Footer from "./Footer.js";


const App = () => (
  <div>
 <BrowserRouter>
        <div className="BodyMargin">
          <Header />
          <Routes />
        </div>
        <Footer />
      </BrowserRouter>
  </div>
);

export default App;
