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
    <div>
      <CommissionField>Income</CommissionField>
      <CommissionField>Rideshare company commission</CommissionField>
      <CommissionField>Employer commission</CommissionField>
      <CommissionField>Other</CommissionField>
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
    <form>
      <label>Gas:</label>
      <input type="text" />
      <label>Meals:</label>
      <input type="text" />
      <label>Other:</label>
      <input type="text" />
      <button>Submit</button>
    </form>
  );
}
function Output() {
  return (
    <div>
      <p>🤑 You have earned 250$ this week!</p>
    </div>
  );
}
