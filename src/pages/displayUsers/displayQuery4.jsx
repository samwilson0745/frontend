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




export default function DisplayQuery4() {
 
  const {getUserQuery4} = useUser();
  const [users,setUsers] = useState([]);
  async function getUser(){
    const data = await getUserQuery4();
    setUsers(data);
  }

    useEffect(()=>{
        getUser();
        console.log(users)
    },[])


  return (
    users.length==0?      <CircularProgress variant="plain" />:
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Income</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Car</TableCell>
            <TableCell align="right">Quote</TableCell>
            <TableCell align="right">Phone Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{user.first_name}</TableCell>
              <TableCell align="right">{user.last_name}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.gender}</TableCell>
              <TableCell align="right">{user.income}</TableCell>
              <TableCell align="right">{user.city}</TableCell>
              <TableCell align="right">{user.car}</TableCell>
              <TableCell align="right">{user.quote}</TableCell>
              <TableCell align="right">{user.phone_price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
