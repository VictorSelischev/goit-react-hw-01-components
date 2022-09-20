import { StatisticsItems } from './StatisticsItem/StatisticsItems';

export const Statistics = props => {
  const { title, stats } = props;
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>
      <StatisticsItems stats={stats} />
    </section>
  );
};
