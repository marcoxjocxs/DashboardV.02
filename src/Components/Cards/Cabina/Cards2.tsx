import { Box, Grid } from "@mui/material";
import "../../../utils/Styles/Cards/Cards.scss";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SpeedMeter1 from "../../GraficaMedidor/speedmeter1";
import { useState, useEffect } from "react";
import axios from "axios";
import { format, parse } from "date-fns";

interface Valores {
  id?: string;
}

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Cards2({ id }: Valores) {
  interface CambioRepuesto {
    cambioLineasCalefaccionDate: string;
    cambioLineasCalefaccionHorometro: string;
    cambioValvulasCalDate: string;
    cambioValvulasCalHorometro: string;
    cambioControlAsDate: string;
    cambioControlAsHorometro: string;
    cambioTermostatoDate: string;
    cambioTermostatoHorometro: string;
  }

  const [optionLineasCalefaccionDate, setOptionsLineasCalefaccionDate] =
    useState<string>();
  const [
    optionLineasCalefaccionHorometro,
    setOptionLineasCalefaccionHorometro,
  ] = useState<string>();
  const [optionValvulasCalDate, setOptionsValvulasCalDate] = useState<string>();
  const [optionValvulasCalHorometro, setOptionValvulasCalHorometro] =
    useState<string>();
  const [optionControlAsDate, setOptionsControlAsDate] = useState<string>();
  const [optionControlAsHorometro, setOptionControlAsHorometro] =
    useState<string>();
  const [optionTermostatoDate, setOptionsTermostatoDate] = useState<string>();
  const [optionTermostatoHorometro, setOptionTermostatoHorometro] =
    useState<string>();

  const [optionfechaResta1, setOptionsFechaResta1] = useState<number>();
  const [optionfechaResta2, setOptionsFechaResta2] = useState<number>();
  const [optionfechaResta3, setOptionsFechaResta3] = useState<number>();
  const [optionfechaResta4, setOptionsFechaResta4] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const result = await axios.get(
          `https://selin-modulo1.herokuapp.com/equipos/cambiorepuesto/listar/calculosrelojes?idEquipo=${id}`
        );
        const dateFormat = "yyyyMMdd";
        const currentDate = new Date();

        setOptionsLineasCalefaccionDate(
          result.data ? result.data.cambioLineasCalefaccionDate : "No data"
        );
        setOptionLineasCalefaccionHorometro(
          result.data ? result.data.cambioLineasCalefaccionHorometro : "No data"
        );
        setOptionsValvulasCalDate(
          result.data ? result.data.cambioValvulasCalDate : "No data"
        );
        setOptionValvulasCalHorometro(
          result.data ? result.data.cambioValvulasCalHorometro : "No data"
        );
        setOptionsControlAsDate(
          result.data ? result.data.cambioControlAsDate : "No data"
        );
        setOptionControlAsHorometro(
          result.data ? result.data.cambioControlAsHorometro : "No data"
        );

        setOptionTermostatoHorometro(
          result.data ? result.data.cambioTermostatoHorometro : "No data"
        );

        setOptionsTermostatoDate(
          result.data ? result.data.cambioTermostatoDate : "No data"
        );

        if (result.data) {
          if (result.data.cambioLineasCalefaccionDate) {
            const parsedDate = parse(
              result.data.cambioLineasCalefaccionDate,
              "yyyy-MM-dd",
              new Date()
            );
            const fechaseleccionado = format(parsedDate, "yyyyMMdd");

            const date1 = parse(fechaseleccionado, dateFormat, new Date());
            const differenceInDays = Math.floor(
              (currentDate.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24)
            );
            const resultadofechas1 = differenceInDays * 20;
            setOptionsFechaResta1(resultadofechas1);
          }

          //*************************************************************************************************************

          if (result.data.cambioValvulasCalDate) {
            const parsedDate2 = parse(
              result.data.cambioValvulasCalDate,
              "yyyy-MM-dd",
              new Date()
            );
            const fechaseleccionado2 = format(parsedDate2, "yyyyMMdd");
            const date2 = parse(fechaseleccionado2, dateFormat, new Date());

            const differenceInDays2 = Math.floor(
              (currentDate.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24)
            );
            const resultadofechas2 = differenceInDays2 * 20;
            setOptionsFechaResta2(resultadofechas2);
          }

          //*************************************************************************************************************

          if (result.data.cambioControlAsDate) {
            const parsedDate3 = parse(
              result.data.cambioControlAsDate,
              "yyyy-MM-dd",
              new Date()
            );
            const fechaseleccionado3 = format(parsedDate3, "yyyyMMdd");
            const date3 = parse(fechaseleccionado3, dateFormat, new Date());

            const differenceInDays3 = Math.floor(
              (currentDate.getTime() - date3.getTime()) / (1000 * 60 * 60 * 24)
            );
            const resultadofechas3 = differenceInDays3 * 20;
            setOptionsFechaResta3(resultadofechas3);
          }

          //*************************************************************************************************************
          
          if (result.data.cambioTermostatoDate) {
            const parsedDate4 = parse(
              result.data.cambioTermostatoDate,
              "yyyy-MM-dd",
              new Date()
            );
            const fechaseleccionado4 = format(parsedDate4, "yyyyMMdd");
            const date4 = parse(fechaseleccionado4, dateFormat, new Date());

            const differenceInDays4 = Math.floor(
              (currentDate.getTime() - date4.getTime()) / (1000 * 60 * 60 * 24)
            );
            const resultadofechas4 = differenceInDays4 * 20;
            setOptionsFechaResta4(resultadofechas4);
          }
        }
        else{
          return;
        }
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Box width="100%" paddingBottom="80px">
        <Box>
          {!!(
            optionLineasCalefaccionDate ||
            optionValvulasCalDate ||
            optionControlAsDate ||
            optionTermostatoDate
          ) && (
            <Box
              textAlign="center"
              paddingBottom="2%"
              color={"white"}
              paddingTop={"2%"}
            >
              <Typography variant="h4">Componentes de Calefaccion</Typography>
            </Box>
          )}
          <Container maxWidth="xl">
            <Grid container className="GridContainer " spacing={3}>
              {!!optionLineasCalefaccionDate && (
                <Grid item xs={12} md={5} lg={4} className="cardUnidad">
                  <Box className="Cards">
                    <Box className="TittleCardFirst">
                      <Box
                        paddingRight={"50px"}
                        className="ContainerLineasdeCalefaccion"
                      >
                        <Grid container>
                          <Grid item xs={5}>
                            <Typography variant="h5" component="div">
                              Lineas de Calefaccion
                            </Typography>
                          </Grid>
                          <Grid item xs={7}>
                            <Box>
                              <TextField
                                id="outlined-basic"
                                label=""
                                value={optionfechaResta1 || ""}
                                variant="outlined"
                                size="small"
                              />
                            </Box>
                            <Grid container spacing={4}>
                              <Grid item xs={6}>
                                <Box>{optionLineasCalefaccionDate || ""}</Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box>
                                  {optionLineasCalefaccionHorometro || ""}
                                </Box>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                    <Box className="CardThirdPart">
                      {!!optionfechaResta1 && (
                        <SpeedMeter1 setHorometro={optionfechaResta1} />
                      )}
                    </Box>
                  </Box>
                </Grid>
              )}
              {!!optionValvulasCalDate && (
                <Grid item xs={12} md={5} lg={4} className="cardUnidad">
                  <Box className="Cards">
                    <Box className="TittleCardFirst">
                      <Box paddingRight={"50px"} className="ContainerControlAs">
                        <Grid container>
                          <Grid item xs={5}>
                            <Typography variant="h5" component="div">
                              Valvulas de Calefaccion
                            </Typography>
                          </Grid>
                          <Grid item xs={7}>
                            <Box>
                              <TextField
                                id="outlined-basic"
                                label=""
                                value={optionfechaResta2 || ""}
                                variant="outlined"
                                size="small"
                              />
                            </Box>
                            <Grid container spacing={4}>
                              <Grid item xs={6}>
                                <Box>{optionValvulasCalDate || ""}</Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box>{optionValvulasCalHorometro || ""}</Box>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                    <Box className="CardThirdPart">
                      {!!optionfechaResta2 && (
                        <SpeedMeter1 setHorometro={optionfechaResta2} />
                      )}
                    </Box>
                  </Box>
                </Grid>
              )}
              {!!optionControlAsDate && (
                <Grid item xs={12} md={5} lg={4} className="cardUnidad">
                  <Box className="Cards">
                    <Box className="TittleCardFirst">
                      <Box paddingRight={"50px"} className="ContainerControlAs">
                        <Grid container>
                          <Grid item xs={5}>
                            <Typography variant="h5" component="div">
                              ControlAs
                            </Typography>
                          </Grid>
                          <Grid item xs={7}>
                            <Box>
                              <TextField
                                id="outlined-basic"
                                label=""
                                value={optionfechaResta3 || ""}
                                variant="outlined"
                                size="small"
                              />
                            </Box>
                            <Grid container spacing={4}>
                              <Grid item xs={6}>
                                <Box>{optionControlAsDate || ""}</Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box>{optionControlAsHorometro || ""}</Box>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                    <Box className="CardThirdPart">
                      {!!optionfechaResta3 && (
                        <SpeedMeter1 setHorometro={optionfechaResta3} />
                      )}
                    </Box>
                  </Box>
                </Grid>
              )}
              {!!optionTermostatoDate && (
                <Grid item xs={12} md={5} lg={4} className="cardUnidad">
                  <Box className="Cards">
                    <Box className="TittleCardFirst">
                      <Box
                        paddingRight={"50px"}
                        className="ContainerTermostato"
                      >
                        <Grid container>
                          <Grid item xs={5}>
                            <Typography variant="h5" component="div">
                              Termostato
                            </Typography>
                          </Grid>
                          <Grid item xs={7}>
                            <Box>
                              <TextField
                                id="outlined-basic"
                                label=""
                                value={optionfechaResta4 || ""}
                                variant="outlined"
                                size="small"
                              />
                            </Box>
                            <Grid container spacing={4}>
                              <Grid item xs={6}>
                                <Box>{optionTermostatoDate || ""}</Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box>{optionTermostatoHorometro || ""}</Box>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                    <Box className="CardThirdPart">
                      {!!optionfechaResta4 && (
                        <SpeedMeter1 setHorometro={optionfechaResta4} />
                      )}
                    </Box>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
