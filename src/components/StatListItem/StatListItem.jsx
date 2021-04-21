import React from 'react';

import styles from './StatListItem.module.css'
import PropTypes from 'prop-types';


const StatListItem = ({label,percentage}) => {
    return (
        <li className={styles.item}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
        </li>
    );
}

export default StatListItem;

StatListItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
