import { Route, Routes, BrowserRouter } from "react-router-dom"
import Main from "./Main/_layout"
import Index from "./Main/index"
import { Dashboard, Transactions, Reports, Settings, Categories, Add } from "./Main/Pages"
import SettingsLayout from "./Main/Settings/_layout"
import { Currency, Export, Reset, Theme } from "./Main/Settings/Pages"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route element={<Main />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/settings" element={<SettingsLayout />}>
                        <Route path="/settings/currency" element={<Currency />} />
                        <Route path="/settings/export" element={<Export />} />
                        <Route path="/settings/reset" element={<Reset />} />
                        <Route path="/settings/theme" element={<Theme />} />
                    </Route>
                    <Route path="/categories" element={<Categories />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App