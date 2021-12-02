import { Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { SubTotalsPaper } from "../../styles";
import accounting from "accounting";
import BudgetPerCategoryLogic from "./BudgetPerCategoryLogic";

const BudgetPerCategory = ({ selectedHotel, pax }) => {
  const { renderData } = BudgetPerCategoryLogic(selectedHotel, pax);
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
