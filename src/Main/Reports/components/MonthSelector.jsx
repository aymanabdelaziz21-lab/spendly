const MonthSelector = ({ selectedMonth, setSelectedMonth }) => {
  function handleChange(e) {
    setSelectedMonth(e.target.value);
  }

  return (
    <input
      type="month"
      value={selectedMonth}
      onChange={handleChange}
    />
  );
}

export default MonthSelector