import { UseApp } from "../contexts/AppContext";

export default function Output() {
  const { netIncome } = UseApp();
  return (
    <div className="output">
      {!netIncome ? (
        <p>🤑 You have no earnings, add an income value!</p>
      ) : netIncome > 0 ? (
        <p className="message">😎 You have earned {netIncome}RON this week!</p>
      ) : (
        <p className="message">
          😒 You've spent {Math.abs(netIncome)}RON more than you've earned!{" "}
        </p>
      )}
    </div>
  );
}
