import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Container from "@mui/material/Container";
import logo from "../../utils/img/logo.png";
import "../../utils/Styles/Header/header.scss";
const Header = () => {
  return (
    <>
      <Box className="HeaderBoxContainer">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box className="boxlogo">
              <a href="/">
                <img src={logo} className="img_logo" />
              </a>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box className="TittlesHeader">
              <Box textAlign="center" border={"1px solid black "}>
                <Typography variant="h4" color={"white"}>
                  HISTORIAL DE EQUIPOS INTERVENIDOS
                </Typography>
              </Box>
              <Box>
                <Box textAlign="center" border={"1px solid black "}>
                  <Typography variant="h5" color={"white"}>
                    Mantenimiento e Inspeccion HVAC Y HERMETISMO
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Header;
