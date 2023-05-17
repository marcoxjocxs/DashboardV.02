import { Box, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Header from "../../Components/Header/header";
import LayoutLeft from "../../Components/layoutLeft/layoutleft";
import InfoGrafica from "../../Components/InfoGrafica/infografica";
import { Historial } from "../../Components/Graficas/Historial";
import "../../utils/Styles/Home/home.scss";
import Card1 from "../../Components/Cards/AireAcondicionado/Cards1";
import Cards2 from "../../Components/Cards/Cabina/Cards2";
import Cards3 from "../../Components/Cards/Calefaccion/Cards3";
import { PiePreCor } from "../../Components/Graficas/PiePreCor";
import { BarPreCor } from "../../Components/Graficas/BarHVACabina";
import { DonutHvacCabina } from "../../Components/Graficas/DonutCorrecPre";
import CustomizedTables from "../../Components/Registro/regisro";
export default function Home() {
  const [id, setId] = useState();
  const [NoData, setNodata] = useState();
  return (
    <>
      <Header />
      <Box>
        <Box style={{ paddingTop: "100px", paddingBottom: "50px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Box>
                <LayoutLeft setId={setId} setNodata={setNodata} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="HistoritalBox">
                <Historial id={id} />
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box>
                <InfoGrafica id={id} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className="ContainerGraf">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Box className="Graficos">
              <PiePreCor id={id} />
            </Box>
          </Grid>
          <Grid item xs={12}  md={6} lg={4}>
            <Box className="Graficos">
              <BarPreCor id={id} />
            </Box>
          </Grid>
          <Grid item xs={12}  md={6} lg={4}>
            <Box className="Graficos">
              <DonutHvacCabina id={id} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      {NoData !== "Si" && (
        <Box>
          <Card1 id={id} />
          <Cards2 id={id} />
          <Cards3 id={id} />
        </Box>
      )}
      {NoData !== "Si" && (
        <Box className="Boxtable">
          <Grid container>
            <Grid item  md={2}></Grid>
            <Grid item xs={12} md={8}>
              <CustomizedTables id={id} />
            </Grid>
            <Grid item  md={2} ></Grid>
          </Grid>
        </Box>
      )}
      
    </>
  );
}
