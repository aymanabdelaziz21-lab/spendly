import { useState } from "react";
import { useNavigate } from "react-router";
import { useApp } from "../../../Context/AppContext";
import { TransactionItem, EditTransactionModal } from "../../Shared";
import { EmptyState } from "../../Shared";

const TransactionsList = ({ filters }) => {
  const { transactions } = useApp();

  const [editingTx, setEditingTx] = useState(null);

  const filtered = transactions.filter((tx) => {

    // Search
    const matchesSearch = tx.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    // Type
    const matchesType =
      filters.type === "all" ||
      tx.type === filters.type;

    // Category
    const matchesCategory =
      filters.category === "all" ||
      tx.categoryId === filters.category;

    return (
      matchesSearch &&
      matchesType &&
      matchesCategory
    );
  });

  const sorted = [...filtered].sort((a, b) => {
    switch (filters.sortBy) {

      case "date_desc":
        return new Date(b.date) - new Date(a.date);

      case "date_asc":
        return new Date(a.date) - new Date(b.date);

      case "amount_desc":
        return b.amount - a.amount;

      case "amount_asc":
        return a.amount - b.amount;

      case "title_asc":
        return a.title.localeCompare(b.title);

      default:
        return 0;
    }
  });

  const navigateTo = useNavigate()

  if (!sorted.length) {
    return <EmptyState
      actionLabel={"Add Transactions"}
      onAction={() => navigateTo('/add')}
    />
  }

  return (
    <>
      <div className="transactions-list">
        {sorted.map((tx) => (
          <TransactionItem
            key={tx.id}
            tx={tx}
            onEdit={setEditingTx}
          />
        ))}
      </div>
      {editingTx && <EditTransactionModal tx={editingTx} onClose={() => setEditingTx(null)} />}
    </>
  );
}

export default TransactionsList