// import PropTypes from 'prop-types';

export const Transaction = ({ transactions }) => {
  return (
    <tbody>
      {transactions.map(transaction => (
        <tr key={transaction.id}>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.currency}</td>
        </tr>
      ))}
    </tbody>
  );
};

// Transaction.propTypes = {
//   transactions: PropTypes.object(
//     PropTypes.exact({
//       id: PropTypes.string,
//       type: PropTypes.string,
//       amount: PropTypes.number,
//       currency: PropTypes.string,
//     }).isRequired
//   ),
// };
