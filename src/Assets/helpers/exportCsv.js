function escapeCsvValue(value) {
    // نحول القيم إلى نص ونحمي علامات الاقتباس والفواصل
    const str = String(value ?? "");
    const escaped = str.replace(/"/g, '""');
    return `"${escaped}"`;
}

export function transactionsToCsv(transactions) {
    const headers = ["id", "title", "amount", "type", "categoryId", "date", "createdAt"];

    const rows = transactions.map((tx) => {
        return headers
            .map((key) => escapeCsvValue(tx[key]))
            .join(",");
    });

    return [headers.join(","), ...rows].join("\n");
}

export function downloadCsv(csvText, filename = "transactions.csv") {
    const blob = new Blob([csvText], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
}