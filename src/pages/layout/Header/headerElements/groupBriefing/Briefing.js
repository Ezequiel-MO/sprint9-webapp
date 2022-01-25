import {
  TableContainer,
  Paper,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const Briefing = ({
  codeMatch,
  codeMatch: {
    groupName,
    groupLocation,
    clientAccManager,
    clientCo,
    arrivalDay,
    departureDay,
    nrPax,
    accountManager,
  },
}) => {
  console.log("codeMatch", codeMatch);
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant='body1'>Group Name</Typography>
            </TableCell>
            <TableCell>
              <Typography variant='body1'>City on offer</Typography>
            </TableCell>
            <TableCell>
              <Typography variant='body1'>Prepared for </Typography>
            </TableCell>
            <TableCell>
              <Typography variant='body1'>At</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant='h6'>{groupName}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant='h6'>{groupLocation}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant='h6'>{clientAccManager}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant='h6'>{clientCo}</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant='body1'>Arrival Day</Typography>
            </TableCell>
            <TableCell>
              <Typography variant='body1'>Departure Day</Typography>
            </TableCell>
            <TableCell>
              <Typography variant='body1'>Number of Pax</Typography>
            </TableCell>
            <TableCell>
              <Typography variant='body1'>Group Name</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant='h6'>{arrivalDay}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant='h6'>{departureDay}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant='h6'>{nrPax}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant='h6'>{accountManager}</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Briefing;
