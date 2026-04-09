const STORAGE_KEYS = {
    TRANSACTIONS: "expense_transactions",
    CATEGORIES: "expense_categories",
    THEME: "expense_theme",
    BUDGETS: "expense_budgets",
    CURRENCY: "expense_currency"
};


export function saveTransactions(transactions) {
    localStorage.setItem(
        STORAGE_KEYS.TRANSACTIONS,
        JSON.stringify(transactions)
    );
}

export function saveCategories(categories) {
    localStorage.setItem(
        STORAGE_KEYS.CATEGORIES,
        JSON.stringify(categories)
    );
}

export function saveTheme(theme) {
    localStorage.setItem(STORAGE_KEYS, theme);
}


export function loadTheme() {
    const data = localStorage.getItem(STORAGE_KEYS)
    return data || "light";
}

export function loadTransactions() {
    const data = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
    return data ? JSON.parse(data) : null;
}

export function loadCategories() {
    const data = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
    return data ? JSON.parse(data) : null;
}

export function loadBudgets() {
    const data = localStorage.getItem(STORAGE_KEYS.BUDGETS);
    return data ? JSON.parse(data) : {};
}

export function saveBudgets(budgets) {
    localStorage.setItem(STORAGE_KEYS.BUDGETS, JSON.stringify(budgets));
}

export function loadCurrency() {
    const data = localStorage.getItem(STORAGE_KEYS.CURRENCY);
    return data ? JSON.parse(data) : null;
}

export function saveCurrency(currency) {
    localStorage.setItem(STORAGE_KEYS.CURRENCY, JSON.stringify(currency));
}