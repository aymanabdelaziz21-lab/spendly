import { useApp } from "../../Context/AppContext";
import { IoTrashBinOutline } from "react-icons/io5";
import { FaMoneyBillTransfer, FaMoneyBillWave } from "react-icons/fa6";
import { RiEdit2Line } from "react-icons/ri";
import { formatCurrency } from "../../Assets/helpers/Currency";
import { useToast } from "../../Context/ToastContext";

const TransactionItem = ({ tx, onEdit }) => {
  const { categories, transactions, setTransactions, currency } =
    useApp();

  const toast = useToast()

  const category = categories.find(
    (c) => c.id === tx.categoryId
  );

  function handleDelete() {
    const filtered = transactions.filter(
      (t) => t.id !== tx.id
    );

    setTransactions(filtered);
    toast.info("Transaction has been Deleted.", { title: "Done" })
  }

  return (
    <div className="transaction-item card">
      <div className="left">
        <span className="icon">
          <FaMoneyBillTransfer size={25} />
        </span>

        <div className="transaction-body">
          <p className="title">{tx.title}</p>
          <span className="date">
            {new Date(tx.date).toLocaleDateString()}
          </span>
          <span className="category">
            {category?.name}
          </span>
        </div>
      </div>
      <div className="right">
        <span
          className={`amount ${tx.type === "income"
            ? "income"
            : "expense"
            }`}
        >
          {tx.type === "income" ? "+" : "-"}
          {formatCurrency(tx.amount, currency)}
        </span>

        <button
          className="edit-btn"
          onClick={() => onEdit(tx)}
        >
          <RiEdit2Line size={25} />
        </button>
        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          <IoTrashBinOutline size={25} />
        </button>
      </div>
    </div>
  );
}


export default TransactionItem