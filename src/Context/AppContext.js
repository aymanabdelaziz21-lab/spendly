import { createContext, useContext, useEffect, useState } from "react";
import { loadCategories, loadTransactions, saveCategories, saveTransactions, loadBudgets, saveBudgets, loadCurrency, saveCurrency, loadTheme, saveTheme } from "../Assets/helpers/storage";
import { initialCategories } from "../Assets/data/initialData"
import { useToast } from "./ToastContext";

const AppContext = createContext();

export function AppProvider({ children }) {
    const [transactions, setTransactions] = useState(
        loadTransactions() || []
    );

    const [categories, setCategories] = useState(
        loadCategories() || initialCategories
    );

    const [budgets, setBudgets] = useState(loadBudgets());

    const [currency, setCurrency] = useState(loadCurrency() || "USD");

    const [theme, setTheme] = useState(loadTheme() || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        setTheme(theme)
    }, [theme]);

    const toast = useToast()
    function resetData() {
        if (!window.confirm("This will delete all your transactions and budgets. Continue?")) {
            return;
        }

        setTransactions([]);
        setBudgets({});
        setCategories(initialCategories);
        toast.info("All Data has been DELETED.", {title: "Done"})
    }


    useEffect(() => {
        saveTransactions(transactions);
    }, [transactions]);

    useEffect(() => {
        saveCategories(categories);
    }, [categories]);

    useEffect(() => {
        saveBudgets(budgets);
    }, [budgets]);

    useEffect(() => {
        saveCurrency(currency);
    }, [currency]);

    useEffect(() => {
        saveTheme(theme);
    }, [theme]);

    return (
        <AppContext.Provider
            value={{
                transactions,
                setTransactions,
                categories,
                setCategories,
                budgets,
                setBudgets,
                currency,
                setCurrency,
                resetData,
                theme,
                setTheme
            }}
        >
            {children}
        </AppContext.Provider>
    );
}


export const useApp = () => useContext(AppContext);
