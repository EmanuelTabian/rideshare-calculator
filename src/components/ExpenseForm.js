import ExpenseField from "./ExpenseField";
export default function ExpenseForm({
  gasExp,
  onSetGasExp,
  mealsExp,
  onSetMealsExp,
  otherExp,
  onSetOtherExp,
}) {
  return (
    <div className="income">
      <ExpenseField value={gasExp} setValue={onSetGasExp}>
        Gas
      </ExpenseField>
      <ExpenseField value={mealsExp} setValue={onSetMealsExp}>
        Meals
      </ExpenseField>
      <ExpenseField value={otherExp} setValue={onSetOtherExp}>
        Cash
      </ExpenseField>
    </div>
  );
}
