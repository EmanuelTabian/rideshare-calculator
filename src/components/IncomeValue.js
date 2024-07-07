import { UseApp } from "../contexts/AppContext";

export default function IncomeValue() {
  const { income, setIncome } = UseApp();

  return (
    <div>
      <span>App Income</span>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(+e.target.value ? +e.target.value : "")}
      />
    </div>
  );
}
