import React from "react";
import CoinItem from "./CoinItem";
import "./coins.css";
import { Link } from "react-router-dom";
import Coin from "../routes/Coin";
const Coins = (props) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coins</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Mkt Cap</p>
          <p className="hide-mobile">Volume</p>
        </div>
        {props.coins.map((coins) => {
          return (
            //redirect to page coin with name id
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
