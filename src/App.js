import Logo from "./components/Logo";
import Income from "./components/Income";
import ExpenseForm from "./components/ExpenseForm";
import Output from "./components/Output";
import IncomeValue from "./components/IncomeValue";
import CommissionField from "./components/CommissionField";
import Button from "./components/Button";
import ExpenseField from "./components/ExpenseField";

import { UseApp } from "./contexts/AppContext";

export default function App() {
  const {
    income,
    setIncome,
    toggle,
    setToggle,
    rideCom,
    setRideCom,
    emplCom,
    setEmplCom,
    otherCom,
    setOtherCom,
    gasExp,
    setGasExp,
    mealsExp,
    setMealsExp,
    otherExp,
    setOtherExp,
  } = UseApp();

  function handleReset() {
    setIncome("");
    setToggle("");
    setEmplCom("");
    setOtherCom("");
    setGasExp("");
    setMealsExp("");
    setOtherExp("");
  }

  function handleToggle() {
    setToggle((t) => !t);
  }

  return (
    <div className="app">
      <Logo />
      <Income>
        <IncomeValue />
        <CommissionField trackValue={rideCom} setValue={setRideCom}>
          Rideshare commission (%)
        </CommissionField>
        <CommissionField trackValue={emplCom} setValue={setEmplCom}>
          Employer commission (%)
        </CommissionField>
        <CommissionField trackValue={otherCom} setValue={setOtherCom}>
          Other Commission
        </CommissionField>
        {income && (
          <div>
            <Button onClick={handleToggle}>
              {toggle ? "Close" : " Expenses"}
            </Button>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        )}
      </Income>
      {toggle && (
        <ExpenseForm>
          <ExpenseField value={gasExp} setValue={setGasExp}>
            Gas
          </ExpenseField>
          <ExpenseField value={mealsExp} setValue={setMealsExp}>
            Meals
          </ExpenseField>
          <ExpenseField value={otherExp} setValue={setOtherExp}>
            Cash
          </ExpenseField>
        </ExpenseForm>
      )}
      <Output />
    </div>
  );
}
