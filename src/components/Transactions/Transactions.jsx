import React from 'react';

import TransactionsListItem from '../TransactionsListItem'
import './Transactions.css';

import PropTypes from 'prop-types';


const Transactions = ({list}) => {
    
    console.log(list);
    
    const transactionsEl = list.map(item => <TransactionsListItem key={item.id} {...item} />)
    
    return (
        <>
            <table className="transaction-history">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionsEl}
                </tbody>    
            </table>
        </>
    );
}

export default Transactions;

Transactions.propTypes = {
    list: PropTypes.array.isRequired,
}