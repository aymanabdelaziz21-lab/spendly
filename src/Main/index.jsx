import { Navigate } from "react-router"
import { useApp } from "../Context/AppContext"

const Index = () => {
    const { transactions } = useApp()
    if (transactions) return <Navigate to={'/dashboard'} />
}

export default Index