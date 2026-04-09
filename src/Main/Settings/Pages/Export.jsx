import { transactionsToCsv, downloadCsv } from "../../../Assets/helpers/exportCsv";
import { useApp } from '../../../Context/AppContext';
import { useToast } from '../../../Context/ToastContext';

const Export = () => {
      const { transactions } = useApp();

        const toast = useToast()

    function handleExport() {
        if (!transactions.length) {
            toast.error("No transactions to export!", { title: "Error!" });
            return;
        }

        const csv = transactionsToCsv(transactions);

        const today = new Date().toISOString().slice(0, 10);
        downloadCsv(csv, `transactions_${today}.csv`);
        toast.success("Exported Data.", { title: "Success!" });
    }
    return (
        <div className='export'>
            <h2>CSV Export</h2>
            <p className="tip">Here you can export your data in a form of CSV (Excel file) to maintain your data for future usage.</p>
            <button type='button' onClick={handleExport}>Export CSV</button>
        </div>
    )
}

export default Export