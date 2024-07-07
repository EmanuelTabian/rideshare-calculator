import { createContext, useContext, useState } from "react";
import Logo from "./components/Logo";
import Income from "./components/Income";
import ExpenseForm from "./components/ExpenseForm";
import Output from "./components/Output";
import IncomeValue from "./components/IncomeValue";
import CommissionField from "./components/CommissionField";
import Button from "./components/Button";
import ExpenseField from "./components/ExpenseField";

import { UseAppContext, UseApp } from "./contexts/AppContext";

export default function App() {
  const [rideCom, setRideCom] = useState("");
  const [emplCom, setEmplCom] = useState("");
  const [otherCom, setOtherCom] = useState("");
  const [gasExp, setGasExp] = useState("");
  const [mealsExp, setMealsExp] = useState("");
  const [otherExp, setOtherExp] = useState("");
  const [toggle, setToggle] = useState(false);

  const { income, setIncome } = UseApp();

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
