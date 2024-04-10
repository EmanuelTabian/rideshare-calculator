import { useState } from "react";
import Logo from "./components/Logo";
import Income from "./components/Income";
import ExpenseForm from "./components/ExpenseForm";
import Output from "./components/Output";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [income, setIncome] = useState("");
  const [rideCom, setRideCom] = useState(25);
  const [emplCom, setEmplCom] = useState("");
  const [otherCom, setOtherCom] = useState("");
  const [gasExp, setGasExp] = useState("");
  const [mealsExp, setMealsExp] = useState("");
  const [otherExp, setOtherExp] = useState("");
  // const [finalIncome, setFinalIncome] = useState("");

  const commissionPerc = rideCom + emplCom;
  const totalExpenses = Number(gasExp) + Number(mealsExp) + Number(otherExp);
  const netIncome = Math.round(
    income - (commissionPerc * income) / 100 - otherCom - totalExpenses
  );

  function handleSubmit(e) {
    e.preventDefault();
    // setFinalIncome(netIncome - totalExpenses);
    // console.log(finalIncome);
    setToggle(false);
  }

  function handleReset() {
    setIncome("");
    setToggle("");
    setEmplCom("");
    setOtherCom("");
    setGasExp("");
    setMealsExp("");
    setOtherExp("");
  }

  return (
    <div className="app">
      <Logo />
      <Income
        income={income}
        onSetIncome={setIncome}
        toggle={toggle}
        onSetToggle={setToggle}
        rideCom={rideCom}
        onSetRideCom={setRideCom}
        emplCom={emplCom}
        onSetEmplCom={setEmplCom}
        otherCom={otherCom}
        onSetOtherCom={setOtherCom}
        onHandleReset={handleReset}
      />
      {toggle && (
        <ExpenseForm
          gasExp={gasExp}
          onSetGasExp={setGasExp}
          mealsExp={mealsExp}
          onSetMealsExp={setMealsExp}
          otherExp={otherExp}
          onSetOtherExp={setOtherExp}
          onHandleSubmit={handleSubmit}
        />
      )}
      <Output netIncome={netIncome} />
    </div>
  );
}
