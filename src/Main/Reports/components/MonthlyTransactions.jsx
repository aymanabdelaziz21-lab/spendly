import { useState } from "react";
import { useNavigate } from "react-router";
import { useApp } from "../../../Context/AppContext";
import { TransactionItem, EmptyState, EditTransactionModal } from "../../Shared";

const MonthlyTransactions = ({ selectedMonth }) => {
  const { transactions } = useApp();

  const monthlyTx = transactions
    .filter((tx) =>
      tx.date.startsWith(selectedMonth)
    )
    .sort(
      (a, b) =>
        new Date(b.date) - new Date(a.date)
    );

  const [editingTx, setEditingTx] = useState(null);

  const navigateTo = useNavigate()

  if (!monthlyTx.length) {
    return (
      <EmptyState
        actionLabel={"Add Transactions"}
        onAction={() => navigateTo('/add')}
      />
    );
  }

  return (
    <>
      <div className="monthly-list">
        <h3>{selectedMonth} Transactions</h3>

        <div className="transactions-list">
          {monthlyTx.map((tx) => (
            <TransactionItem key={tx.id} tx={tx} onEdit={setEditingTx} />
          ))}
        </div>
      </div>
      {editingTx && <EditTransactionModal tx={editingTx} onClose={() => setEditingTx(null)} />}
    </>
  );
}

export default MonthlyTransactions