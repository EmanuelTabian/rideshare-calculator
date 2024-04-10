export default function ExpenseField({ children, value, setValue }) {
  return (
    <div>
      <span>{children}</span>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(+e.target.value ? +e.target.value : "")}
      />
    </div>
  );
}
