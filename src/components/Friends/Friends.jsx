import React from 'react';
import PropTypes from 'prop-types';

import FriendListItem from "../FriendsListItem";

import styles from './Friend.module.css';

const Friends = ({list}) => {

    const createListEl = list.map(props => <FriendListItem key={props.id} {...props} />)

    return (
        <ul className={styles.friendsList}>
            {createListEl}
        </ul>
    )
}

export default Friends;

Friends.propTypes = {
    list: PropTypes.array.isRequired,
}