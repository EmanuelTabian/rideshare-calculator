export default function Output({ netIncome, finalIncome }) {
  return (
    <div className="output">
      {netIncome ? (
        <p className="message">🤑 You have earned {netIncome}RON this week!</p>
      ) : (
        <p>😎 Write your income value above!</p>
      )}
    </div>
  );
}
