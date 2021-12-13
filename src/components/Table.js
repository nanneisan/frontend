import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableFilter from "./TableFilter";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Add from "@material-ui/icons/Add";

//components
import AppButton from "./Button";

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
  btn: {
    marginRight: 10,
  },
  addBtn: {
    backgroundColor: "#337ab7",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#337ab7",
      color: "#fff",
    },
  },
});

export default function CustomTable(props) {
  const classes = useStyles2();
  const { label, header, data } = props;

  return (
    <div>
      <TableFilter />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead id="tbhead">
            <TableRow>
              {header.map((one) => (
                <TableCell id="th" key={one} sortDirection="asc">
                  {one}
                </TableCell>
              ))}

              <TableCell>
                <AppButton
                  variant="contained"
                  href={`/${label}_entry`}
                  size="small"
                  className={classes.addBtn}
                  startIcon={<Add />}
                >
                  Add
                </AppButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow hover key={row.id}>
                <TableCell component="th" scope="row" sortDirection="asc">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>
                  <AppButton
                    variant="outlined"
                    size="small"
                    className={classes.btn}
                    disabled={true}
                  >
                    Edit
                  </AppButton>
                  <AppButton
                    variant="contained"
                    size="small"
                    color="secondary"
                    disabled={true}
                  >
                    Delete
                  </AppButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
