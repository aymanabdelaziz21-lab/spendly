import { useApp } from '../../../Context/AppContext';

const Reset = () => {
      const { resetData } = useApp();
    
  return (
    <div className='reset'>
        <h2>Data Reset</h2>
        <p className="tip">Here you can reset your data at any time.</p>
        <button type='button' onClick={resetData}>Reset All Data</button>
        <p className="note">This will remove all transactions and budgets.</p>
    </div>
  )
}

export default Reset