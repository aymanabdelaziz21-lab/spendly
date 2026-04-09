import { useState } from "react"
import { MonthSelector, ReportsSummary, CategoryChart, MonthlyTransactions, BudgetCard, QuickInsights } from "./components"
import "../Style/Reports.css"

const ReportsPage = () => {
    const currentMonth = `${new Date().getFullYear()}-${(new Date().getMonth() + 1) < 10 ? "0" + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)}`

    const [selectedMonth, setSelectedMonth] = useState(currentMonth)
    return (
        <div className="reports">
            <h3>Monthly Report for {selectedMonth}</h3>
            <MonthSelector selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
            <ReportsSummary selectedMonth={selectedMonth} />
            <QuickInsights selectedMonth={selectedMonth} />
            <BudgetCard selectedMonth={selectedMonth} />
            <div className="reports-grid">
                <CategoryChart selectedMonth={selectedMonth} />
                <MonthlyTransactions selectedMonth={selectedMonth} />
            </div>
        </div>
    );
}

export default ReportsPage