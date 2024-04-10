export default function ExpenseField({ children, value, setValue }) {
  return (
    <fieldset>
      <label>{children}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(+e.target.value ? +e.target.value : "")}
      />
    </fieldset>
  );
}
