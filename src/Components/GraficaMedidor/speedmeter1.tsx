import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer";

interface Valor {
  setHorometro: number;
}

const SpeedMeter1 = ({ setHorometro }: Valor) => {
  return <ReactSpeedometer value={setHorometro}  startColor="#59CE8F"
  segments={5}
  endColor="#FF1E00" maxValue={5000} />;
};

export default SpeedMeter1;