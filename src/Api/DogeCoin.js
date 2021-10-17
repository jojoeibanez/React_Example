import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./DogeCoin.css";
import PriceCard from "./PriceCard";
import { Button } from "antd"
import { useHistory } from "react-router-dom";

let logo =
  "https://tradingplatforms.com/pt/wp-content/uploads/sites/27/2021/04/dogecoin-logo3.svg";

export default function App() {

  const history = useHistory();

  const [ticker, setTicker] = useState({
    low: 0,
    high: 0,
    current: 0
  });
  const getDogecoinPrice = useCallback(async () => {
    console.log("doc555")
    const { data } = await axios.get(
      "https://nitinr-cors.herokuapp.com/https://api.wazirx.com/api/v2/tickers/dogeusdt"
    );
    setTicker(data.ticker);
  }, [])

  useEffect(() => {
    getDogecoinPrice()
    const interval = setInterval(() => getDogecoinPrice(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <div className="App-doge">
      <img src={logo} width="150" height="150" alt="dogecoin" />
      <h1 className="title">Dogecoin Price</h1>
      <h5 className="subtitle">This is current price</h5>
      <div className="prices-container">
        <PriceCard type="low" price={ticker.low} />
        <PriceCard type="high" price={ticker.high} />
        <PriceCard type="current" price={ticker.last} />
      </div>
      <div>
        <button
          className="btn-doge-one"
          onClick={() => history.push({ pathname: "/home" })}
        >
          Back To Homepage
        </button>
      </div>
    </div>
  );
}
