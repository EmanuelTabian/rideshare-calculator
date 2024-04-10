export default function IncomeValue({ income, onSetIncome }) {
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
