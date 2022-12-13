import PropTypes from 'prop-types';
import { Statistics } from './Statistics';

export const StatisticsList = ({ title, stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul>
        {stats.map(stat => (
          <li class="item" key={stat.id}>
            <Statistics label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
