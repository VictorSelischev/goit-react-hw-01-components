import css from './Transaction.module.css';
import { PropTypes } from 'prop-types';

export const Transaction = ({ type, amount, currency }) => {
    return (
        <tr className={css.table_tr}>
            <td className={css.table_td}>{type}</td>
            <td className={css.table_td}>{amount}</td>
            <td className={css.table_td}>{currency}</td>
        </tr>
    );
};

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};