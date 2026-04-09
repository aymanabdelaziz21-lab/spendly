import { useApp } from '../../../Context/AppContext';
import { useToast } from '../../../Context/ToastContext';

const Currency = () => {
    const { currency, setCurrency } = useApp();

    const toast = useToast()
    return (
        <div className='currency'>
            <h2>Currency</h2>
            <p className='tip'>Select from here your prefered currency.</p>
            <select
                value={currency}
                onChange={(e) => {
                    setCurrency(e.target.value)
                    toast.info(`Currency have been changed to ${e.target.value}`, { title: "Done" })
                }}
            >
                <option value="USD">United States Dollars — $</option>
                <option value="EUR">Euro — €</option>
                <option value="GBP">Great Britain Pound — £</option>
                <option value="KZT">Kazakh Tenge — ₸</option>
                <option value="EGP">Egyptian Pound — E£</option>
                <option value="SAR">Saudi Riyal — ر.س</option>
                <option value="SDG">Sudanese Pound — ج.س</option>
            </select>
            <p className="note">And note that changing currency does NOT convert values, it only changes currency view.</p>
        </div>
    )
}

export default Currency