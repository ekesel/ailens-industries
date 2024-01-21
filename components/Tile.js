import React, { useState } from 'react';

import styles from '../styles/Tile.module.css'

const Tile = (props) => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const getHoverCssContainer = () => {
        if (props?.color == 'yellow')
            return styles.yellowHead
        if (props?.color == 'blue')
            return styles.blueHead
    }

    const getTextCssContainer = () => {
        if (props?.color == 'yellow')
            return styles.yellowText
        if (props?.color == 'blue')
            return styles.blueText
    }

    const getNumberCssContainer = () => {
        if (props?.color == 'yellow')
            return styles.yellowNumber
        if (props?.color == 'blue')
            return styles.blueNumber
    }

    return (
        <div className={isHovering ? `${styles.container} ${getHoverCssContainer()}` : styles.container} onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            <div className={`${styles.head}`}>
                <span className={isHovering ? `${getNumberCssContainer()}` : styles.number}>{props?.number}</span>
                <span className={isHovering ? `${styles.textOnHover}` : `${styles.text} ${getTextCssContainer()}`}>{props?.data?.text}</span>
            </div>
            <div className={styles.body}>
                <p className={styles.bodyText}>
                    {props?.data?.desc}
                </p>
            </div>
        </div>
    )
}

export default Tile