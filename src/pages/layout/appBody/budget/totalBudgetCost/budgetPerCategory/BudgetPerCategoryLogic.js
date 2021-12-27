import { useSelector } from "react-redux";
import { selectBudget } from "../../../../../../features/BudgetSlice";
import { useState, useEffect } from "react";
import { getHotelTotal, totalProgramCost } from "../../logic";

const BudgetPerCategoryLogic = (selectedHotel, pax) => {
  const schedule = useSelector(selectBudget);
  const [hotelCost, setHotelCost] = useState(0);
  const [costObj, setCostObj] = useState({
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
      value: costObj.totalTransfers,
    },
    {
      icon: "bx:bxs-hotel",
      title: "Accommodation",
      value: hotelCost,
    },
    {
      icon: "carbon:events",
      title: "Events",
      value: (costObj.totalMorningEvents + costObj.totalAfternoonEvents) * pax,
    },
    {
      icon: "bx:bx-restaurant",
      title: "Meals",
      value: (costObj.totalLunch + costObj.totalDinner) * pax,
    },
  ];
  return { renderData };
};

export default BudgetPerCategoryLogic;
