import React, { useRef, useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import SimulateList from "../Components/SimulateList";

const Simulate = () => {
  const [hint, setHint] = useState();
  const [simulateResult, setSimResult] = useState([]);
  const StockCodeRef = useRef();
  const InitialMoneyRef = useRef();
  const dateRef = useRef();

  const simulate = async () => {
    let initial_money = parseInt(InitialMoneyRef.current.value);
    let stock_code = StockCodeRef.current.value;
    let start_date = dateRef.current.value;
    let simResult = [];
    setHint("");

    InitialMoneyRef.current.value = "";
    StockCodeRef.current.value = "";
    dateRef.current.value = "";

    await axios
      .post("/simulate", {
        initial_money,
        stock_code,
        start_date,
      })
      .then((res) => {
        simResult = res.data.data;
      })
      .catch((err) => {
        setHint("模擬時系統發生錯誤");
      });
    setSimResult(simResult);
  };

  // todos
  return (
    <div className="flex justify-center">
      <section className=" flex justify-center mt-8">
        <Card className=" w-96">
          {hint && (
            <Typography color="gray" className="mx-4 mt-3">
              {hint}
            </Typography>
          )}
          <Typography variant="h4" color="blue-gray" className="mx-4 mt-3">
            開始模擬我們策略的成效
          </Typography>
          <Typography color="gray" className="mt-1 mx-4">
            Enter Details for your simulate account
          </Typography>
          <form>
            <section className=" mx-4 my-4 flex flex-col gap-3">
              <Input
                size="lg"
                label="Stock_code"
                type="text"
                inputRef={StockCodeRef}
              />
              <Input
                size="lg"
                label="Initial_money"
                type="number"
                inputRef={InitialMoneyRef}
              />
              <Input size="lg" label="Date" type="date" inputRef={dateRef} />
            </section>
            <Button className="my-6 mx-4" color="yellow" onClick={simulate}>
              Initial
            </Button>
          </form>
        </Card>
      </section>

      <section className=" flex justify-center mt-4">
        <SimulateList data={simulateResult} />
      </section>
    </div>
  );
};

export default Simulate;
