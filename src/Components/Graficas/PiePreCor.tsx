import React, { useEffect, useState } from "react";
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

/* const labels = ["January"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgb(59, 131, 189)",
    },
  ],
}; */
interface valoresID {
  id?: any;
}

interface ReportePrECor {
  idEquipo: number;
  preventivos: number;
  sumaPreventivos: string;
  correctivos: number;
  sumaCorrectivos: string;
  intervenciones: number;
}

export function PiePreCor({ id }: valoresID) {
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
    useState<ChartData<"bar", number[], unknown>>();

  function convertirHoraANumero(hora: string): number {
    // Dividir la hora en horas y minutos
    const [horasStr, minutosStr] = hora.split(":");
    const horas = parseInt(horasStr);
    const minutos = parseInt(minutosStr);

    // Agregar los minutos como fracción de hora
    const horaDecimal = horas + minutos / 60;

    return horaDecimal;
  }

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchData = async () => {
      const result = await axios(
        `https://selin-modulo1.herokuapp.com/reportetr/listar/calculosgraficas?idEquipo=${id}`
      );
      const data = result.data;
     /*  console.log("SumPre : " + result.data.sumaPreventivos);
      console.log(
        "convertido : " + convertirHoraANumero(result.data.sumaPreventivos)
      );
      console.log("SumCorr : " + result.data.sumaCorrectivos);
      console.log(
        "convertido : " + convertirHoraANumero(result.data.sumaCorrectivos)
      ); */
      setChartData({
        labels: [""],
        datasets: [
          {
            label: "Sum Preventivos",
            data: [convertirHoraANumero(result.data.sumaPreventivos)],
            backgroundColor: "rgb(255, 23, 0)",
          },
          {
            label: "Sum Correctivos",
            data: [convertirHoraANumero(result.data.sumaCorrectivos)],
            backgroundColor: "rgb(6, 255, 0)",
          },
        ],
      });
    };

    fetchData();
  }, [id]);

  return <div>{!!chartData && <Bar width={600} height={300} options={options} data={chartData} />}</div>;
}
