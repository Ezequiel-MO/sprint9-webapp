import { useSelector } from "react-redux";
import { selectBudget } from "../../../../../../features/BudgetSlice";
import { useState, useEffect } from "react";
import { getHotelTotal, totalProgramCost } from "../../logic";

const BudgetPerCategoryLogic = (selectedHotel, pax) => {
  const schedule = useSelector(selectBudget);
  const [hotelCost, setHotelCost] = useState(0);
  const [
    {
      totalTransfers,
      totalMorningEvents,
      totalAfternoonEvents,
      totalLunch,
      totalDinner,
    },
    setCostObj,
  ] = useState({
    totalTransfers: 0,
    totalMorningEvents: 0,
    totalAfternoonEvents: 0,
    totalLunch: 0,
    totalDinner: 0,
  });

  useEffect(() => {
    const {
      totalTransfers,
      totalMorningEvents,
      totalAfternoonEvents,
      totalLunch,
      totalDinner,
    } = totalProgramCost(pax, schedule);
    setCostObj({
      totalTransfers,
      totalMorningEvents,
      totalAfternoonEvents,
      totalLunch,
      totalDinner,
    });
  }, [schedule]);

  useEffect(() => {
    const hotelSubtotal = getHotelTotal(selectedHotel, schedule.length);
    setHotelCost(hotelSubtotal);
  }, [selectedHotel]);

  const renderData = [
    {
      icon: "bx:bxs-hotel",
      title: "Transfers",
      value: totalTransfers,
    },
    {
      icon: "bx:bxs-hotel",
      title: "Accommodation",
      value: hotelCost,
    },
    {
      icon: "carbon:events",
      title: "Events",
      value: (totalMorningEvents + totalAfternoonEvents) * pax,
    },
    {
      icon: "bx:bx-restaurant",
      title: "Meals",
      value: (totalLunch + totalDinner) * pax,
    },
  ];
  return { renderData };
};

export default BudgetPerCategoryLogic;
