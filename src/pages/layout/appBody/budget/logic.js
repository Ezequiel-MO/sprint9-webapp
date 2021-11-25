export const getHotelTotal = (obj) => {
  const { price } = obj;
  const {
    DUInr,
    DUIprice,
    DailyTax,
    DoubleRoomNr,
    DoubleRoomPrice,
    breakfast,
  } = price[0];
  const hotelTotal =
    DUInr * DUIprice +
    DoubleRoomNr * DoubleRoomPrice +
    DailyTax * DUInr +
    DailyTax * DoubleRoomNr * 2 +
    breakfast * DUInr +
    breakfast * DoubleRoomNr * 2;

  return hotelTotal;
};
