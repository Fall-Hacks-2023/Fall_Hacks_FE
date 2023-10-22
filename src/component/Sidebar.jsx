import React, { useState } from 'react'
import {AiFillHome} from "react-icons/ai";
import {MdGroups,MdOutlineSaveAlt,MdDarkMode} from "react-icons/md";
import {FaUserFriends,FaStar} from "react-icons/fa";
import {IoIosSettings,IoMdExit} from "react-icons/io"
import styles from "./Sidebar.module.css";
import {motion} from "framer-motion";
import { axiosInstance } from '..';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    const logOut = async ()=>{
        try{
            const {data} = await axiosInstance.delete("/auth/logout");
            navigate("/login",{replace:true});
            console.log("logged out");
        }
        catch(err){
            console.log("logout failed");
            console.log(err);
        }
    }

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
            <motion.li onClick={(e)=>{e.preventDefault(); logOut()}} variants={listItemVariant} whileHover="onHover" className={styles["sidebar-item"]}>
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
