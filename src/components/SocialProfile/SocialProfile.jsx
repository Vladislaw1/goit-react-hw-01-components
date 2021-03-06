import React from 'react';

import styles from'./SocialProfile.module.css';
import PropTypes from 'prop-types';


const SocialProfile = ({avatar,name,tag,location,stats}) => {

    return (
    <>
        <div className={styles.profile}>
            <div className= {styles.description}>
                    <img
                        src={avatar}
                        alt={name}
                        className={styles.avatar}
                        width="160"
                        height="160"
                    />
                    <p className={styles.name}>{name}</p>
                    <p className={styles.tag}>{tag}</p>
                    <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.stats}>
                <li>
                        <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{stats.followers}</span>
                </li>
                <li>
                        <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{stats.views}</span>
                </li>
                <li>
                    <span className={styles.label}>Likes</span>
                        <span className={styles.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
        </>
    )
};

export default SocialProfile;

SocialProfile.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
}