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
import { ScTypography, ScTableRow, ScTableCell } from "./styles";
import { Link } from "react-scroll";

const OverviewTable = ({ codeMatch }) => {
  console.log("codeMatch", codeMatch);

  const { transformDates, getDays, getEvents, renderEvent } = OTLogic();

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table size='small'>
        <TableHead>
          <ScTableRow>
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
          </ScTableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <ScTypography variant='body1'>
                Morning
                <span>
                  <Icon icon='vaadin:morning' color='#ea5033' width='40' />
                </span>
              </ScTypography>
            </TableCell>
            {getEvents(codeMatch.schedule, "morningEvents").map((event) => (
              <ScTableCell key={event[0].id}>
                <Link
                  to={`${event[0].id}`}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {renderEvent(event)}
                </Link>
              </ScTableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              <ScTypography variant='body1'>
                Lunch
                <span>
                  <Icon icon='bx:bx-restaurant' color='#ea5033' width='35' />
                </span>
              </ScTypography>
            </TableCell>
            {getEvents(codeMatch.schedule, "lunch").map((event) => (
              <ScTableCell key={event[0].id}>
                {" "}
                <Link
                  to={`${event[0].id}`}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {renderEvent(event)}
                </Link>
              </ScTableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              <ScTypography variant='body1'>
                Afternoon
                <span>
                  <Icon
                    icon='emojione-v1:cityscape-at-dusk'
                    color='#ea5033'
                    width='35'
                  />
                </span>
              </ScTypography>
            </TableCell>
            {getEvents(codeMatch.schedule, "afternoonEvents").map((event) => (
              <ScTableCell key={event[0].id}>
                {" "}
                <Link
                  to={`${event[0].id}`}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {renderEvent(event)}
                </Link>
              </ScTableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              <ScTypography variant='body1'>
                Dinner
                <span>
                  <Icon icon='cil:dinner' color='#ea5033' width='35' />
                </span>
              </ScTypography>
            </TableCell>
            {getEvents(codeMatch.schedule, "dinner").map((event) => (
              <ScTableCell key={event[0].id}>
                {" "}
                <Link
                  to={`${event[0].id}`}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {renderEvent(event)}
                </Link>
              </ScTableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OverviewTable;
