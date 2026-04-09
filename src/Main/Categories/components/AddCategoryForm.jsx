import { useState } from "react";
import { useApp } from "../../../Context/AppContext";
import { useToast } from "../../../Context/ToastContext";

function slugifyId(name) {
    return name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "_")
        .replace(/[^\w_]/g, "");
}

const AddCategoryForm = () => {
    const { categories, setCategories } = useApp();

    const [name, setName] = useState("");
    const [color, setColor] = useState("#0098e4");

    const toast = useToast()

    function handleSubmit(e) {
        e.preventDefault();
        const cleanName = name.trim();
        if (!cleanName) {
            toast.error("Please enter a category name!", { title: "Error!" })
            return
        }

        const baseId = slugifyId(cleanName) || "category";
        let id = baseId;
        let i = 1;
        while (categories.some((c) => c.id === id)) {
            id = `${baseId}_${i++}`;
        }

        const newCat = { id, name: cleanName, color };

        setCategories((prev) => [...prev, newCat]);

        setName("");
        setColor("#4D96FF");
        toast.success("Category has been Added!", { title: "Success!" })
    }

    return (
        <form className="cat-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Category name (e.g. Health)"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />

            <button type="submit">Add</button>
        </form>
    );
}

export default AddCategoryForm