import {useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useUser from '../../hooks/useUser';
import CircularProgress from '@mui/joy/CircularProgress';




export default function DisplayQuery5() {
 
  const {getUserQuery5} = useUser();
  const [users,setUsers] = useState([]);
  async function getUser(){
    const data = await getUserQuery5();
    setUsers(data);
  }

    useEffect(()=>{
        getUser();
    },[])


  return (
    users.length===0?      <CircularProgress variant="plain" />:
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>City</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">Average Income</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{user._id}</TableCell>
              <TableCell align="right">{user.count}</TableCell>
              <TableCell align="right">{user.average_income}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
