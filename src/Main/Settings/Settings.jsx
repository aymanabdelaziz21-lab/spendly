import "../Style/Settings.css"
import { RiCurrencyLine, RiExportLine } from "react-icons/ri";
import { IoInvertModeOutline, IoWarningOutline } from "react-icons/io5";
import { Link } from "react-router";

const Settings = () => {
  return (
    <div className="settings">
      <h2>Settings</h2>
      <Link to={'/settings/currency'} className="settings-card card">
        <RiCurrencyLine size={30} />
        <p>Currency</p>
      </Link>
      <Link to={'/settings/export'} className="settings-card card">
        <RiExportLine size={30} />
        <p>Export CSV</p>
      </Link>
      <Link to={'/settings/reset'} className="settings-card card">
        <IoWarningOutline size={30} />
        <p>Reset data (Danger Zone)</p>
      </Link>
      <Link to={'/settings/theme'} className="settings-card card">
        <IoInvertModeOutline size={30} />
        <p>Theme</p>
      </Link>
    </div>
  );
}

export default Settings