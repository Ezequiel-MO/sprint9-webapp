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
      total += event.price;
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
  let totalMorningEvents = 0;
  let totalAfternoonEvents = 0;
  let totalLunch = 0;
  let totalDinner = 0;
  //iterate through arr,
  arr.forEach((item) => {
    //iterate the item object
    for (let key in item) {
      if (key === "morningEvents") {
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
    nr * (totalMorningEvents + totalAfternoonEvents + totalLunch + totalDinner);
  return {
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
