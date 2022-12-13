import PropTypes from 'prop-types';

import { Transaction } from './Transaction';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <Transaction transactions={transactions} />
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
};
