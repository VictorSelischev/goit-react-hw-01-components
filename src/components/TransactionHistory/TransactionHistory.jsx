import { Transaction } from './Transaction/Transaction';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead className={css.table_thead}>
        <tr>
          <th className={css.table_th}>Type</th>
          <th className={css.table_th}>Amount</th>
          <th className={css.table_th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};
