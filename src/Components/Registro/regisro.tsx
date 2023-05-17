import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import "../../utils/Styles/Registros/tables.scss"



interface Valores {
  id?: string;
}



export default function CustomizedTables({ id }: Valores) {
  interface InfoEquipo {
    value: string;
    idEquipo: number;
    idReporteTR: number;
    fechaInformeTR: string;
    horometro: string;
    idReporteTRActividad: number;
    duracion: string;
    idTipoMantenimiento: string;
    idActividad: string;
    idNivelActividad: string;
  }
  interface Props {
    data: InfoEquipo[];
  }
  
  const [optionsInfoEquipo, setOptions] = useState<InfoEquipo[]>([]);
  const [optionfechaInformeTR, setOptionsfechaInformeTR] = useState<string>();
  const [optionIdTipoMant, setOptionsIdTipoMant] = useState<string>();
  const [optionidActividad, setOptionsidAct] = useState<string>();
  const [optionidNivelActividad, setOptionsidNivelActividad] =
    useState<string>();

  React.useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const result = await axios.get(
          `https://selin-modulo1.herokuapp.com/reportetr/listar/graficas?idEquipo=${id}`
        );
        setOptions(result.data);
        setOptionsIdTipoMant(result.data.idTipoMantenimiento);
        setOptionsidAct(result.data.idActividad);
        setOptionsfechaInformeTR(result.data.fechaInformeTR);
        setOptionsidNivelActividad(result.data.idNivelActividad);
      }
    };
    fetchData();
  }, [id]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, optionsInfoEquipo.length - page * rowsPerPage);




  return (
    <Box className="">
   
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }} className="FondoTableBody">
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Fecha</TableCell>
                <TableCell>Horometro</TableCell>
                <TableCell>Tipo Mantenimiento</TableCell>
                <TableCell>Nivel Actividad</TableCell>
                <TableCell>Duracion</TableCell>
                <TableCell>Actividad</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="FondoTableBody">
              {(rowsPerPage > 0
                ? optionsInfoEquipo.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : optionsInfoEquipo
              ).map((row,index) => (
                <TableRow key={index} className="FondoTableBody">
                  <TableCell>{row.fechaInformeTR}</TableCell>
                  <TableCell>{row.horometro}</TableCell>
                  <TableCell>
                    {row.idTipoMantenimiento == "1"
                      ? "Preventivo"
                      : "Correctivo"}
                  </TableCell>
                  <TableCell>
                    {row.idNivelActividad == "1"
                      ? "SELECCIONE"
                      : row.idNivelActividad == "2"
                      ? "PM250"
                      : row.idNivelActividad == "3"
                      ? "PM500 O CORRECTIVO SIMPLE"
                      : row.idNivelActividad == "4"
                      ? "PM1000 O CAMBIO DE PIEZAS"
                      : row.idNivelActividad == "5"
                      ? "PM2000 O CORRECTIVO COMPLEJO"
                      : row.idNivelActividad == "6"
                      ? "NINGUNA"
                      : ""}
                  </TableCell>
                  <TableCell>{row.duracion}</TableCell>
                  <TableCell>
                    {row.idActividad == "1"
                      ? "HVAC"
                      : "HERMETISMO"}
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }} className="FondoPaginacion">
                  <TableCell colSpan={3} className="FondoPaginacion"/>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={optionsInfoEquipo.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
