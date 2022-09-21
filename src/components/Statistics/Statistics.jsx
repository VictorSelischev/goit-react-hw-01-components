import { StatisticsItems } from './StatisticsItem/StatisticsItems';
import css from './Statistics.module.css';
import { PropTypes } from 'prop-types';

export const Statistics = props => {
  const { title, stats } = props;
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <StatisticsItems stats={stats} />
    </section>
  );
};

// Statistics.defaultProps = {
//     title: "Upload stats",
// }

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
