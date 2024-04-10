import { useState } from "react";
export default function App() {
  const [toggle, setToggle] = useState(false);
  const [income, setIncome] = useState("");
  const [rideCom, setRideCom] = useState(25);
  const [emplCom, setEmplCom] = useState("");
  const [otherCom, setOtherCom] = useState("");

  const commissionPerc = rideCom + emplCom;
  const netIncome = Math.round(
    income - (commissionPerc * income) / 100 - otherCom
  );

  return (
    <div className="app">
      <Logo />
      <Income
        income={income}
        OnSetIncome={setIncome}
        toggle={toggle}
        onSetToggle={setToggle}
        rideCom={rideCom}
        onSetRideCom={setRideCom}
        emplCom={emplCom}
        onSetEmplCom={setEmplCom}
        otherCom={otherCom}
        onSetOtherCom={setOtherCom}
      />
      {toggle && <ExpenseForm />}
      <Output netIncome={netIncome} />
    </div>
  );
}

function Logo() {
  return (
    <h1 className="logo">
      <span className="logo-color">RIDESHARE</span>&nbsp;
      <span>COPILOT</span>
    </h1>
  );
}

function Income({
  toggle,
  onSetToggle,
  income,
  OnSetIncome,
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
  return (
    <div className="income">
      <IncomeValue income={income} OnSetIncome={OnSetIncome} />
      <CommissionField trackValue={rideCom} setValue={onSetRideCom}>
        Rideshare commission (%)
      </CommissionField>
      <CommissionField trackValue={emplCom} setValue={onSetEmplCom}>
        Employer commission (%)
      </CommissionField>
      <CommissionField trackValue={otherCom} setValue={onSetOtherCom}>
        Cash
      </CommissionField>
      <Button onClick={handleToggle}>
        {toggle ? "Cancel" : "Other Expenses"}
      </Button>
    </div>
  );
}

function IncomeValue({ income, OnSetIncome }) {
  return (
    <div>
      <span>App Income</span>
      <input
        type="number"
        value={income}
        onChange={(e) => OnSetIncome(+e.target.value)}
      />
    </div>
  );
}

function CommissionField({ children, trackValue, setValue }) {
  return (
    <div>
      <span>{children}</span>
      <input
        type="number"
        value={trackValue}
        onChange={(e) => setValue(+e.target.value)}
      />
    </div>
  );
}

function ExpenseForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <fieldset>
        <label>Gas:</label>
        <input type="number" />
      </fieldset>
      <fieldset>
        <label>Meals:</label>
        <input type="number" />
      </fieldset>
      <fieldset>
        <label>Other:</label>
        <input type="number" />
      </fieldset>
      <Button>Submit</Button>
    </form>
  );
}
function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

function Output({ netIncome }) {
  return (
    <div className="output">
      {netIncome ? (
        <p className="message">🤑 You have earned {netIncome}$ this week!</p>
      ) : (
        <p>😎 Write your income value above!</p>
      )}
    </div>
  );
}
