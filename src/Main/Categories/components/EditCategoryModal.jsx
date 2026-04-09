import { useState } from "react";
import { useApp } from "../../../Context/AppContext";
import { useToast } from "../../../Context/ToastContext";

const EditCategoryModal = ({ category, onClose }) => {
    const { setCategories } = useApp();

    const toast = useToast()

    const [name, setName] = useState(category.name || "");
    const [color, setColor] = useState(category.color || "#0098e4");

    function handleSave(e) {
        e.preventDefault();

        const cleanName = name.trim();
        if (!cleanName) return;

        setCategories((prev) =>
            prev.map((c) =>
                c.id === category.id ? { ...c, name: cleanName, color } : c
            )
        );
        
        onClose();
        toast.info("Category has been Updated.", { title: "Done!" })
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Edit Category</h3>

                <form onSubmit={handleSave} className="modal-form">
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />

                    <div className="actions">
                        <button type="submit" className="submit-btn">Save</button>
                        <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditCategoryModal