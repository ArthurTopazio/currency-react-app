import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

import './App.css';

const App = () => {

  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios.get("https://v6.exchangerate-api.com/v6/f63bbf96b4bb455955e68f52/latest/USD")
      .then(res => {
        setRates(res.data.conversion_rates)
      })
  }, []);

  return (
    <div className="App">
      <Header rates={rates} />
      <Content rates={rates} />
    </div>
  );
}

export default App;
