import css from './StatisticsItems.module.css';

export const StatisticsItems = ({ stats }) => {
  return (
    <ul className={css.stat_list}>
      {stats.map(({ id, label, percentage }) => (
        <li key={ id } className={css.item} style={{backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`}}>
          <span className={css.label}>{ label }</span>
          <span className={css.percentage}>{ percentage }%</span>
        </li>
      ))}
    </ul>
  );
};
