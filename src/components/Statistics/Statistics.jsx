import PropTypes from "prop-types";

export const Statistics = ({label, percentage}) =>
{
    return (
          <>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </>
    )
}

Statistics.propTypes = {
    percentage: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
};

