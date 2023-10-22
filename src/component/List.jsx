import React, { useEffect, useState } from 'react'
import { axiosInstance } from "..";

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
            <div style={{}}>
                <h1>{habit.title}</h1>
                <h1>{habit.achievementDate}</h1>
                <h1>{habit.dateCreated}</h1>
            </div>
        ))}
        </div>
  )

}
export default List;