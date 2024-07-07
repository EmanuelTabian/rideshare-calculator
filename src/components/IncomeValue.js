import { UseApp } from "../contexts/AppContext";

export default function IncomeValue() {
  const { income, onSetIncome } = UseApp;
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
