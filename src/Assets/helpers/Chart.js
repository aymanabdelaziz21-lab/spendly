export function groupExpensesByCategory(transactions, categories) {
  const result = {};

  transactions.forEach((tx) => {
    if (tx.type !== "expense") return;

    if (!result[tx.categoryId]) {
      result[tx.categoryId] = 0;
    }

    result[tx.categoryId] += tx.amount;
  });

  // نحولها لشكل مناسب للـ chart
  return Object.entries(result).map(([categoryId, amount]) => {
    const category = categories.find((c) => c.id === categoryId);

    return {
      name: category?.name || "Unknown",
      value: amount,
      color: category?.color || "#ccc",
    };
  });
}