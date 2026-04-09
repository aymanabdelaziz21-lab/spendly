import { useState } from "react";
import { useApp } from "../../../Context/AppContext";
import { useToast } from "../../../Context/ToastContext";
import EditCategoryModal from "./EditCategoryModal";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

const CategoriesList = () => {
    const { categories, setCategories, setTransactions } = useApp();

    const toast = useToast()

    const [editing, setEditing] = useState(null);

    function handleDelete(catId) {
        if (catId === "other") {
            alert("You can't delete 'Other'.");
            return;
        }

        const cat = categories.find((c) => c.id === catId);
        if (!cat) return;

        const ok = window.confirm(
            `Delete category "${cat.name}"?\nAll related transactions will be moved to "Other".`
        );
        if (!ok) return;

        setCategories((prev) => prev.filter((c) => c.id !== catId));

        setTransactions((prev) =>
            prev.map((tx) => (tx.categoryId === catId ? { ...tx, categoryId: "other" } : tx))
        );
        toast.info("Category has been Deleted.", { title: "Done!" })
    }

    return (
        <>
            <div className="cat-list">
                {categories.map((cat) => (
                    <div key={cat.id} className="cat-item card">
                        <div className="cat-left">
                            <span
                                className="cat-dot"
                                style={{ background: cat.color || "#999" }}
                            />
                            <div>
                                <div className="cat-name">{cat.name}</div>
                            </div>
                        </div>

                        <div className="cat-actions">
                            <button onClick={() => setEditing(cat)}>
                                <RiEdit2Line size={25} />
                            </button>
                            <button onClick={() => handleDelete(cat.id)} disabled={cat.id === "other"}>
                                <RiDeleteBinLine size={25} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {editing && (
                <EditCategoryModal
                    category={editing}
                    onClose={() => setEditing(null)}
                />
            )}
        </>
    );
}

export default CategoriesList