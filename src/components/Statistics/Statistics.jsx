import { StatisticsItems } from './StatisticsItem/StatisticsItems';
import css from './Statistics.module.css';

export const Statistics = props => {
  const { title, stats } = props;
  return (
    <section className={css.statistics}>
      {title && (<h2 className={css.title}>{title}</h2>)}
      <StatisticsItems stats={stats} />
    </section>
  );
};


// Statistics.defaultProps = {
//     title: "Upload stats",
// }