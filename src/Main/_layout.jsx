import { Outlet } from "react-router"
import { Sidebar, Topbar } from "./Shared"
import "./Style/Main.css"

const Main = () => {
    return (
        <div className="main">
            <Topbar />
            <Sidebar />
            <div className="main-outlet">
                <Outlet />
            </div>
        </div>
    )
}

export default Main