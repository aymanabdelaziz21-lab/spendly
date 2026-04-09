import { useState } from 'react';
import { useApp } from '../../Context/AppContext';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Sector } from 'recharts'
import { formatCurrency } from '../../Assets/helpers/Currency'
import CustomTooltip from './CustomTooltip'

const ChartCard = ({ data, totalExpenses }) => {
    const { currency } = useApp();

    const [activeIndex, setActiveIndex] = useState(null);

    const dataWithPct = data.map((item) => ({
        ...item,
        pct: totalExpenses > 0 ? item.value / totalExpenses : 0,
    }));
    return (
        <div className="chart-card card">
            <h3>Expenses by Category</h3>

            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        style={{ outline: "none" }}
                        data={data}
                        dataKey="value"
                        innerRadius={70}
                        outerRadius={110}
                        paddingAngle={3}
                        isAnimationActive
                        animationDuration={1000}
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        onMouseEnter={(_, index) => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={index}
                                fill={entry.color}
                                fillOpacity={activeIndex === null ? 1 : (index === activeIndex ? 1 : 0.35)}
                            />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />

                    {/* total داخل الدائرة */}
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="chart-center-text"
                    >
                        {formatCurrency(totalExpenses, currency)}
                    </text>
                </PieChart>
            </ResponsiveContainer>
            <div className="chart-legend">
                {data.map((item) => (
                    <div key={item.name} className="legend-item">
                        <div className="legend-left">
                            <span
                                className="legend-color"
                                style={{ background: item.color }}
                            />
                            <span className="legend-name">
                                {item.name}
                            </span>
                        </div>

                        <div className="legend-right">
                            <span className="legend-value">
                                {formatCurrency(item.value, currency)}
                            </span>
                            <span className="legend-pct">
                                {Math.round((item.value / totalExpenses) * 100)}%
                            </span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

function renderActiveShape(props) {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

    return (
        <g>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius + 6}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={outerRadius + 8}
                outerRadius={outerRadius + 10}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
                opacity={0.25}
            />
        </g>
    );
}


export default ChartCard