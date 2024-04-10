import { useState } from "react";
export default function App() {
  const [toggle, setToggle] = useState(false);
  const [income, setIncome] = useState(0);

  return (
    <div className="app">
      <Logo />
      <Income
        income={income}
        OnSetIncome={setIncome}
        toggle={toggle}
        onSetToggle={setToggle}
      />
      {toggle && <ExpenseForm />}
      <Output />
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

function Income({ toggle, onSetToggle, income, OnSetIncome }) {
  function handleToggle() {
    onSetToggle((t) => !t);
  }
  console.log(income);
  return (
    <div className="income">
      <IncomeValue income={income} OnSetIncome={OnSetIncome} />
      <CommissionField>Rideshare commission</CommissionField>
      <CommissionField>Employer commission</CommissionField>
      <CommissionField>Other commission</CommissionField>
      <Button onClick={handleToggle}>
        {toggle ? "Cancel" : "Other Expenses"}
      </Button>
    </div>
  );
}

function IncomeValue({ income, OnSetIncome }) {
  return (
    <div>
      <span>Income</span>
      <input
        type="text"
        value={income}
        onChange={(e) => OnSetIncome(+e.target.value)}
      />
    </div>
  );
}

function CommissionField({ children }) {
  return (
    <div>
      <span>{children}</span>
      <input type="text" />
    </div>
  );
}

function ExpenseForm() {
  return (
    <form className="expense-form">
      <fieldset>
        <label>Gas:</label>
        <input type="text" />
      </fieldset>
      <fieldset>
        <label>Meals:</label>
        <input type="text" />
      </fieldset>
      <fieldset>
        <label>Other:</label>
        <input type="text" />
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

function Output() {
  return (
    <div className="output">
      <p className="message">🤑 You have earned 250$ this week!</p>
    </div>
  );
}
