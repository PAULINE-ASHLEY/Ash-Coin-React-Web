import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinTemp from './CoinTemp';

function Coin() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.coincap.io/v2/assets')
      .then((res) => {
        setCoins(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const currentPage = 1;
  const postsPerPage = 10;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = coins.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <div>
        <div className="grid grid-cols-7 p-6 text-lg font-bold  border-y-2 border-[#EEEEEE] boder-solid">
          <div className="flex flex-row gap-x-4">
            <p>Name</p>
          </div>
          <p>Price(USD)</p>
          <p>Circulating Supply</p>
          <p>Volume(24Hr)</p>
          <p>Market Cap</p>
          <p>change(24Hr)</p>
        </div>
        {currentPosts.map((coin) => {
          return (
            <div>
              <CoinTemp
                key={coin.id}
                rank={coin.rank}
                name={coin.name}
                symbol={coin.symbol}
                priceUsd={coin.priceUsd}
                supply={coin.supply}
                volumeUsd24Hr={coin.volumeUsd24Hr}
                marketCapUsd={coin.marketCapUsd}
                changePercent24Hr={coin.changePercent24Hr}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Coin;
