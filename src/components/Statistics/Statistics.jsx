import React from 'react';

import styles from './Statistics.module.css';
import PropTypes from 'prop-types';



import StatListItem from "../StatListItem";

const Statistics = ({ title, stats }) => {
    
    const statisticElements = stats.map(props => <StatListItem key={props.id} {...props} />)

    return (
        <section className={styles.statistics}>
            
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className= {styles.statList}>
                {statisticElements}
            </ul>

        </section>
    );
};

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}