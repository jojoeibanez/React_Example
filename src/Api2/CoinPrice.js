// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './CoinPrice.css';
// import Coin from './Coin';
// import { Icon } from '@iconify/react';
// import { useHistory } from "react-router";

import Icon from "@ant-design/icons/lib/components/Icon";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Coin from "./Coin";

// function App() {
//   const [coins, setCoins] = useState([]);
//   const [search, setSearch] = useState('');
//   const history = useHistory();

//   useEffect(() => {
//     axios
//       .get(
//         'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
//       )
//       .then(res => {
//         setCoins(res.data);
//         console.log(res.data);
//       })
//       .catch(error => console.log(error));
//   }, []);

//   const handleChange = e => {
//     setSearch(e.target.value);
//   };

//   const filteredCoins = coins.filter(coin =>
//     coin.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className='coin-app'>
//       <div className='coin-search'>
//         <h1 className='coin-text'> <Icon icon="icon-park:bitcoin" /> Search a currency <Icon icon="icon-park:bitcoin" /> </h1>
//         <form>
//           <input
//             style={{width:"400px"}}
//             className='coin-input'
//             type='text'
//             onChange={handleChange}
//             placeholder='Search Cryptocurrency Prices . .'
//           />
//         </form>
//       </div>
//       {filteredCoins.map(coin => {
//         return (
//           <Coin
//             key={coin.id}
//             name={coin.name}
//             price={coin.current_price}
//             symbol={coin.symbol}
//             marketcap={coin.total_volume}
//             volume={coin.market_cap}
//             image={coin.image}
//             priceChange={coin.price_change_percentage_24h}
//           />
//         );
//       })}
//       <div className="btn-coinprice">
//         <button className="btn-coin-btn" onClick={() => history.push({ pathname: "/Home" })}>
//           Back to HomePage
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;



export default function CoinPrice() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  const getData = useCallback(async () => {
    try {
      const response = await axios.get(url)
      console.log(response.data)
      setCoins(response.data)
    } catch (error) {
      console.log(error)
    }
  }, [])
  useEffect(() => {
    console.log("call")
    getData()
  }, [])

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'> <Icon icon="icon-park:bitcoin" /> Search a currency <Icon icon="icon-park:bitcoin" /> </h1>
        <form>
          <input
            style={{ width: "400px" }}
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search Cryptocurrency Prices . .'
          />
        </form>
      </div>
      {filteredCoins.map(coin =>
        <Coin
          key={coin.id}
          name={coin.name}
          price={coin.current_price}
          symbol={coin.symbol}
          marketcap={coin.total_volume}
          volume={coin.market_cap}
          image={coin.image}
          priceChange={coin.price_change_percentage_24h}
        />
      )}
      <div className="btn-coinprice">
        <button className="btn-coin-btn" >
          Back to HomePage
        </button>
      </div>
    </div>
  );
}
