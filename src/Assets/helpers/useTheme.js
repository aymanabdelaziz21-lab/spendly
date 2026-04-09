import { useToast } from "../../Context/ToastContext";
import { useApp } from "../../Context/AppContext";

export function useTheme() {
    const { theme, setTheme } = useApp()
    const toast = useToast()

    function toggleTheme() {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
        toast.success("Theme Changed", {title: "Success"})
    }

    return { theme, toggleTheme };
}