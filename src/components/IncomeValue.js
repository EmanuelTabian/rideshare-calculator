import { useContext } from "react";

import { AppContext } from "../App";

export default function IncomeValue() {
  const { income, onSetIncome } = useContext(AppContext);
  console.log(income);
  return (
    <div>
      <span>App Income</span>
      <input
        type="number"
        value={income}
        onChange={(e) => onSetIncome(+e.target.value ? +e.target.value : "")}
      />
    </div>
  );
}
