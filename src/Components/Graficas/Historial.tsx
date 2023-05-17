import { useRef, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ChartData,
  CategoryScale,
  LinearScale,
} from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "../../utils/Styles/Home/home.scss";
import axios from "axios";


interface valoresID {
  id?: any;
}
ChartJS.register(CategoryScale, LinearScale);

export function Historial({ id }: valoresID) {
  interface InfoEquipo {
    value: string;
    idEquipo: number;
    idReporteTR: number;
    fechaInformeTR: string;
    idReporteTRActividad: number;
    duracion: String;
    idTipoMantenimiento: number;
    idActividad: number;
    idNivelActividad: number;
  }

  const [chartData, setChartData] =
    useState<ChartData<"bar", number[], unknown>>();

  useEffect(() => {
    if(!id){
      return
    }
    axios
      .get<InfoEquipo[]>(
        `https://selin-modulo1.herokuapp.com/reportetr/listar/graficas?idEquipo=${id}`
      )
      .then((response) => {
        const data = response.data.map((item) => {
          return {
            label: item.fechaInformeTR,
            value:
              item.idTipoMantenimiento == 1 ? +item.duracion.split(`:`)[0] : 0,
            value2:
              item.idTipoMantenimiento == 2 ? +item.duracion.split(`:`)[0] : 0,
          };
        });
        setChartData({
          labels: data.map((item) => item.label),
          datasets: [
            {
              label: "Preventivo",
              data: data.map((item) => item.value),
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
            {
              label: "Correctivo",
              data: data.map((item) => item.value2),
              backgroundColor: "#0000FF",
              borderColor: "#0000FF",
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="ContainerChartHistorial" >
      {!!chartData && <Bar width={500} height={250} className="barHistorial" data={chartData} />}
    </div>
  );
}
