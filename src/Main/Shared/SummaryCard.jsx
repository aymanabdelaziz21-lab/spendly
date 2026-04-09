import { useApp } from "../../Context/AppContext";
import { formatCurrency } from "../../Assets/helpers/Currency"


function SummaryCard({ title, value, type }) {
  const { currency } = useApp()
  return (
    <div className={`summary-card ${type}`}>
      <p className="card-title">{title}</p>
      <h2 className="card-value">
        {type === "income" ? "+" : type === "expense" ? "-" : ""}
        {formatCurrency(value, currency)}
      </h2>
    </div>
  );
}

export default SummaryCard;