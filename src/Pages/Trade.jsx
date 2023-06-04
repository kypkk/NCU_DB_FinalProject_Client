import React from "react";
import { Button } from "@material-tailwind/react";
import TradingViewWidget from "../Components/TradingViewWidget";
import TradeForm from "../Components/TradeForm";
import "../Styles/Trade.css";

import "../Styles/Trade.css";

const Trade = () => {
  return (
    <div className="flex TradeingViewWidget mt-8 justify-center">
      <TradingViewWidget />
      <div className=" mx-6 TradingBtn">
        <TradeForm />
        {/* <Button color="red" className="mx-4">
          Sell
        </Button>
        <Button color="green" className="mx-4">
          Buy
        </Button> */}
      </div>
    </div>
  );
};

export default Trade;
