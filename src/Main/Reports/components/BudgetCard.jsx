import { useMemo, useState } from "react";
import { useApp } from "../../../Context/AppContext";
import { useToast } from "../../../Context/ToastContext";
import { formatCurrency } from "../../../Assets/helpers/Currency"

const BudgetCard = ({ selectedMonth }) => {
    const { transactions, budgets, setBudgets, currency } = useApp();

    const toast = useToast()

    const [input, setInput] = useState("");

    const monthExpenses = useMemo(() => {
        const monthlyTx = transactions.filter((tx) => tx.date.startsWith(selectedMonth));
        return monthlyTx
            .filter((t) => t.type === "expense")
            .reduce((sum, t) => sum + t.amount, 0);
    }, [transactions, selectedMonth]);

    const budget = budgets[selectedMonth] ?? 0;

    const percent = budget > 0 ? Math.min(100, Math.round((monthExpenses / budget) * 100)) : 0;
    const remaining = budget > 0 ? budget - monthExpenses : 0;

    const status =
        budget === 0 ? "none" :
            monthExpenses > budget ? "over" :
                percent >= 80 ? "warning" :
                    "ok";

    function saveBudget() {
        const value = parseFloat(input);
        if (!value || value <= 0) return;

        setBudgets((prev) => ({
            ...prev,
            [selectedMonth]: value,
        }));

        setInput("");
        toast.success("Budget has been Saved!", { title: "Success!" })
    }

    function removeBudget() {
        setBudgets((prev) => {
            const copy = { ...prev };
            delete copy[selectedMonth];
            return copy;
        });
        toast.info("Budget has been Removed.", { title: "Done" })
    }

    return (
        <div className="budget-card card">
            <div className="budget-header">
                <h3>Budget Limit</h3>
                {budget > 0 && (
                    <button className="budget-remove" onClick={removeBudget}>
                        Remove
                    </button>
                )}
            </div>

            {budget === 0 ? (
                <div className="budget-set">
                    <p className="muted">Set a budget for {selectedMonth}</p>
                    <div className="budget-row">
                        <input
                            type="number"
                            placeholder="e.g. 1000"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button onClick={saveBudget}>Save</button>
                    </div>
                </div>
            ) : (
                <>
                    <div className="budget-stats">
                        <div>
                            <p className="muted">Budget</p>
                            <p className="big">{formatCurrency(budget, currency)}</p>
                        </div>
                        <div>
                            <p className="muted">Spent</p>
                            <p className="big">{formatCurrency(monthExpenses, currency)}</p>
                        </div>
                        <div>
                            <p className="muted">Remaining</p>
                            <p className={`big ${remaining < 0 ? "neg" : ""}`}>
                                {formatCurrency(remaining, currency)}
                            </p>
                        </div>
                    </div>

                    <div className="progress">
                        <div className={`bar ${status}`} style={{ width: `${percent}%` }} />
                    </div>

                    <div className={`budget-msg ${status}`}>
                        {status === "ok" && `You used ${percent}% of your budget.`}
                        {status === "warning" && `Careful! You used ${percent}% of your budget.`}
                        {status === "over" && `Over budget by ${formatCurrency(Math.abs(remaining), currency)}.`}
                    </div>

                    <div className="budget-edit">
                        <input
                            type="number"
                            placeholder={`Update budget (current ${budget})`}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button onClick={saveBudget}>Update</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default BudgetCard