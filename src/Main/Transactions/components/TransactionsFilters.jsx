import { useApp } from "../../../Context/AppContext";

const TransactionsFilters = ({ filters, setFilters, }) => {
    const { categories } = useApp();

    function handleChange(e) {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="filters-container">
            <div className="top">
                <input
                    type="text"
                    name="search"
                    placeholder="Search transactions..."
                    value={filters.search}
                    onChange={handleChange}
                />

                {/* 💸 Type */}
                <select
                    name="type"
                    value={filters.type}
                    onChange={handleChange}
                >
                    <option value="all">All Types</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </div>
            <div className="bottom">
                <select
                    name="category"
                    value={filters.category}
                    onChange={handleChange}
                >
                    <option value="all">
                        All Categories
                    </option>

                    {categories.map((c) => (
                        <option key={c.id} value={c.id}>
                            {c.name}
                        </option>
                    ))}
                </select>
                {/* 🔽 Sorting */}
                <select
                    name="sortBy"
                    value={filters.sortBy}
                    onChange={handleChange}
                >
                    <option value="date_desc">
                        Newest First
                    </option>

                    <option value="date_asc">
                        Oldest First
                    </option>

                    <option value="amount_desc">
                        Highest Amount
                    </option>

                    <option value="amount_asc">
                        Lowest Amount
                    </option>

                    <option value="title_asc">
                        Title A → Z
                    </option>
                </select>
            </div>

            {/* 🔍 Search */}

            {/* 🏷 Category */}
        </div>
    );
}

export default TransactionsFilters