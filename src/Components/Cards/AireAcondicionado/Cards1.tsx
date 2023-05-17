import { Box, Grid } from "@mui/material";
import "../../../utils/Styles/Cards/Cards.scss";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import axios from "axios";
import SpeedMeter1 from "../../GraficaMedidor/speedmeter1";
import { format, parse } from "date-fns";
interface Valores {
  id?: string;
}

export default function Card1({ id }: Valores) {
  interface CambioRepuesto {
    cambioAcumuladorDate: string;
    cambioAcumuladorHorometro: string;
    cambioCondensadorDate: string;
    cambioCondensadorHorometro: string;
    cambioSecadorDate: string;
    cambioSecadorHorometro: string;
    cambioBlowerDate: string;
    cambioBlowerHorometro: string;
    cambioCompresorDate: string;
    cambioCompresorHorometro: string;
    cambioFajaDate: string;
    cambioFajaHorometro: string;
    cambioEvaporadorDate: string;
    cambioEvaporadorHorometro: string;
  }

  const [optionAcumuladorDate, setOptionsAcumuladorDate] = useState<string>();
  const [optionAcumuladorHorometro, setOptionAcumuladorHorometro] =
    useState<string>();
  const [optionCondensadorDate, setOptionsCondensadorDate] = useState<string>();
  const [optionCondensadorHorometro, setOptionCondensadorHorometro] =
    useState<string>();
  const [optionSecadorDate, setOptionsSecadorDate] = useState<string>();
  const [optionSecadorHorometro, setOptionSecadorHorometro] =
    useState<string>();
  const [optionBlowerDate, setOptionsBlowerDate] = useState<string>();
  const [optionBlowerHorometro, setOptionBlowerHorometro] = useState<string>();
  const [optionCompresorDate, setOptionsCompresorDate] = useState<string>();
  const [optionCompresorHorometro, setOptionCompresorHorometro] =
    useState<string>();
  const [optionFajaDate, setOptionsFajaDate] = useState<string>();
  const [optionFajaHorometro, setOptionFajaHorometro] = useState<string>();
  const [optionEvaporadorDate, setOptionsEvaporadorDate] = useState<string>();
  const [optionEvaporadorHorometro, setOptionEvaporadorHorometro] =
    useState<string>();
  const [optionfechaResta1, setOptionsFechaResta1] = useState<number>();
  const [optionfechaResta2, setOptionsFechaResta2] = useState<number>();
  const [optionfechaResta3, setOptionsFechaResta3] = useState<number>();
  const [optionfechaResta4, setOptionsFechaResta4] = useState<number>();
  const [optionfechaResta5, setOptionsFechaResta5] = useState<number>();
  const [optionfechaResta6, setOptionsFechaResta6] = useState<number>();
  const [optionfechaResta7, setOptionsFechaResta7] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const result = await axios.get(
          `https://selin-modulo1.herokuapp.com/equipos/cambiorepuesto/listar/calculosrelojes?idEquipo=${id}`
        );
        const dateFormat = "yyyyMMdd";
        const currentDate = new Date();

        setOptionsAcumuladorDate(
          result.data ? result.data.cambioAcumuladorDate : "No data"
        );
        setOptionAcumuladorHorometro(
          result.data ? result.data.cambioAcumuladorHorometro : "No data"
        );
        setOptionsCondensadorDate(
          result.data ? result.data.cambioCondensadorDate : "No data"
        );
        setOptionCondensadorHorometro(
          result.data ? result.data.cambioCondensadorHorometro : "No data"
        );
        setOptionsSecadorDate(
          result.data ? result.data.cambioSecadorDate : "No data"
        );
        setOptionSecadorHorometro(
          result.data ? result.data.cambioSecadorHorometro : "No data"
        );
        setOptionsBlowerDate(
          result.data ? result.data.cambioBlowerDate : "No data"
        );

        setOptionBlowerHorometro(
          result.data ? result.data.cambioBlowerHorometro : "No data"
        );
        setOptionsCompresorDate(
          result.data ? result.data.cambioCompresorDate : "No data"
        );
        setOptionCompresorHorometro(
          result.data ? result.data.cambioCompresorHorometro : "No data"
        );
        setOptionsFajaDate(
          result.data ? result.data.cambioFajaDate : "No data"
        );

        setOptionFajaHorometro(
          result.data ? result.data.cambioFajaHorometro : "No data"
        );
        setOptionsEvaporadorDate(
          result.data ? result.data.cambioEvaporadorDate : "No data"
        );
        setOptionEvaporadorHorometro(
          result.data ? result.data.cambioEvaporadorHorometro : "No data"
        );
          
        if (result.data) {
          if (result.data.cambioAcumuladorDate) {
            const parsedDate = parse(
              result.data.cambioAcumuladorDate,
              "yyyy-MM-dd",
              new Date()
            );
            const fechaseleccionado = format(parsedDate, "yyyyMMdd");

            const date1 = parse(fechaseleccionado, dateFormat, new Date());

            const differenceInDays = Math.floor(
              (currentDate.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24)
            );
            const resultadofechas = differenceInDays * 20;

            setOptionsFechaResta1(resultadofechas);
          }

          //------------------------------------------------------------------------------------------------

          if (result.data.cambioCondensadorDate) {
            const parsedDate1 = parse(
              result.data.cambioCondensadorDate,
              "yyyy-MM-dd",
              new Date()
            );
            const fechaseleccionado1 = format(parsedDate1, "yyyyMMdd");
            const date2 = parse(fechaseleccionado1, dateFormat, new Date());

            const differenceInDays1 = Math.floor(
              (currentDate.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24)
            );
            const resultadofechas1 = differenceInDays1 * 20;
            setOptionsFechaResta2(resultadofechas1);
          }

          //------------------------------------------------------------------------------------------------

          if (result.data.cambioSecadorDate) {
            const parsedDate2 = parse(
              result.data.cambioSecadorDate,
              "yyyy-MM-dd",
              new Date()
            );
            const fechaseleccionado2 = format(parsedDate2, "yyyyMMdd");
            const date3 = parse(fechaseleccionado2, dateFormat, new Date());

            const differenceInDays2 = Math.floor(
              (currentDate.getTime() - date3.getTime()) / (1000 * 60 * 60 * 24)
            );
            const resultadofechas2 = differenceInDays2 * 20;
            setOptionsFechaResta3(resultadofechas2);
          }

          //------------------------------------------------------------------------------------------------

          if (result.data.cambioBlowerDate) {
            const parsedDate4 = parse(
              result.data.cambioBlowerDate,
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

          //------------------------------------------------------------------------------------------------

          if (result.data.cambioCompresorDate) {
            const parsedDate5 = parse(
              result.data.cambioCompresorDate,
              "yyyy-MM-dd",
              new Date()
            );
            const fechaseleccionado5 = format(parsedDate5, "yyyyMMdd");
            const date5 = parse(fechaseleccionado5, dateFormat, new Date());

            const differenceInDays5 = Math.floor(
              (currentDate.getTime() - date5.getTime()) / (1000 * 60 * 60 * 24)
            );
            const resultadofechas5 = differenceInDays5 * 20;
            setOptionsFechaResta5(resultadofechas5);
          }

          //--------------------------------------------------------------------------------------------------

          if (result.data.cambioFajaDate) {
            const parsedDate6 = parse(
              result.data.cambioFajaDate,
              "yyyy-MM-dd",
              new Date()
            );
            const fechaseleccionado6 = format(parsedDate6, "yyyyMMdd");
            const date6 = parse(fechaseleccionado6, dateFormat, new Date());
            const differenceInDays6 = Math.floor(
              (currentDate.getTime() - date6.getTime()) / (1000 * 60 * 60 * 24)
            );
            const resultadofechas6 = differenceInDays6 * 20;
            setOptionsFechaResta6(resultadofechas6);
          }

          //------------------------------------------------------------------------------------------

          if (result.data.cambioEvaporadorDate) {
            const parsedDate7 = parse(
              result.data.cambioEvaporadorDate,
              "yyyy-MM-dd",
              new Date()
            );
            const fechaseleccionado7 = format(parsedDate7, "yyyyMMdd");
            const date7 = parse(fechaseleccionado7, dateFormat, new Date());
            const differenceInDays7 = Math.floor(
              (currentDate.getTime() - date7.getTime()) / (1000 * 60 * 60 * 24)
            );
            const resultadofechas7 = differenceInDays7 * 20;
            setOptionsFechaResta7(resultadofechas7);
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
            optionAcumuladorDate ||
            optionCondensadorDate ||
            optionSecadorDate ||
            optionBlowerDate ||
            optionFajaDate ||
            optionEvaporadorDate
          ) && (
            <Box
              textAlign="center"
              paddingBottom="2%"
              color={"white"}
              paddingTop={"2%"}
            >
              <Typography variant="h4">
                Componentes de Aire Acondicionado
              </Typography>
            </Box>
          )}
          <Container maxWidth="xl">
            <Grid container className="GridContainer " spacing={3}>
              {!!optionAcumuladorDate && (
                <Grid item xs={12} md={5} lg={4} className="cardUnidad">
                  <Box className="Cards">
                    <Box className="TittleCardFirst">
                      <Box
                        paddingRight={"50px"}
                        className="ContainerAcumulador"
                      >
                        <Grid container>
                          <Grid item xs={12} md={5}>
                            <Typography variant="h5" component="div">
                              Acumulador
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={7}>
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
                                <Box>{optionAcumuladorDate || ""}</Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box>{optionAcumuladorHorometro || ""}</Box>
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
              {!!optionCondensadorDate && (
                <Grid item xs={12} md={5} lg={4} className="cardUnidad">
                  <Box className="Cards">
                    <Box className="TittleCardFirst">
                      <Box
                        paddingRight={"50px"}
                        className="ContainerCondensador"
                      >
                        <Grid container>
                          <Grid item xs={12} md={5}>
                            <Typography variant="h5" component="div">
                              Condensador
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={7}>
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
                                <Box>{optionCondensadorDate || ""}</Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box>{optionCondensadorHorometro || ""}</Box>
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
              {!!optionSecadorDate && (
                <Grid item xs={12} md={5} lg={4} className="cardUnidad">
                  <Box className="Cards">
                    <Box className="TittleCardFirst">
                      <Box paddingRight={"50px"} className="ContainerSecador">
                        <Grid container>
                          <Grid item xs={12}  md={4}>
                            <Typography variant="h5" component="div">
                              Secador
                            </Typography>
                          </Grid>
                          <Grid item xs={12}  md={8}>
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
                                <Box>{optionSecadorDate || ""}</Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box>{optionSecadorHorometro || ""}</Box>
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
              {!!optionBlowerDate && (
                <Grid item xs={12} md={5} lg={4} className="cardUnidad">
                  <Box className="Cards">
                    <Box className="TittleCardFirst">
                      <Box paddingRight={"50px"} className="ContainerBlower">
                        <Grid container>
                          <Grid item xs={12} md={4}>
                            <Typography variant="h5" component="div">
                              Blower
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={8}>
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
                                <Box>{optionBlowerDate || ""}</Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box>{optionBlowerHorometro || ""}</Box>
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
              {!!optionCompresorDate && (
                <Grid item xs={12} md={5} lg={4} className="cardUnidad">
                  <Box className="Cards">
                    <Box className="TittleCardFirst">
                      <Box paddingRight={"50px"} className="ContainerCompresor">
                        <Grid container>
                          <Grid item xs={12}  md={5}>
                            <Typography variant="h5" component="div">
                              Compresor
                            </Typography>
                          </Grid>
                          <Grid item xs={12}  md={7}>
                            <Box>
                              <TextField
                                id="outlined-basic"
                                label=""
                                value={optionfechaResta5 || ""}
                                variant="outlined"
                                size="small"
                              />
                            </Box>
                            <Grid container spacing={4}>
                              <Grid item xs={6}>
                                <Box>{optionCompresorDate || ""}</Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box>{optionCompresorHorometro || ""}</Box>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                    <Box className="CardThirdPart">
                      {!!optionfechaResta5 && (
                        <SpeedMeter1 setHorometro={optionfechaResta5} />
                      )}
                    </Box>
                  </Box>
                </Grid>
              )}
              {!!optionFajaDate && (
                <Grid item xs={12} md={5} lg={4} className="cardUnidad">
                  <Box className="Cards">
                    <Box className="TittleCardFirst">
                      <Box paddingRight={"50px"} className="ContainerFaja">
                        <Grid container>
                          <Grid item xs={12}  md={5}>
                            <Typography variant="h5" component="div">
                              Faja
                            </Typography>
                          </Grid>
                          <Grid item xs={12}  md={7}>
                            <Box>
                              <TextField
                                id="outlined-basic"
                                label=""
                                value={optionfechaResta6 || ""}
                                variant="outlined"
                                size="small"
                              />
                            </Box>
                            <Grid container spacing={4}>
                              <Grid item xs={6}>
                                <Box>{optionFajaDate || ""}</Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box>{optionFajaHorometro || ""}</Box>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                    <Box className="CardThirdPart">
                      {!!optionfechaResta6 && (
                        <SpeedMeter1 setHorometro={optionfechaResta6} />
                      )}
                    </Box>
                  </Box>
                </Grid>
              )}
              {!!optionEvaporadorDate && (
                <Grid item xs={12} md={5} lg={4} className="cardUnidad">
                  <Box className="Cards">
                    <Box className="TittleCardFirst">
                      <Box
                        paddingRight={"50px"}
                        className="ContainerEvaporador"
                      >
                        <Grid container>
                          <Grid item xs={12}  md={5}>
                            <Typography variant="h5" component="div">
                              Evaporador
                            </Typography>
                          </Grid>
                          <Grid item xs={12}  md={7}>
                            <Box>
                              <TextField
                                id="outlined-basic"
                                label=""
                                value={optionfechaResta7 || ""}
                                variant="outlined"
                                size="small"
                              />
                            </Box>
                            <Grid container spacing={4}>
                              <Grid item xs={6}>
                                <Box>{optionEvaporadorDate || ""}</Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box>{optionEvaporadorHorometro || ""}</Box>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                    <Box className="CardThirdPart">
                      {!!optionfechaResta7 && (
                        <SpeedMeter1 setHorometro={optionfechaResta7} />
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
