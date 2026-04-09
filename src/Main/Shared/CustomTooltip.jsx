import { useApp } from "../../Context/AppContext";
import { formatCurrency } from "../../Assets/helpers/Currency";

const CustomTooltip = ({ active, payload }) => {
  const { currency } = useApp();

  if (!active || !payload || !payload.length) return null;

  const item = payload[0].payload;

  return (
    <div className="chart-tooltip">
      <p className="tooltip-title">{item.name}</p>

      <p className="tooltip-value">
        {formatCurrency(item.value, currency)}
      </p>

      {item.percent && (
        <p className="tooltip-percent">
          {(item.percent * 100).toFixed(0)}%
        </p>
      )}
    </div>
  );
}

export default CustomTooltip