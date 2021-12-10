import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import OTLogic from "./OTLogic";

const OverviewTable = ({ codeMatch }) => {
  console.log("codeMatch", codeMatch);

  const { transformDates, getDays, getEvents } = OTLogic();

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant='h6'>
                {transformDates(codeMatch.arrivalDay, codeMatch.departureDay)}
              </Typography>
            </TableCell>
            {getDays(codeMatch.arrivalDay, codeMatch.departureDay).map(
              (day) => (
                <TableCell key={day}>
                  <Typography variant='h6'>{day}</Typography>
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant='body1'>
                Morning
                <span>
                  <Icon icon='vaadin:morning' color='#ea5033' width='40' />
                </span>
              </Typography>
            </TableCell>
            {getEvents(codeMatch.schedule, "morningEvents").map((event) => (
              <TableCell key={event}>{event}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant='body1'>
                Lunch
                <span>
                  <Icon icon='bx:bx-restaurant' color='#ea5033' width='35' />
                </span>
              </Typography>
            </TableCell>
            {getEvents(codeMatch.schedule, "lunch").map((event) => (
              <TableCell key={event}>{event}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant='body1'>
                Afternoon
                <span>
                  <Icon
                    icon='emojione-v1:cityscape-at-dusk'
                    color='#ea5033'
                    width='35'
                  />
                </span>
              </Typography>
            </TableCell>
            {getEvents(codeMatch.schedule, "afternoonEvents").map((event) => (
              <TableCell key={event}>{event}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant='body1'>
                Dinner
                <span>
                  <Icon icon='cil:dinner' color='#ea5033' width='35' />
                </span>
              </Typography>
            </TableCell>
            {getEvents(codeMatch.schedule, "dinner").map((event) => (
              <TableCell key={event}>{event}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OverviewTable;
