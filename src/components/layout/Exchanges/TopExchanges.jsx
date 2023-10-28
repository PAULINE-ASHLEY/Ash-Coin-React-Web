import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExchangesTemp from './ExchangesTemp';

function Exchanges() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.coincap.io/v2/exchanges')
      .then((res) => {
        setCoins(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const currentPage = 1;
  const postsPerPage = 30;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = coins.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <div>
        <div className="grid grid-cols-5 p-6 text-sm font-semibold  border-y-2 border-[#EEEEEE] boder-solid text-gray-600">
          <div className="flex flex-row gap-x-4">
            <p>Name</p>
          </div>
          <p>Trading Pairs </p>
          <p>Volume(24Hr) </p>
          <p>Total(%)</p>
          <p>Exchange Id</p>
        </div>
        {currentPosts.map((coin) => {
          return (
            <div>
              <ExchangesTemp
                key={coin.id}
                rank={coin.rank}
                name={coin.name}
                percentTotalVolume={coin.percentTotalVolume}
                volumeUsd={coin.volumeUsd}
                tradingPairs={coin.tradingPairs}
                exchangeId={coin.exchangeId}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Exchanges;
