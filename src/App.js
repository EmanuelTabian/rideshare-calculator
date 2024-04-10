import { useState } from "react";
export default function App() {
  const [toggle, setToggle] = useState(false);
  const [income, setIncome] = useState("");
  const [rideCom, setRideCom] = useState(25);
  const [emplCom, setEmplCom] = useState("");
  const [otherCom, setOtherCom] = useState("");
  const [gasExp, setGasExp] = useState("");
  const [mealsExp, setMealsExp] = useState("");
  const [otherExp, setOtherExp] = useState("");
  const [finalIncome, setFinalIncome] = useState("");

  const commissionPerc = rideCom + emplCom;
  const netIncome = Math.round(
    income - (commissionPerc * income) / 100 - otherCom
  );
  const totalExpenses = gasExp + mealsExp + otherExp;

  function handleSubmit(e) {
    e.preventDefault();
    setFinalIncome((i) => netIncome - totalExpenses);
    if (totalExpenses > finalIncome) return;
    console.log(finalIncome);
  }

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
      <Output netIncome={netIncome} finalIncome={finalIncome} />
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
        Other Commission
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

function ExpenseForm({
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

      <Button>Submit</Button>
    </form>
  );
}

function ExpenseField({ children, value, setValue }) {
  return (
    <fieldset>
      <label>{children}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(+e.target.value)}
      />
    </fieldset>
  );
}

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

function Output({ netIncome, finalIncome }) {
  return (
    <div className="output">
      {netIncome ? (
        <p className="message">
          🤑 You have earned {finalIncome ? finalIncome : netIncome}$ this week!
        </p>
      ) : (
        <p>😎 Write your income value above!</p>
      )}
    </div>
  );
}
