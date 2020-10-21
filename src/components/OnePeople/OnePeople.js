import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom';

export default function OnePeople() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    (async () => {
      const res = await fetch(`https://swapi.dev/api/people/${id + 1}`);
      const json = await res.json();
      setData(json);
    })();
  }, []);

  console.log(data);


  return (
    <>
      <div>
        <p>{data.name}</p>
        <p>{data.mass}</p>
        <p>{data.height}</p>
        <p>{data.gender}</p>
        <p>{data.hair_color}</p>
        <p>{data.birth_year}</p>
        <p>{data.skin_color}</p>
      </div>
    </>
  );
}
