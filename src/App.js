export default function App() {
  return (
    <div className="app">
      <Logo />
      <Income />
      <ExpenseForm />
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
function Income() {
  return (
    <div className="income">
      <CommissionField>Income</CommissionField>
      <CommissionField>Rideshare commission</CommissionField>
      <CommissionField>Employer commission</CommissionField>
      <CommissionField>Other commission</CommissionField>
      <Button>Other Expenses</Button>
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
function Button({ children }) {
  return <button className="button">{children}</button>;
}

function Output() {
  return (
    <div className="output">
      <p className="message">🤑 You have earned 250$ this week!</p>
    </div>
  );
}
