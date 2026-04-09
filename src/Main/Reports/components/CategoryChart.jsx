import { useNavigate } from "react-router";
import { useApp } from "../../../Context/AppContext";
import { groupExpensesByCategory } from "../../../Assets/helpers/Chart"
import { EmptyState, ChartCard } from "../../Shared";

const CategoryChart = ({ selectedMonth }) => {
  const { transactions, categories } = useApp();

  const monthlyTx = transactions.filter((tx) =>
    tx.date.startsWith(selectedMonth)
  );

  const expenses = monthlyTx.filter(
    (tx) => tx.type === "expense"
  );

  const data = groupExpensesByCategory(expenses, categories)

  const totalExpenses = data.reduce(
    (sum, item) => sum + item.value,
    0
  );


  const navigateTo = useNavigate()

  if (!data.length) {
    return (
      <EmptyState
        actionLabel={"Add Transactions"}
        onAction={() => navigateTo('/add')}
      />
    );
  }

  return (
    <ChartCard data={data} totalExpenses={totalExpenses} />
  );
}

export default CategoryChart