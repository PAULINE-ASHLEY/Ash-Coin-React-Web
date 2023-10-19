import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinTemp from './CoinTemp';
import { Link } from 'react-router-dom';

function Crypto() {
  // const [data] = useFetch('https://api.coincap.io/v2/assets');
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.coincap.io/v2/assets')
      .then((res) => {
        setCoins(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 100;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = coins.slice(indexOfFirstPost, indexOfLastPost);
  const npage = Math.ceil(coins.length / postsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <>
      <div>
        <div className="grid grid-cols-6 p-6 text-lg font-semibold  border-y-2 border-[#EEEEEE] boder-solid text-gray-600">
          <div className="flex flex-row gap-x-4">
            <p>Name</p>
          </div>
          <p>Price(USD)</p>
          <p>Circulating Supply</p>
          <p>Volume(24Hr)</p>
          <p>Market Cap</p>
          <p>Change(24Hr)</p>
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
      {/* pagination section */}
      <div className="text-xl mt-10">
        <div className="flex font-medium">
          {numbers.map((n, i) => (
            <Link
              key={i}
              onClick={() => changeCPage(n)}
              to="#"
              className={`page-item ${
                currentPage === n ? 'active' : ''
              }border-solid border-[#000] border-2 px-6 py-2 mx-2`}
            >
              {n}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
  function changeCPage(id) {
    setCurrentPage(id);
  }
}

export default Crypto;
