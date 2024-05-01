import { createContext, useState } from "react";
import Logo from "./components/Logo";
import Income from "./components/Income";
import ExpenseForm from "./components/ExpenseForm";
import Output from "./components/Output";
import IncomeValue from "./components/IncomeValue";
import CommissionField from "./components/CommissionField";
import Button from "./components/Button";
import ExpenseField from "./components/ExpenseField";

const AppContext = createContext();

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [income, setIncome] = useState("");
  const [rideCom, setRideCom] = useState("");
  const [emplCom, setEmplCom] = useState("");
  const [otherCom, setOtherCom] = useState("");
  const [gasExp, setGasExp] = useState("");
  const [mealsExp, setMealsExp] = useState("");
  const [otherExp, setOtherExp] = useState("");

  const commissionPerc = rideCom + emplCom;
  const totalExpenses = Number(gasExp) + Number(mealsExp) + Number(otherExp);
  const netIncome = Math.round(
    income - (commissionPerc * income) / 100 - otherCom - totalExpenses
  );

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
    <AppContext.Provider
      value={{
        toggle,
        onSetToggle: setToggle,
        income,
        onSetIncome: setIncome,
        rideCom,
        onSetRideCom: setRideCom,
        emplCom,
        onSetEmplCom: setEmplCom,
        otherCom,
        onSetOtherCom: setOtherCom,
        gasExp,
        onSetGasExp: setGasExp,
        mealsExp,
        onSetMealsExp: setMealsExp,
        otherExp,
        onSetOtherExp: setOtherExp,
        commissionPerc,
        totalExpenses,
        netIncome,
      }}
    >
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
        <Output netIncome={netIncome} />
      </div>
    </AppContext.Provider>
  );
}

export { AppContext };
