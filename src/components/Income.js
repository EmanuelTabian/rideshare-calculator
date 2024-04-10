import IncomeValue from "./IncomeValue";
import CommissionField from "./CommissionField";
import Button from "./Button";
export default function Income({
  toggle,
  onSetToggle,
  income,
  onSetIncome,
  rideCom,
  onSetRideCom,
  emplCom,
  onSetEmplCom,
  otherCom,
  onSetOtherCom,
}) {
  function handleToggle() {
    onSetToggle((t) => !t);
  }

  function handleReset() {
    onSetIncome("");
    onSetToggle("");
    onSetEmplCom("");
    onSetOtherCom("");
  }

  return (
    <div className="income">
      <IncomeValue income={income} onSetIncome={onSetIncome} />
      <CommissionField trackValue={rideCom} setValue={onSetRideCom}>
        Rideshare commission (%)
      </CommissionField>
      <CommissionField trackValue={emplCom} setValue={onSetEmplCom}>
        Employer commission (%)
      </CommissionField>
      <CommissionField trackValue={otherCom} setValue={onSetOtherCom}>
        Other Commission
      </CommissionField>
      {income && (
        <div>
          <Button onClick={handleToggle}>
            {toggle ? "Cancel" : " Expenses"}
          </Button>
          <Button onClick={handleReset}>Reset</Button>
        </div>
      )}
    </div>
  );
}
