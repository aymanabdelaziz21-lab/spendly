import { IoArrowBackOutline } from 'react-icons/io5'
import { Link, Outlet } from 'react-router'

const SettingsLayout = () => {
    return (
        <div className="settings-layout">
            <Link to={'/settings'} className='back'><IoArrowBackOutline size={25} />Go Back to Settings</Link>
            <Outlet />
        </div>
    )
}

export default SettingsLayout