import { useApp } from "../../../Context/AppContext"
import { calculateSummary } from "../../../Assets/helpers/Calc"
import { SummaryCard } from "../../Shared"

const Summary = () => {
  const { transactions } = useApp()
  const data = calculateSummary(transactions)
  return (
    <div className="summary">
      <SummaryCard
        title="Income"
        value={data.income}
        type="income"
      />
      <SummaryCard
        title="Expenses"
        value={data.expenses}
        type="expense"
      />
      <SummaryCard
        title="Balance"
        value={data.balance}
        type="balance"
      />
    </div>
  )
}

export default Summary