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
      <input type="number"></input>
    </div>
  );
}

function ExpenseForm() {}
function Output() {}
