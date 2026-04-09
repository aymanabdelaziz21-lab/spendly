export function calculateSummary(transactions) {
  let income = 0;
  let expenses = 0;

  transactions.forEach((tx) => {
    if (tx.type === "income") {
      income += parseFloat(tx.amount);
    } else {
      expenses += parseFloat(tx.amount);
    }
  });

  return {
    income,
    expenses,
    balance: income - expenses,
  };
}

export function getRecentTransactions(transactions, limit = 5) {
  return [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}