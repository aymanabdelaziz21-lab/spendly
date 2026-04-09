import { useApp } from "../../../Context/AppContext";
import { RiErrorWarningFill } from "react-icons/ri"
import { IoWarningOutline } from "react-icons/io5";
import { formatCurrency } from "../../../Assets/helpers/Currency"

const BudgetAlert = () => {
    const { transactions, budgets, currency } = useApp();

    const currentMonth = new Date().toISOString().slice(0, 7);

    const budget = budgets[currentMonth];

    if (!budget) return null; // لا يوجد ميزانية

    const monthlyExpenses = transactions
        .filter((tx) =>
            tx.date.startsWith(currentMonth)
        )
        .filter((tx) => tx.type === "expense")
        .reduce((sum, tx) => sum + tx.amount, 0);

    const percent = Math.round(
        (monthlyExpenses / budget) * 100
    );

    let status = "ok";
    if (monthlyExpenses > budget) status = "over";
    else if (percent >= 80) status = "warning";

    return (
        <div className={`budget-alert ${status}`}>

            {status === "ok" && (
                <p>
                    You used {percent}% of your monthly budget
                </p>
            )}

            {status === "warning" && (
                <p>
                    <IoWarningOutline size={22} /> Careful! You used {percent}% of your
                    budget
                </p>
            )}

            {status === "over" && (
                <p>
                    <RiErrorWarningFill size={22} /> You exceeded your budget by {formatCurrency((monthlyExpenses - budget), currency)}
                </p>
            )}
        </div>
    );
}

export default BudgetAlert