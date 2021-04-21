import React from 'react';

import styles from'./FriendsListItem.module.css';

import PropTypes from 'prop-types';

const FriendsListItem = ({ avatar,name,isOnline }) => (
    <li className={styles.itemFriends}>
        <span className={isOnline ? styles.active : styles.isActive}></span>
        <img className={styles.avatar} src={avatar} alt={name} width="150" />
        <p className={styles.name}>{name}</p>
    </li>
);

export default FriendsListItem;

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}