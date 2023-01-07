import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, shipTo, amount) {
  return { id, date, name, shipTo, amount };
}

const rows = [
  createData(0, "7 de Janeiro de 2023", "Juciano Farias", "Algum", 312.44),
  createData(1, "7 de Janeiro de 2023", "Juciano Farias", "Algum", 866.99),
  createData(2, "7 de Janeiro de 2023", "Juciano Farias", "Algum", 100.81),
  createData(3, "7 de Janeiro de 2023", "Juciano Farias", "Algum", 654.39),
  createData(4, "7 de Janeiro de 2023", "Juciano Farias", "AlgumNJ", 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Economia por Bicibox</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Local</TableCell>
            <TableCell>Bairro</TableCell>
            <TableCell align="right">Redução de CO2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell align="right">{`${row.amount}Kg`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
