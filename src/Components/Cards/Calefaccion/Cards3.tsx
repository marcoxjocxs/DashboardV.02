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

export default function Cards3({ id }: Valores) {
  interface CambioRepuesto {
    cambioSelloMarcoDate: string;
    cambioSelloMarcoHorometro: string;
    cambioChapaPuertaDate: string;
    cambioChapaPuertaHorometro: string;
    cambioSelloPuertaDate: string;
    cambioSelloPuertaHorometro: string;
    cambioSelloPpCabDate: string;
    cambioSelloPpCabHorometro: string;
    cambioVidrioDate: string;
    cambioVidrioHorometro: string;
  }

  const [optionSelloMarcoDate, setOptionsSelloMarcoDate] = useState<string>();
  const [optionSelloMarcoHorometro, setOptionSelloMarcoHorometro] =
    useState<string>();
  const [optionChapaPuertaDate, setOptionsChapaPuertaDate] = useState<string>();
  const [optionChapaPuertaHorometro, setOptionChapaPuertaHorometro] =
    useState<string>();
  const [optionSelloPuertaDate, setOptionsSelloPuertaDate] = useState<string>();
  const [optionSelloPuertaHorometro, setOptionSelloPuertaHorometro] =
    useState<string>();
  const [optionSelloPpCabDate, setOptionsSelloPpCabDate] = useState<string>();
  const [optionSelloPpCabHorometro, setOptionSelloPpCabHorometro] =
    useState<string>();
  const [optionVidrioDate, setOptionsVidrioDate] = useState<string>();
  const [optionVidrioHorometro, setOptionVidrioHorometro] = useState<string>();

  const [optionfechaResta1, setOptionsFechaResta1] = useState<number>();
  const [optionfechaResta2, setOptionsFechaResta2] = useState<number>();
  const [optionfechaResta3, setOptionsFechaResta3] = useState<number>();
  const [optionfechaResta4, setOptionsFechaResta4] = useState<number>();
  const [optionfechaResta5, setOptionsFechaResta5] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const result = await axios.get(
          `https://selin-modulo1.herokuapp.com/equipos/cambiorepuesto/listar/calculosrelojes?idEquipo=${id}`
        );

        const dateFormat = "yyyyMMdd";
        const currentDate = new Date();

        //------------------------------------------------------------------------------------------------------------
        setOptionsSelloMarcoDate(
          result.data ? result.data.cambioSelloMarcoDate : "No data"
        );
        setOptionSelloMarcoHorometro(
          result.data ? result.data.cambioSelloMarcoHorometro : "No data"
        );
        setOptionsChapaPuertaDate(
          result.data ? result.data.cambioChapaPuertaDate : "No data"
        );
        setOptionChapaPuertaHorometro(
          result.data ? result.data.cambioChapaPuertaHorometro : "No data"
        );
        setOptionsSelloPuertaDate(
          result.data ? result.data.cambioSelloPuertaDate : "No data"
        );
        setOptionSelloPuertaHorometro(
          result.data ? result.data.cambioSelloPuertaHorometro : "No data"
        );
        setOptionsSelloPpCabDate(
          result.data ? result.data.cambioSelloPpCabDate : "No data"
        );
        setOptionSelloPpCabHorometro(
          result.data ? result.data.cambioSelloPpCabHorometro : "No data"
        );
        setOptionsVidrioDate(
          result.data ? result.data.cambioVidrioDate : "No data"
        );
        setOptionVidrioHorometro(
          result.data ? result.data.cambioVidrioHorometro : "No data"
        );
        if (result.data) {
          if (result.data.cambioSelloMarcoDate) {
          }
          const parsedDate = parse(
            result.data.cambioSelloMarcoDate,
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

          //------------------------------------------------------------------------------------------------------------

          if (result.data.cambioChapaPuertaDate) {
            const parsedDate2 = parse(
              result.data.cambioChapaPuertaDate,
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

          //------------------------------------------------------------------------------------------------------------

          if (result.data.cambioSelloPuertaDate) {
            const parsedDate3 = parse(
              result.data.cambioSelloPuertaDate,
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

          //------------------------------------------------------------------------------------------------------------

          if (result.data.cambioSelloPpCabDate) {
            const parsedDate4 = parse(
              result.data.cambioSelloPpCabDate,
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

          //------------------------------------------------------------------------------------------------------------

          if (result.data.cambioVidrioDate) {
            const parsedDate5 = parse(
              result.data.cambioVidrioDate,
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
            optionSelloMarcoDate ||
            optionChapaPuertaDate ||
            optionSelloPuertaDate ||
            optionSelloPpCabDate ||
            optionVidrioDate
          ) && (
            <Box
              textAlign="center"
              paddingBottom="2%"
              color={"white"}
              paddingTop={"2%"}
            >
              <Typography variant="h4">Componentes de Cabina</Typography>
            </Box>
          )}
          <Container maxWidth="xl">
            <Grid container className="GridContainer " spacing={3}>
              {!!optionSelloMarcoDate && (
                <Grid item xs={12} md={5} lg={4} className="cardUnidad">
                  <Box className="Cards">
                    <Box className="TittleCardFirst">
                      <Box paddingRight={"50px"}>
                        <Grid container>
                          <Grid item xs={5}>
                            <Typography variant="h5" component="div">
                              Sello de Marco
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
                                <Box>{optionSelloMarcoDate || ""}</Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box>{optionSelloMarcoHorometro || ""}</Box>
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
              {!!optionChapaPuertaDate && (
                <Grid item xs={12} md={5} lg={4} className="cardUnidad">
                  <Box className="Cards">
                    <Box className="TittleCardFirst">
                      <Box paddingRight={"50px"}>
                        <Grid container>
                          <Grid item xs={5}>
                            <Typography variant="h5" component="div">
                              Chapa de Puerta
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
                                <Box>{optionChapaPuertaDate || ""}</Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box>{optionChapaPuertaHorometro || ""}</Box>
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
              {!!optionSelloPuertaDate && (
                <Grid item xs={12} md={5} lg={4} className="cardUnidad">
                  <Box className="Cards">
                    <Box className="TittleCardFirst">
                      <Box paddingRight={"50px"}>
                        <Grid container>
                          <Grid item xs={5}>
                            <Typography variant="h5" component="div">
                              Sello Puerta
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
                                <Box>{optionSelloPuertaDate || ""}</Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box>{optionSelloPuertaHorometro || ""}</Box>
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
              {!!optionSelloPpCabDate && (
                <Grid item xs={12} md={5} lg={4} className="cardUnidad">
                  <Box className="Cards">
                    <Box className="TittleCardFirst">
                      <Box paddingRight={"50px"}>
                        <Grid container>
                          <Grid item xs={5}>
                            <Typography variant="h5" component="div">
                              Sello PpCab
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
                                <Box>{optionSelloPpCabDate || ""}</Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box>{optionSelloPpCabHorometro || ""}</Box>
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
              {!!optionVidrioDate && (
                <Grid item xs={12} md={5} lg={4} className="cardUnidad">
                  <Box className="Cards">
                    <Box className="TittleCardFirst">
                      <Box paddingRight={"50px"}>
                        <Grid container>
                          <Grid item xs={5}>
                            <Typography variant="h5" component="div">
                              Cambio de Vidrio
                            </Typography>
                          </Grid>
                          <Grid item xs={7}>
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
                                <Box>{optionVidrioDate || ""}</Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box>{optionVidrioHorometro || ""}</Box>
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
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
