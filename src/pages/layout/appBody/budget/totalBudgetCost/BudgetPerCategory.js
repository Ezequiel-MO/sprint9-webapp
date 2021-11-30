import { Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { getHotelTotal, totalProgramCost } from "../logic";
import { useSelector } from "react-redux";
import { selectBudget } from "../../../../../features/BudgetSlice";
import { useState, useEffect } from "react";
import { SubTotalsPaper } from "../styles";
import accounting from "accounting";

const BudgetPerCategory = ({ selectedHotel, pax }) => {
  const schedule = useSelector(selectBudget);
  const [hotelCost, setHotelCost] = useState(0);
  const [costObj, setCostObj] = useState({
    totalMorningEvents: 0,
    totalAfternoonEvents: 0,
    totalLunch: 0,
    totalDinner: 0,
  });

  useEffect(() => {
    const {
      totalMorningEvents,
      totalAfternoonEvents,
      totalLunch,
      totalDinner,
    } = totalProgramCost(pax, schedule);
    setCostObj({
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
  return (
    <SubTotalsPaper>
      <Typography variant='h6' align='center'>
        Subtotals
      </Typography>
      {renderData.map((data) => (
        <div key={data.title}>
          <Typography variant='h6'>{data.title}</Typography>
          <Icon icon={data.icon} color='#ea5933' width='70' />
          <Typography variant='h6'>
            {accounting.formatMoney(data.value, "eur ", 0, ",", ".")}
          </Typography>
        </div>
      ))}
    </SubTotalsPaper>
  );
};

export default BudgetPerCategory;
