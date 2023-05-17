import { Box } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "../../utils/Styles/Layout/layout.scss";
import TextField from "@mui/material/TextField";
import { createTheme } from "@mui/material/styles";

interface valoresLayaout {
  setId: any;
  setNodata:any;
}

const LayoutLeft = ({ setId , setNodata}: valoresLayaout) => {
  interface Tipo_taller {
    id: number;
    value: string;
    idTipoEquipo: number;
    nombreTipoEquipo: string;
    idEquipo: number;
    nombreEquipo: string;
  }
  interface Tipo_equipo {
    value: string;
    idTipoEquipo: number;
    estado_tipo_equipo: boolean;
    nombreTipoEquipo: string;
    Equipo: Equipo;
  }
  interface Equipo {
    value: string;
    idEquipo: number;
    nombreEquipo: string;
    TipoEquipo: Tipo_equipo;
    TipoTaller: Tipo_taller;
  }
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

  interface Props {
    id: string;
  }

  const [optionsTaller, setOptions] = useState<Tipo_taller[]>([]);
  const [optionsEquipo, setOptions2] = useState<Equipo[]>([]);
  const [optionfecha, setOptionsFecha] = useState<String>();
 
  const [optionHorometro, setOptionHorometro] = useState<String>();
  const [selectedId, setSelectedId] = useState("");
  const [selectedId2, setSelectedId2] = useState("");
  const [selectedId3, setSelectedId3] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (selectedId) {
        const result = await axios.get(
          `https://selin-modulo1.herokuapp.com/equipos/listar/taller?idTipoTaller=${selectedId}`
        );
        setOptions(result.data);
      }
    };
    fetchData();
  }, [selectedId]);
  useEffect(() => {
    const fetchData = async () => {
      if (selectedId2) {
        const result2 = await axios.get(
          `https://selin-modulo1.herokuapp.com/equipos/listar/tipos?idTipoEquipo=${selectedId2}&idTipoTaller=${selectedId}`
        );
        setOptions2(result2.data);
      }
    };
    fetchData();
  }, [selectedId2]);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedId3) {
        const result3 = await axios.get(
          `https://selin-modulo1.herokuapp.com/reportetr/listar/graficas?idEquipo=${selectedId3}`
        );
       
        setId(selectedId3);
        const reFechaReciente = result3.data
          ? result3.data[result3.data.length - 1]
          : [];
       
        setOptionsFecha(
          reFechaReciente ? reFechaReciente.fechaInformeTR : "No data"
        );
        setOptionHorometro(
          reFechaReciente ? reFechaReciente.horometro : "No data"
        );

        if(reFechaReciente == null )
        {
          setNodata("Si");
        }
        else{
          setNodata("No");
        }
      }
    };
    fetchData();
  }, [selectedId3]);

  const handleSelectChange = (event: SelectChangeEvent) => {
    setSelectedId(event.target.value as string);
  };
  const handleSelectChange2 = (event: SelectChangeEvent) => {
    setSelectedId2(event.target.value as string);
  };
  const handleSelectChange3 = (event: SelectChangeEvent) => {
    setSelectedId3(event.target.value as string);
  };

  return (
    <>
      <Box className="GeneralContainerLayout">
        <Box className="BoxMenu">
          <Grid container>
            <Grid item md={6} xs={6}>
              <Box className="TittleTittleTallerLayout">
                <Typography variant="h6">Tipo de Taller</Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={6}>
              <FormControl fullWidth size="small">
                <InputLabel
                  id="select1"
                  className="InputLayoutTipoTaller"
                ></InputLabel>
                <Select
                  value={selectedId}
                  onChange={handleSelectChange}
                  className="SelectTipoTaller"
                >
                  <MenuItem key="1" value="1">
                    TRUCKSHOP
                  </MenuItem>
                  <MenuItem key="2" value="2">
                    SOPORTE
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        <Box className="BoxMenu">
          <Grid container>
            <Grid item md={6} xs={6}>
              <Box className="TittleTipodeEquipoLayout">
                <Typography variant="h6">Tipo de Equipo</Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={6}>
              <FormControl fullWidth size="small">
                <InputLabel id="select2"></InputLabel>
                <Select
                  className="SelectTipoEquipo"
                  value={selectedId2}
                  onChange={handleSelectChange2}
                >
                  {optionsTaller.map((option, index) => (
                    <MenuItem key={index} value={option.idTipoEquipo}>
                      {option.nombreTipoEquipo}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Box className="BoxMenu">
          <Grid container>
            <Grid item md={6} xs={6}>
              <Box className="TittleEquipoLayout">
                <Typography variant="h6">Equipo</Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={6}>
              <FormControl fullWidth size="small">
                <InputLabel id="select3"></InputLabel>
                <Select
                  className="selectEquipo"
                  value={selectedId3}
                  onChange={handleSelectChange3}
                >
                  {optionsEquipo.map((option, index) => (
                    <MenuItem key={index} value={option.idEquipo}>
                      {option.nombreEquipo}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Box className="BoxMenu">
          <Grid container>
            <Grid item md={6} xs={6}>
              <Box className="TittleUltimoPmLayout">
                <Typography variant="h6">Ultimo Pm</Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                id="outlined-basic"
                className="TxtfieldUltimoPm"
                variant="outlined"
                size="small"
                value={optionfecha || ""}
                inputProps={{ readOnly: true }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box className="BoxMenu">
          <Grid container>
            <Grid item md={6} xs={6}>
              <Box className="TittleHorometroLayout">
                <Typography variant="h6">Horometro</Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="TxtfieldHorometro"
                size="small"
                value={optionHorometro || ""}
                inputProps={{ readOnly: true }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default LayoutLeft;
