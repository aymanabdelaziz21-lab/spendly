import { useState } from "react";
import { NavLink } from "react-router";
import { TransactionsList, TransactionsFilters } from "./components";
import { IoAddCircleOutline } from "react-icons/io5";
import "../Style/Transactions.css"

const Transactions = () => {
  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    category: "all",
    sortBy: "date_desc",
  });
  return (
    <div className="transactions">
      <div className="transactions-header">
        <h2>Transactions</h2>
        <NavLink to={'/add'} className="add-trans"><IoAddCircleOutline size={22} /> Add Transaction</NavLink>
      </div>
      <TransactionsFilters filters={filters} setFilters={setFilters} />
      <TransactionsList filters={filters} />
    </div>
  );
}

export default Transactions