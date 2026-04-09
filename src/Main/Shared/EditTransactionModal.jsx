import { useState } from "react";
import { useApp } from "../../Context/AppContext";
import { useToast } from "../../Context/ToastContext";

const EditTransactionModal = ({ tx, onClose, }) => {
    const { transactions, setTransactions, categories } = useApp();

    const toast = useToast()

    const [form, setForm] = useState({
        title: tx.title,
        amount: tx.amount,
        type: tx.type,
        categoryId: tx.categoryId,
        date: tx.date,
    });

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const updated = transactions.map((t) =>
            t.id === tx.id ? { ...t, ...form, amount: parseFloat(form.amount) } : t
        );

        setTransactions(updated);
        toast.success("Transaction Updated!", { title: "Success!" })
        onClose();
    }

    return (
        <div className="modal-overlay">
            <div className="modal">

                <h3>Edit Transaction</h3>

                <form onSubmit={handleSubmit}>

                    {/* Title */}
                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Title"
                        required
                    />

                    {/* Amount */}
                    <input
                        name="amount"
                        type="number"
                        value={form.amount}
                        onChange={handleChange}
                        required
                    />

                    {/* Type */}
                    <select
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                    >
                        <option value="expense">
                            Expense
                        </option>
                        <option value="income">
                            Income
                        </option>
                    </select>

                    {/* Category */}
                    <select
                        name="categoryId"
                        value={form.categoryId}
                        onChange={handleChange}
                    >
                        {categories.map((c) => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>

                    {/* Date */}
                    <input
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={handleChange}
                    />

                    {/* Actions */}
                    <div className="actions">
                        <button type="submit" className="submit-btn">
                            Save
                        </button>

                        <button
                            type="button"
                            onClick={onClose}
                            className="cancel-btn"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditTransactionModal