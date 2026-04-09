export const initialCategories = [
  {
    id: "food",
    name: "Food",
    color: "#FF6B6B",
  },
  {
    id: "transport",
    name: "Transport",
    color: "#4D96FF",
  },
  {
    id: "rent",
    name: "Rent",
    color: "#6BCB77",
  },
  {
    id: "salary",
    name: "Salary",
    color: "#FFD93D",
  },
  {
    id: "transfers",
    name: "Transfers",
    color: "#9c00e4",
    icon: "📦",
  },
  {
    id: "other",
    name: "Other",
    color: "#9E9E9E",
    icon: "📦",
  },
];


export const initialTransactions = [
  {
    id: "tx_1",
    title: "Lunch",
    amount: 12,
    type: "expense",
    categoryId: "food",
    date: "2026-01-12",
    createdAt: Date.now() - 10000000,
  },
  {
    id: "tx_2",
    title: "Taxi",
    amount: 8,
    type: "expense",
    categoryId: "transport",
    date: "2026-01-13",
    createdAt: Date.now() - 8000000,
  },
  {
    id: "tx_3",
    title: "January Salary",
    amount: 1200,
    type: "income",
    categoryId: "salary",
    date: "2026-01-01",
    createdAt: Date.now() - 20000000,
  },
  {
    id: "tx_4",
    title: "Apartment Rent",
    amount: 500,
    type: "expense",
    categoryId: "rent",
    date: "2026-01-05",
    createdAt: Date.now() - 15000000,
  },
];
