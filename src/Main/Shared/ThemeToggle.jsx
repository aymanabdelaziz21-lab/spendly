import { IoInvertModeOutline } from "react-icons/io5"


function ThemeToggle({ theme, toggleTheme }) {
    return (
        <button onClick={toggleTheme} className="theme-toggle">
            <IoInvertModeOutline size={30} color={theme === "light" ? "#1a1a1a" : "#eaeaea"} />
        </button>
    );
}

export default ThemeToggle;