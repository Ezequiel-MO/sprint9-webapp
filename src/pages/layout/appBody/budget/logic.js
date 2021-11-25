export const getHotelTotal = (obj) => {
  console.log("prices object=>", obj.DUInr);
  const {
    DUInr,
    DUIprice,
    DoubleRoomNr,
    DoubleRoomPrice,
    breakfast,
    DailyTax,
  } = obj;
  return (
    DUInr * DUIprice +
    DoubleRoomNr * DoubleRoomPrice +
    breakfast * DUInr +
    +breakfast * DoubleRoomNr * 2 +
    DailyTax * DUInr +
    DailyTax * DoubleRoomNr * 2
  );
};
