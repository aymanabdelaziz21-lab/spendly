import { useToast } from '../../../Context/ToastContext'
import { useTheme } from '../../../Assets/helpers/useTheme'
import { IoArrowForward } from 'react-icons/io5'
import { Lightbulb, MoonStar } from 'lucide-react'

const Theme = () => {
    const { toggleTheme, theme } = useTheme()

    const toast = useToast()
    return (
        <div className='theme'>
            <h2>Theme</h2>
            <p className="tip">
                {
                    theme === "dark" ? <MoonStar size={25} />
                        : <Lightbulb size={25} />
                }
                {theme === "light" ? "Light Mode" : "Dark Mode"}
            </p>
            <button className="theme-btn" onClick={toggleTheme}>
                Change Theme <IoArrowForward size={20} />
            </button>
        </div>
    )
}

export default Theme