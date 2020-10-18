import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import OnePeople from '../OnePeople/OnePeople';
import { useHistory } from 'react-router-dom';


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

export default function TablePeoples() {
  const [data, setData] = useState([]);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const res = await fetch(" https://swapi.dev/api/people/");
      const json = await res.json();
      setData(json.results);
    })();
  }, []);

  console.log(data);

  function sortWeight() {
    console.log('sortWeight');
    setData([...data.sort((a, b) => a.mass - b.mass)]);
  }

  function sortHeight() {
    console.log('sortHeight');
    setData([...data.sort((a, b) => a.height - b.height)]);
  }

  function sortGender() {
    console.log('sortGender');
    setData([...data.filter(obj => obj.gender === 'male'), ...data.filter(obj => obj.gender === 'female'), ...data.filter(obj => obj.gender !== 'male' && obj.gender !== 'female')]);
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
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((obj) => (
            <StyledTableRow key={obj.name}>
              <StyledTableCell onClick={() => history.push(`/${obj.name}`)} component="th" scope="row">
                {obj.name}
              </StyledTableCell>
              <StyledTableCell align="right">{obj.mass}</StyledTableCell>
              <StyledTableCell align="right">{obj.height}</StyledTableCell>
              <StyledTableCell align="right">{obj.gender}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
