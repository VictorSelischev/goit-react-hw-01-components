import css from './Transaction.module.css';

export const Transaction = ({ type, amount, currency }) => {
    return (
        <tr className={css.table_tr}>
            <td className={css.table_td}>{type}</td>
            <td className={css.table_td}>{amount}</td>
            <td className={css.table_td}>{currency}</td>
        </tr>
    );
};