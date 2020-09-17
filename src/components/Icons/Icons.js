import React from 'react';
import IconPath from '../../assets/virus_icon';
import styles from './Icons.module.css';
const Icons = ({
    style = {},
    fill,
    width="40px",
    icon,
    viewBox = "0 0 24 24"
  }) => (
    <svg
      width={width}
      style={style}
      height={width}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={styles.MoveRight}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fill={fill}
        d={IconPath[icon]}
      />
    </svg>
  );
export default Icons