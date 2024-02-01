import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BottomNavigation } from '@mui/material';


function createData(name, price, amount, date) {
  return { name, price, amount, date };
}

const rows = [
  createData('แกงเขียวหวาน', 60, 2, '19/3/23'),
  createData('ต้มยำกุ้ง', 70, 1, '19/3/23'),
  createData('ผัดคะน้าหมูกรอบ', 60, 1, '19/3/23'),
];

export default function Admin() {
  return (
    <Box>
      <Container sx={{ py: 6 }} maxWidth="md">
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
            >
              Admin History
            </Typography>
          </Container>
        </Box>
        <TableContainer component={Paper}>
          <Typography textAlign={'left'} padding={2}>
            20/03/2566
          </Typography>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">price</TableCell>
                <TableCell align="right">amount</TableCell>
                <TableCell align="right">date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} sx={{ py: 4 }}>
          <Typography textAlign={'left'} padding={2}>
            19/03/2566
          </Typography>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">price</TableCell>
                <TableCell align="right">amount</TableCell>
                <TableCell align="right">date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      
      <BottomNavigation
        sx={{ background: "#063970", width: '100%', bottom: 0, position: 'fixed', }}
      >
        <Typography sx={{ margin: 2, color: "#FFFFFF" }}>
          TOTAL MEMBERS 12
        </Typography>

      </BottomNavigation>
    </Box>
  )
}