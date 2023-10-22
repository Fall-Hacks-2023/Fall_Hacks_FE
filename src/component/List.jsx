import React, { useEffect, useState } from 'react'
import { axiosInstance } from "..";
import { AiFillDelete } from 'react-icons/ai';
import "./components.css"
import { Progress } from '@chakra-ui/react'

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
                <div className='habit-title'>{habit.title}</div>
                <div className='habit-date-1'>{habit.achievementDate.split("T")[0]}</div>
                <div className='habit-date-2'>{habit.dateCreated.split("T")[0]}</div>
                <div className='habit-progress'><Progress hasStripe value={64} /></div>
                <div className='habit-delete'><AiFillDelete/></div>
            </div>
        ))}
        </div>
  )

}
export default List;