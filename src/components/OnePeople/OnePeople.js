import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';


export default function OnePeople() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(" https://swapi.dev/api/people/");
      const json = await res.json();
      setData(json.results);
    })();
  }, []);

  console.log(data);


  return (
    <>
      rh
    </>
  );
}
