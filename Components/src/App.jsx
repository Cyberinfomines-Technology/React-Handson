import React from "react";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import Main from './Components/Main'
import './App.css'
const App = () => {
  return (
    <div>
      <div className="app-container">
        <Navbar />
        <div className="main-layout"> 
          <Sidebar />
          <Main />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
