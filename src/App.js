import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import './App.css';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function App() {
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const res = await fetch(" https://swapi.dev/api/people/");
      const json = await res.json();
      setData(json.results);
    })();
  }, [data]);

  console.log(data);

  function sortWeight() {
    console.log('sortWeight');
  }

  function sortHeight() {
    console.log('sortHeight');
  }

  function sortGender() {
    console.log('sortGender');
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell onClick={sortWeight} align="right">Weight</StyledTableCell>
            <StyledTableCell onClick={sortHeight} align="right">Height</StyledTableCell>
            <StyledTableCell onClick={sortGender} align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">Birth year</StyledTableCell>
            <StyledTableCell align="right">Eye color</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((obj) => (
            <StyledTableRow key={obj.name}>
              <StyledTableCell component="th" scope="row">
                {obj.name}
              </StyledTableCell>
              <StyledTableCell align="right">{obj.mass}</StyledTableCell>
              <StyledTableCell align="right">{obj.height}</StyledTableCell>
              <StyledTableCell align="right">{obj.gender}</StyledTableCell>
              <StyledTableCell align="right">{obj.birth_year}</StyledTableCell>
              <StyledTableCell align="right">{obj.eye_color}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
