import css from './StatisticsItems.module.css';
import { PropTypes } from 'prop-types';

export const StatisticsItems = ({ stats }) => {
  return (
    <ul className={css.stat_list}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className={css.item}
          style={{
            backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
              16
            )}`,
          }}
        >
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

// StatisticsItems.propTypes = {
//   id: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired,
// };


StatisticsItems.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};