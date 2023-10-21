import React from 'react'
import styles from "./card.module.css";

export default function Card() {
  return (
    <div className={styles["card-container"]}>
        <div>Habbit name</div>
        <div>Interval</div>
        <div>Point = 0</div>
    </div>
  )
}
