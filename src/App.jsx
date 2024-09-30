import React from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import MainSection from "./Components/MainSection/MainSection";

function App() {
  return (
    <>
      <Header />
      <MainSection text1="покупают" text2="авиабилеты" />
    </>
  );
}

export default App;
