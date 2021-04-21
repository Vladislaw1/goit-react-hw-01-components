import React from 'react';

import PropTypes from 'prop-types';
import './TransactionsListItem.css';

const TransactionsListItem = ({type,amount,currency}) => (
        <tr className="trans-list">
            <td className="trans-item">{type}</td>
            <td className="trans-item">{amount}</td>
            <td className="trans-item">{currency}</td>
        </tr>
);

export default TransactionsListItem;

TransactionsListItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}