export const StatisticsItems = ({ stats }) => {
  return (
    <ul class="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li key={ id } className="item">
          <span className="label">{ label }</span>
          <span className="percentage">{ percentage }%</span>
        </li>
      ))}
    </ul>
  );
};
