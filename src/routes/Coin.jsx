import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Coins = () => {
  const [coin, setCoin] = useState({});
  const params = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>{coin.id}</h1>
    </div>
  );
};

export default Coins;
