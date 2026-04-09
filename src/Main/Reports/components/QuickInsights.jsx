import { useMemo } from "react";
import { useApp } from "../../../Context/AppContext";
import InsightCard from "./InsightCard";
import { formatCurrency } from "../../../Assets/helpers/Currency"

export default function QuickInsights({ selectedMonth }) {
  const { transactions, categories, currency } = useApp();

  const insights = useMemo(() => {
    const monthlyTx = transactions.filter((tx) =>
      tx.date.startsWith(selectedMonth)
    );

    const expenses = monthlyTx.filter(
      (t) => t.type === "expense"
    );

    if (!expenses.length) {
      return null;
    }

    // 🧠 1) Top Category
    const categoryTotals = {};
    expenses.forEach((tx) => {
      if (!categoryTotals[tx.categoryId]) {
        categoryTotals[tx.categoryId] = 0;
      }
      categoryTotals[tx.categoryId] += tx.amount;
    });

    let topCategoryId = null;
    let topCategoryAmount = 0;

    Object.entries(categoryTotals).forEach(
      ([catId, amount]) => {
        if (amount > topCategoryAmount) {
          topCategoryAmount = amount;
          topCategoryId = catId;
        }
      }
    );

    const topCategory = categories.find(
      (c) => c.id === topCategoryId
    );

    // 🧠 2) Biggest Expense
    const biggestExpense = expenses.reduce(
      (max, tx) =>
        tx.amount > max.amount ? tx : max,
      expenses[0]
    );

    // 🧠 3) Average Daily Spending
    const totalExpenses = expenses.reduce(
      (sum, tx) => sum + tx.amount,
      0
    );

    const daysWithSpending = new Set(
      expenses.map((tx) => tx.date)
    ).size;

    const avgDaily =
      daysWithSpending > 0
        ? Math.round(totalExpenses / daysWithSpending)
        : 0;

    return {
      topCategory,
      topCategoryAmount,
      biggestExpense,
      avgDaily,
    };
  }, [transactions, selectedMonth, categories]);

  if (!insights) {
    return (
      <div className="insights-card">
        <p>No spending insights for this month</p>
      </div>
    );
  }

  return (
    <div className="insights-container">

      <InsightCard
        title="Top Spending Category"
        value={`${insights.topCategory?.name} — ${formatCurrency(insights.topCategoryAmount, currency)}`}
      />

      <InsightCard
        title="Biggest Expense"
        value={`${insights.biggestExpense.title} — ${formatCurrency(insights.biggestExpense.amount, currency)}`}
      />

      <InsightCard
        title="Average Daily Spending"
        value={`${formatCurrency(insights.avgDaily, currency)}`}
      />

    </div>
  );
}

