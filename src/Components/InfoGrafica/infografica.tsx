import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import axios from "axios";
import "../../utils/Styles/infoGrafica/infografica.scss";

interface Valores {
  id?: string;
}

const InfoGrafica = ({ id }: Valores) => {
  interface ReportePrECor {
    idEquipo: number;
    preventivos: number;
    sumaPreventivos: string;
    correctivos: number;
    sumaCorrectivos: string;
    intervenciones: number;
  }

  const [optionsReportePrECor, setOptions] = useState<ReportePrECor[]>([]);
  const [optionPreventivos, setOptionsPreventivos] = useState<Number>();
  const [optionCorrectivos, setOptionCorrectivos] = useState<Number>();
  const [optionSumaPreventivos, setOptionsSumaPreventivos] = useState<string>();
  const [optionSumaCorrectivos, setOptionSumaCorrectivos] = useState<string>();
  const [optionIntervenciones, setOptionIntervenciones] = useState<Number>();

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchData = async () => {
      if (id) {
        const result = await axios.get(
          `https://selin-modulo1.herokuapp.com/reportetr/listar/calculosgraficas?idEquipo=${id}`
        );
        setOptions(result.data);

        setOptionsPreventivos(
          result.data ? result.data.preventivos : "No data"
        );
        setOptionsSumaPreventivos(
          result.data ? result.data.sumaPreventivos : "No data"
        );
        setOptionCorrectivos(result.data ? result.data.correctivos : "No data");
        setOptionSumaCorrectivos(
          result.data ? result.data.sumaCorrectivos : "No data"
        );
        setOptionIntervenciones(
          result.data ? result.data.intervenciones : "No data"
        );
      }
    };
    fetchData();
  }, [id]);
  return (
    <>
      <Box className="GeneralContainerGrafIndo">
        <Box className="BoxMenu">
          <Grid container>
            <Grid item md={6} xs={6}>
              <Box className="TittleIntervenciones">
                <Typography variant="h6">Intervenciones</Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={6}>
              <Box className="CuadroGrafica">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="TxtfieldIntervenciones"
                  size="small"
                  value={optionIntervenciones || ""}
                  inputProps={{ readOnly: true }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className="BoxMenu">
          <Grid container>
            <Grid item md={6} xs={6}>
              <Box className="TitlePrevenivos">
                <Typography variant="h6">Preventivos</Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={6}>
              <Box>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="TxtfieldPreventivos"
                  size="small"
                  value={optionPreventivos || ""}
                  inputProps={{ readOnly: true }}
                />
              </Box>
              <Box>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="TxtfieldSumPreventivos"
                  size="small"
                  value={optionSumaPreventivos || ""}
                  inputProps={{ readOnly: true }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className="BoxMenu">
          <Grid container>
            <Grid item md={6} xs={6}>
              <Box className="TitleCorrectivos">
                <Typography variant="h6">Correctivos</Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={6}>
              <Box>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="TxtfieldCorrectivos"
                  size="small"
                  value={optionCorrectivos || ""}
                  inputProps={{ readOnly: true }}
                />
              </Box>
              <Box>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="TxtfieldSumCorrectivos"
                  size="small"
                  value={optionSumaCorrectivos || ""}
                  inputProps={{ readOnly: true }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default InfoGrafica;
