import Button from "./Button";
import ExpenseField from "./ExpenseField";
export default function ExpenseForm({
  gasExp,
  onSetGasExp,
  mealsExp,
  onSetMealsExp,
  otherExp,
  onSetOtherExp,
  onHandleSubmit,
}) {
  return (
    <form className="expense-form" onSubmit={onHandleSubmit}>
      <ExpenseField value={gasExp} setValue={onSetGasExp}>
        Gas
      </ExpenseField>
      <ExpenseField value={mealsExp} setValue={onSetMealsExp}>
        Meals
      </ExpenseField>
      <ExpenseField value={otherExp} setValue={onSetOtherExp}>
        Cash
      </ExpenseField>

      <Button>Close</Button>
    </form>
  );
}
