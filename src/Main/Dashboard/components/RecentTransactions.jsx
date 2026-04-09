import { NavLink, useNavigate } from "react-router";
import { useApp } from "../../../Context/AppContext";
import { getRecentTransactions } from "../../../Assets/helpers/Calc";
import { FaMoneyBillWave } from "react-icons/fa6"
import { IoArrowForward } from "react-icons/io5"
import { formatCurrency } from "../../../Assets/helpers/Currency";
import { EmptyState } from "../../Shared";

const RecentTransactions = () => {
  const { transactions, categories, currency } = useApp();

  const recent = getRecentTransactions(transactions);

  const navigateTo = useNavigate()

  if (!recent.length) {
    return (
      <EmptyState
        actionLabel={"Add Transactions"}
        onAction={() => navigateTo('/add')}
      />
    );
  }

  return (
    <div className="card recent-card">
      <div className="recent-header">
        <h3>Recent Transactions</h3>
        <NavLink to={'/transactions'} className="view-all" type="button">
          View All
          <IoArrowForward size={20} />
        </NavLink>
      </div>

      <div className="recent-list">
        {
          recent.map((tx) => {
            const category = categories.find(
              (c) => c.id === tx.categoryId
            );

            return (
              <div key={tx.id} className="recent-item">

                <div className="recent-left">
                  <span className="icon">
                    <FaMoneyBillWave size={25} />
                  </span>

                  <div className="recent-body">
                    <p className="title">{tx.title}</p>
                    <span className="date">
                      {new Date(tx.date).toLocaleDateString()}
                    </span>
                    <span className="category">
                      {category?.name}
                    </span>
                  </div>
                </div>

                <div
                  className={`amount ${tx.type === "income"
                    ? "income"
                    : "expense"
                    }`}
                >
                  {tx.type === "income" ? "+" : "-"}
                  {formatCurrency(tx.amount, currency)}
                </div>

              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default RecentTransactions;