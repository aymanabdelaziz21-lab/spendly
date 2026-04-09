function InsightCard({ title, value }) {
  return (
    <div className="insight-card card">
      <p className="insight-title">{title}</p>
      <h4 className="insight-value">{value}</h4>
    </div>
  );
}

export default InsightCard;