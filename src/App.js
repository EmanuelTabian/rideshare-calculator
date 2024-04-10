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
function Income() {}
function ExpenseForm() {}
function Output() {}
