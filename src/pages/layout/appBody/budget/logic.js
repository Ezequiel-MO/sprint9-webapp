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

const totalProgramCost = (nr, arr) => {
  let totalMorningEvents = 0;
  let totalAfternoonEvents = 0;
  let totalLunch = 0;
  let totalDinner = 0;
  //iterate through arr,
  arr.forEach((item) => {
    //iterate the item object
    for (let key in item) {
      //if the key is morningEvents
      if (key === "morningEvents") {
        //if morningEvents is an array
        if (Array.isArray(item[key])) {
          //iterate through the array
          item[key].forEach((event) => {
            //add the price to the total
            totalMorningEvents += event.price;
          });
        }
        //else if morningEvents is a single object
        else {
          //add the price to the total
          totalMorningEvents += item[key].price;
        }
      }
      //if the key is afternoonEvents
      if (key === "afternoonEvents") {
        //if afternoonEvents is an array
        if (Array.isArray(item[key])) {
          //iterate through the array
          item[key].forEach((event) => {
            //add the price to the total
            totalAfternoonEvents += event.price;
          });
        }
        //else if afternoonEvents is a single object
        else {
          //add the price to the total
          totalAfternoonEvents += item[key].price;
        }
      }
      //if the key is lunch
      if (key === "lunch") {
        //if lunch is an array
        if (Array.isArray(item[key])) {
          //iterate through the array
          item[key].forEach((event) => {
            //add the price to the total
            totalLunch += event.price;
          });
        }
        //else if lunch is a single object
        else {
          //add the price to the total
          totalLunch += item[key].price;
        }
      }
      //if the key is dinner
      if (key === "dinner") {
        //if dinner is an array
        if (Array.isArray(item[key])) {
          //iterate through the array
          item[key].forEach((event) => {
            //add the price to the total
            totalDinner += event.price;
          });
        }
        //else if dinner is a single object
        else {
          //add the price to the total
          totalDinner += item[key].price;
        }
      }
    }
  });
  return (
    nr * (totalMorningEvents + totalAfternoonEvents + totalLunch + totalDinner)
  );
};

export const getTotalBudget = (pax, schedule, hotelTotal) => {
  return hotelTotal + totalProgramCost(pax, schedule);
};
