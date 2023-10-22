import React, { useEffect, useState } from 'react'
import { axiosInstance } from "..";
import "./components.css"

const List = () => {
    const [habits,setHabits] = useState(null);
    const fetchData = async() =>{
        const {data} = await axiosInstance.get('/habit');
        console.log("Habits:",data);
        setHabits(data)
    }
    useEffect(() => {
        fetchData();
    }, [])
  return (
    <div>
        {habits && habits.map((habit) =>(
            <div className="habit-row" >
                <div></div>
                <h1>{habit.title}</h1>
                <h1>{habit.achievementDate.split("T")[0]}</h1>
                <h1>{habit.dateCreated.split("T")[0]}</h1>
            </div>
        ))}
        </div>
  )

}
export default List;