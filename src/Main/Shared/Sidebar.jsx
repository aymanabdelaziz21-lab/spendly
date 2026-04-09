import { NavLink } from "react-router"
import { IoAddCircleOutline, IoSettings } from "react-icons/io5"
import { FaMoneyBillTransfer, FaCircleInfo } from "react-icons/fa6"
import { RiDashboard2Fill, RiNewspaperLine } from "react-icons/ri"

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="brand">
                Spendly
            </div>
            <NavLink to={'/add'} className="add-trans"><IoAddCircleOutline size={22} /> Add Transaction</NavLink>
            <nav className="nav-bar">
                <NavLink to="dashboard"><RiDashboard2Fill size={20} /> Dashboard</NavLink>
                <NavLink to="transactions"><FaMoneyBillTransfer size={20} /> Transactions</NavLink>
                <NavLink to="reports"><RiNewspaperLine size={20} /> Reports</NavLink>
                <NavLink to="categories"><FaCircleInfo size={20} /> Categories</NavLink>
                <NavLink to="settings"><IoSettings size={20} /> Settings</NavLink>
            </nav>
        </div>
    )
}

export default Sidebar