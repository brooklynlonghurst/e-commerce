import React, { useState } from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import MyDogsScreen from "./screens/MyDogsScreen";

function App() {
  const [homePage, setHomePage] = useState(false)

  function changePage(value) {
    if(homePage === value) return 
    setHomePage(value)
  }

  return (
    <div className="App">
      <Header/>
      <div className="row-container">
      <button className="homeButton" onClick={() => changePage(true)}>Home</button>
      <button className="myDogsButton" onClick={() => changePage(false)}>My Dogs</button>
      </div>
      {homePage ? <HomeScreen /> : <MyDogsScreen />}
      <Footer/>
    </div>
  );
}

export default App;
