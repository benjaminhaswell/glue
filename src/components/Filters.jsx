import PropTypes from 'prop-types';

const Filters = ({ filters, handleFilterChange }) => {
    return (
        <div className="bg-gray-200 p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-2">Filters</h2>
            <label className="flex items-center mb-2">
                <input
                    type="checkbox"
                    checked={filters.free}
                    onChange={() => handleFilterChange('free')}
                    className="mr-2"
                />
                Free
            </label>
            <label className="flex items-center mb-2">
                <input
                    type="checkbox"
                    checked={filters.paid}
                    onChange={() => handleFilterChange('paid')}
                    className="mr-2"
                />
                Paid
            </label>
            <label className="flex items-center mb-2">
                <input
                    type="checkbox"
                    checked={filters.iOS}
                    onChange={() => handleFilterChange('iOS')}
                    className="mr-2"
                />
                iOS
            </label>
            <label className="flex items-center">
                <input
                    type="checkbox"
                    checked={filters.android}
                    onChange={() => handleFilterChange('android')}
                    className="mr-2"
                />
                Android
            </label>
        </div>
    );
};

Filters.propTypes = {
    filters: PropTypes.shape({
        free: PropTypes.bool.isRequired,
        paid: PropTypes.bool.isRequired,
        iOS: PropTypes.bool.isRequired,
        android: PropTypes.bool.isRequired,
    }).isRequired,
    handleFilterChange: PropTypes.func.isRequired,
};

export default Filters;
