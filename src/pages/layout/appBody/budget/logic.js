export const getHotelTotal = (obj, numberNights = 1) => {
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

const computeTotal = (field) => {
  let total = 0;
  //if field is an array
  if (Array.isArray(field)) {
    //iterate through the array
    field.forEach((event) => {
      //add the price to the total
      total += event.price || event.transfer_in_out;
    });
  }
  //else if morningEvents is a single object
  else {
    //add the price to the total
    total += field.price;
  }
  return total;
};

export const totalProgramCost = (nr, arr) => {
  let totalTransfers = 0;
  let totalMorningEvents = 0;
  let totalAfternoonEvents = 0;
  let totalLunch = 0;
  let totalDinner = 0;
  arr.forEach((item) => {
    for (let key in item) {
      if (key === "transfer_in_out") {
        totalTransfers += computeTotal(item[key]);
      } else if (key === "morningEvents") {
        totalMorningEvents += computeTotal(item[key]);
      } else if (key === "afternoonEvents") {
        totalAfternoonEvents += computeTotal(item[key]);
      } else if (key === "lunch") {
        totalLunch += computeTotal(item[key]);
      } else if (key === "dinner") {
        totalDinner += computeTotal(item[key]);
      }
    }
  });
  const totalScheduleCost =
    nr *
      (totalMorningEvents + totalAfternoonEvents + totalLunch + totalDinner) +
    totalTransfers;
  return {
    totalTransfers,
    totalScheduleCost,
    totalMorningEvents,
    totalAfternoonEvents,
    totalLunch,
    totalDinner,
  };
};

export const getTotalBudget = (pax, schedule, hotelTotal) => {
  const { totalScheduleCost } = totalProgramCost(pax, schedule);
  return hotelTotal + totalScheduleCost;
};
