export const getHotelTotal = (obj, numberNights) => {
  const {
    DUInr,
    DUIprice,
    DoubleRoomNr,
    DoubleRoomPrice,
    breakfast,
    DailyTax,
  } = obj;
  const hotelTotal =
    numberNights *
    (DUInr * DUIprice +
      DoubleRoomNr * DoubleRoomPrice +
      breakfast * DUInr +
      breakfast * DoubleRoomNr * 2 +
      DailyTax * DUInr +
      DailyTax * DoubleRoomNr * 2);
  return hotelTotal;
};

const totalProgramCost = (nr, arr) => {
  let total = 0;
  arr.forEach((item) => {
    total += item.price * nr;
  });
  return 200;
};

export const getTotalBudget = (pax, schedule, totalHotelCost) => {
  return totalHotelCost + totalProgramCost(pax, schedule);
};
