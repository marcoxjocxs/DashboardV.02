import React, { useRef, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ChartData,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import "../../utils/Styles/Graficas/graficaHvacCabina.scss"
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
interface valoresID {
  id?: any;
}
export function BarPreCor({ id }: valoresID) {
  interface InfoEquipo {
    value: string;
    idEquipo: number;
    idReporteTRActividad: number;
    idReporteTR: number;
    horometro: number;
    fechaInformeTR: string;
    duracion: String;
    idTipoMantenimiento: number;
    idActividad: number;
    idNivelActividad: number;
  }

  const [optionsReporte, setOptions] = useState<InfoEquipo[]>([]);
  const [chartData, setChartData] =
    useState<ChartData<"bar", number[], unknown>>();
  useEffect(() => {
    if(!id){
      return;
    }
    axios
      .get<InfoEquipo[]>(
        `https://selin-modulo1.herokuapp.com/reportetr/listar/graficas?idEquipo=${id}`
      )
      
      .then((response) => {
        const data = response.data.map((item) => {
          return {
            

            label: item.fechaInformeTR,
            value: item.idActividad,
          };
          
          
        });
        setChartData({
          labels: data.map((item) => item.label),
          datasets: [
            {
              label: "HVAC",
              data: data.map((item) => item.value),
              backgroundColor: "rgb(255, 99, 132)",
            },
            {
              label: "Cabina",
              data: data.map((item) => item.value),
              backgroundColor: "rgb(59, 131, 189)",
            },
          ],
        });

      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const chartRef = useRef<ChartJS>(null);

  useEffect(() => {
    const chart = chartRef.current;
  }, []);

  return <div>{!!chartData && <Bar className="BarHvacCabina"  options={options}  data={chartData} />}</div>;
}
