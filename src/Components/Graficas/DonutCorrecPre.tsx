import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ChartData,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

interface valoresID {
  id?: any;
}
export const data = {
  labels: ["Preventivos", "Correctivos"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

export function DonutHvacCabina({ id }: valoresID) {
  interface ReportePrECor {
    idEquipo: number;
    preventivos: number;
    sumaPreventivos: string;
    correctivos: number;
    sumaCorrectivos: string;
    intervenciones: number;
  }

  const [optionsReporte, setOptions] = useState<ReportePrECor[]>([]);
  const [chartData, setChartData] =
    useState<ChartData<"doughnut", number[], unknown> /*  */>();
  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchData = async () => {
      const result = await axios(
        `https://selin-modulo1.herokuapp.com/reportetr/listar/calculosgraficas?idEquipo=${id}`
      );
      const data = result.data;

      setChartData({
        labels: ["Preventivos", "Correctivos"],
        datasets: [
          {
            label: "# Cantidad",
            data: [data.preventivos, data.correctivos],
            backgroundColor: [
              "rgb(57, 181, 224)",
              "rgb(255, 184, 76)",
            ],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1,
          },
        ],
      });
    };

    fetchData();
  }, [id]);

  return (
    <div >
      {!!chartData && <Doughnut  data={chartData} />}
    </div>
  );
}
