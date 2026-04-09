import { useState } from "react";
import { useApp } from "../../../Context/AppContext";
import { useToast } from "../../../Context/ToastContext";

const AddTransactionForm = () => {
    const { categories, transactions, setTransactions } = useApp();

    const toast = useToast()

    const [form, setForm] = useState({
        title: "",
        amount: "",
        type: "expense",
        categoryId: "other",
        date: new Date().toISOString().slice(0, 10),
    });

    // تحديث الحقول
    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    // الإضافة
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.title || !form.amount || !form.categoryId) {
            toast.error("Please fill all fields", {title: "Error"});
            return;
        }

        const newTransaction = {
            id: "tx_" + Date.now(),
            title: form.title,
            amount: Number(form.amount),
            type: form.type,
            categoryId: form.categoryId,
            date: form.date,
            createdAt: Date.now(),
        };

        setTransactions([newTransaction, ...transactions]);

        toast.success("Transaction added!", {title: "Done"});

        setForm({
            title: "",
            amount: "",
            type: "expense",
            categoryId: "",
            date: new Date().toISOString().slice(0, 10),
        });
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>

            <input
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
            />

            <input
                name="amount"
                type="number"
                placeholder="Amount"
                value={form.amount}
                onChange={handleChange}
            />

            <select
                name="type"
                value={form.type}
                onChange={handleChange}
            >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>

            <select
                name="categoryId"
                value={form.categoryId}
                onChange={handleChange}
            >
                <option value="">Select Category</option>

                {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                        {cat.name}
                    </option>
                ))}
            </select>

            <input
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
            />

            <button type="submit">Add</button>
        </form>
    );
}

export default AddTransactionForm