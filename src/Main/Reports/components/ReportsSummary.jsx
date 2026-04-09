import { useApp } from "../../../Context/AppContext";
import { SummaryCard } from "../../Shared";

const ReportsSummary = ({ selectedMonth }) => {
  const { transactions } = useApp();

  const monthlyTx = transactions.filter((tx) =>
    tx.date.startsWith(selectedMonth)
  );

  const income = monthlyTx
    .filter((t) => t.type === "income")
    .reduce((sum, t) => parseFloat(sum) + parseFloat(t.amount), 0);

  const expenses = monthlyTx
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => parseFloat(sum) + parseFloat(t.amount), 0);

  const balance = income - expenses;

  return (
    <div className="summary">

      <SummaryCard
        title="Monthly Income"
        value={income}
        type="income"
      />

      <SummaryCard
        title="Monthly Expenses"
        value={expenses}
        type="expense"
      />

      <SummaryCard
        title="Balance"
        value={balance}
        type="balance"
      />

    </div>
  );
}

export default ReportsSummary