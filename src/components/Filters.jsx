import PropTypes from 'prop-types';

const Filters = ({ filters, handleFilterChange }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-md flex items-center">
      <h2 className="text-lg font-semibold mr-4">Price:</h2>

      {/* Dropdown for Free, Paid, All */}
      <select
        value={filters.payment}
        onChange={(e) => handleFilterChange('payment', e.target.value)}
        className="mr-4"
      >
        <option value="all">All</option>
        <option value="free">Free</option>
        <option value="paid">Paid</option>
      </select>

      {/* Dropdown for iOS, Android, All */}
      <h2 className="text-lg font-semibold mr-4">Platform:</h2>
      <select
        value={filters.platform}
        onChange={(e) => handleFilterChange('platform', e.target.value)}
      >
        <option value="all">All</option>
        <option value="iOS">iOS</option>
        <option value="android">Android</option>
      </select>
    </div>
  );
};

Filters.propTypes = {
  filters: PropTypes.shape({
    payment: PropTypes.oneOf(['all', 'free', 'paid']).isRequired,
    platform: PropTypes.oneOf(['all', 'iOS', 'android']).isRequired,
  }).isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filters;
