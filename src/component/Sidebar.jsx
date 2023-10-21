import React, { useState } from 'react'
import {AiFillHome} from "react-icons/ai";
import {MdGroups,MdOutlineSaveAlt,MdDarkMode} from "react-icons/md";
import {FaUserFriends,FaStar} from "react-icons/fa";
import {IoIosSettings,IoMdExit} from "react-icons/io"
import styles from "./Sidebar.module.css";
import {motion} from "framer-motion";

const listItemVariant ={
    onHover:{
      color: "#1a924d",
      scale: 1.1,
      originX: 0,
      transition:{
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit:{
      transition:{
        duration: 1
      }
    }
  }

const Sidebar = () => {
    return (
    <div className={styles["sidebar-container"]}>
        <ul className={styles["sidebar-list-container"]}>
            <motion.li variants={listItemVariant} whileHover="onHover" className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-one"]}`}>
                    <AiFillHome className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Home
                </span>
            </motion.li>
            <motion.li variants={listItemVariant} whileHover="onHover" className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-two"]}`}>
                    <IoIosSettings  className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Profile
                </span>
            </motion.li>
            <motion.li variants={listItemVariant} whileHover="onHover" className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-three"]}`}>
                    <FaStar className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    My Habits
                </span>
            </motion.li>
            <motion.li onClick={(e)=>{e.preventDefault();}} variants={listItemVariant} whileHover="onHover" className={styles["sidebar-item"]}>
                <div className={`${styles["sidebar-icon-container"]} ${styles["item-four"]}`}>
                    <IoMdExit className={styles["sidebar-icons"]}/>
                </div>
                <span>
                    Log Out
                </span>
            </motion.li>
        </ul>  
        <div className={styles["website-name-container"]}>
            <div className={styles["sidebar-line-breaker"]}></div>
            <span>Habit Leaf</span>
        </div>
    </div>
  )
}

export default Sidebar;