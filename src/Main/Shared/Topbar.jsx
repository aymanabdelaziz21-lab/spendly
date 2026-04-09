import { useState } from "react"
import { IoAddCircleOutline, IoSettings } from "react-icons/io5"
import { FaMoneyBillTransfer, FaCircleInfo } from "react-icons/fa6"
import { RiDashboard2Fill, RiNewspaperLine } from "react-icons/ri"
import { NavLink } from "react-router"

const Topbar = () => {
    const [active, setActive] = useState(false)
    return (
        <div className='topbar'>
            <div className="top">
                <div className="brand">
                    Spendly
                </div>
                <button
                    type="button"
                    className={`topbar-btn ${active ? "open" : ""}`}
                    onClick={() => { setActive(prev => !prev) }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className={`body ${active ? "open" : ""}`}>
                <NavLink to={'/add'} className="add-trans" onClick={() => setActive(prev => !prev)}><IoAddCircleOutline size={22} /> Add Transaction</NavLink>
                <nav className="nav-bar">
                    <NavLink to="dashboard" onClick={() => setActive(prev => !prev)}><RiDashboard2Fill size={20} /> Dashboard</NavLink>
                    <NavLink to="transactions" onClick={() => setActive(prev => !prev)}><FaMoneyBillTransfer size={20} /> Transactions</NavLink>
                    <NavLink to="reports" onClick={() => setActive(prev => !prev)}><RiNewspaperLine size={20} /> Reports</NavLink>
                    <NavLink to="categories" onClick={() => setActive(prev => !prev)}><FaCircleInfo size={20} /> Categories</NavLink>
                    <NavLink to="settings" onClick={() => setActive(prev => !prev)}><IoSettings size={20} /> Settings</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Topbar