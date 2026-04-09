import { ExpenseChart, RecentTransactions, Summary, BudgetAlert } from './components'
import "../Style/Dashboard.css"

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h2>Dashboard</h2>
      <Summary />
      <BudgetAlert />
      <div className="dashboard-grid">
        <ExpenseChart />
        <RecentTransactions />
      </div>
    </div>
  )
}

export default Dashboard